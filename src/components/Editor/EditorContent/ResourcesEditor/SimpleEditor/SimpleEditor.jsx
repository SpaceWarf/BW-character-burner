import React, { createRef } from "react";
import { Card, Input, Button } from 'semantic-ui-react';
import { simple } from '#Resources/Resources/mannish_resources.js';
import './SimpleEditor.scss';

class CardInput extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        const { onConfirm, onCancel } = this.props;

        return (
            <div className="CardInput" onClick={e => e.stopPropagation()}>
                <Input ref={this.inputRef} placeholder="Notes..." />
                <Button icon="check" onClick={onConfirm} positive />
                <Button icon="cancel" onClick={onCancel} negative />
            </div>
        );
    }
}

class SimpleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleClick(name) {
        const { active } = this.state;

        this.setState({
            active: active === name ? "" : name
        });
    }

    handleConfirm() {
        this.setState({
            active: ""
        });
    }

    handleCancel() {
        this.setState({
            active: ""
        });
    }

    render() {
        const { active } = this.state;

        return (
            <div className="SimpleEditor">
                {simple.map(item => (
                    <Card key={item.name} onClick={() => this.handleClick(item.name)}>
                        <Card.Content>
                            <Card.Header>
                                <p>{item.name}</p>
                                <p>{item.price} rps</p>
                            </Card.Header>
                            {active === item.name
                                ? <CardInput onConfirm={this.handleConfirm} onCancel={this.handleCancel} />
                                : <Card.Description>{item.description}</Card.Description>
                            }
                        </Card.Content>
                    </Card>
                ))}
            </div>
        );
    }
}

export default SimpleEditor;