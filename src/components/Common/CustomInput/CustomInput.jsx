import React, { createRef } from "react";
import { Input, Button } from 'semantic-ui-react';
import './CustomInput.scss';

class CustomInput extends React.Component {
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
        const { canCancel, onConfirm, onCancel } = this.props;
        const { text } = this.state;

        switch (key) {
            case 'Enter':
                if (text && text !== "") {
                    onConfirm(text);
                }
                break;
            case 'Escape':
                if (canCancel) {
                    onCancel();
                }
                break;
            default:
        }
    }

    render() {
        const {
            canCancel,
            onConfirm,
            onCancel,
            placeholder,
            allowEmpty
        } = this.props;
        const { text } = this.state;

        return (
            <div className="CustomInput" onClick={e => e.stopPropagation()}>
                <Input
                    ref={this.inputRef}
                    value={text}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    placeholder={placeholder}
                />
                <Button disabled={!allowEmpty && (!text || text === "")} icon="check" onClick={() => onConfirm(text)} positive />
                {canCancel && <Button icon="cancel" onClick={onCancel} negative />}
            </div>
        );
    }
}

CustomInput.defaultProps = {
    canCancel: true,
    allowEmpty: true
}

export default CustomInput;
