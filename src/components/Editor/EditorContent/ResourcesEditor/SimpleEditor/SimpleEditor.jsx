import React from "react";
import { Card, Input, Button } from 'semantic-ui-react';
import { simple } from '#Resources/Resources/mannish_resources.js';
import './SimpleEditor.scss';

class SimpleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        const { active } = this.state;

        this.setState({
            active: active === name ? "" : name
        });
    }

    render() {
        const { active } = this.state;

        return (
            <div className="SimpleEditor">
                {simple.map(item => (
                    <Card onClick={() => this.handleClick(item.name)}>
                        <Card.Content>
                            <Card.Header>
                                <p>{item.name}</p>
                                <p>{item.price} rps</p>
                            </Card.Header>
                            <Card.Description>{item.description}</Card.Description>
                        </Card.Content>
                    </Card>
                ))}
            </div>
        );
    }
}

export default SimpleEditor;