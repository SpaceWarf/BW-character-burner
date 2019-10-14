import React, { createRef } from "react";
import { Input, Button } from 'semantic-ui-react';
import './CardInput.scss';

class CardInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    handleChange(_, { value }) {
        this.setState({ text: value });
    }

    handleKeyUp({ key }) {
        const { onConfirm, onCancel } = this.props;
        const { text } = this.state;

        switch (key) {
            case 'Enter':
                onConfirm(text);
                break;
            case 'Escape':
                onCancel();
                break;
            default:
        }
    }

    render() {
        const { onConfirm, onCancel } = this.props;
        const { text } = this.state;

        return (
            <div className="CardInput" onClick={e => e.stopPropagation()}>
                <Input
                    ref={this.inputRef}
                    value={text}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder="Notes..."
                />
                <Button icon="check" onClick={() => onConfirm(text)} positive />
                <Button icon="cancel" onClick={onCancel} negative />
            </div>
        );
    }
}

export default CardInput;
