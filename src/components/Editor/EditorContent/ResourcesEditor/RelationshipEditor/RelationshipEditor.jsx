import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Form,
    Radio,
    Checkbox,
    Input,
    Button
} from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import { relationship } from '#Resources/Resources/mannish_resources.js';
import './RelationshipEditor.scss';

class RelationshipEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: {},
            selectedModifiers: [],
            note: ""
        }
        this.handleModifierChange = this.handleModifierChange.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleModifierChange(_, { value }) {
        const { selectedModifiers } = this.state;

        if (selectedModifiers.includes(value)) {
            this.setState({
                selectedModifiers: selectedModifiers
                    .filter(modifier => modifier !== value)
            })
        } else {
            this.setState({
                selectedModifiers: [
                    ...selectedModifiers,
                    value
                ]
            });
        }
    }

    getTotalCost() {
        const { selectedType, selectedModifiers } = this.state;

        const modifiers = selectedModifiers.reduce((total, modifier) => {
            return total + modifier.modifier;
        }, 0);
        return selectedType.price + modifiers;
    }

    handleConfirm() {
        const { onBuyResource } = this.props;
        const { selectedType, selectedModifiers, note } = this.state;

        onBuyResource({
            category: "relationship",
            type: selectedType,
            modifiers: selectedModifiers,
            price: this.getTotalCost(),
            note
        });
        this.setState({
            selectedType: {},
            selectedModifiers: [],
            note: ""
        });
    }

    handleKeyUp({ key }, handler) {
        switch (key) {
            case 'Enter':
                handler();
                break;
            default:
        }
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const { selectedType, selectedModifiers, note } = this.state;

        return (
            <div className="RelationshipEditor">
                <div className="Description">{relationship.description}</div>
                <div className="Editor">
                    <div className="Type halfs">
                        <Header>Type</Header>
                        <Form>
                            {relationship.types.map(type => (
                                <Form.Field key={type.name}>
                                    <Radio
                                        label={`${type.name} - ${type.price} rps`}
                                        name='RelationshipsTypeGroup'
                                        value={type}
                                        checked={selectedType.name === type.name}
                                        onChange={(_, { value }) => this.setState({ selectedType: value })}
                                    />
                                    <br />
                                    <p>{type.description}</p>
                                </Form.Field>
                            ))}
                        </Form>
                    </div>
                    <div className="Modifiers halfs">
                        <Header>Modifiers</Header>
                        <Form>
                            {relationship.modifiers.map(modifier => (
                                <Form.Field key={modifier.name}>
                                    <Checkbox
                                        label={`${modifier.name} — ${modifier.modifier} rps`}
                                        name='RelationshipsTypeGroup'
                                        value={modifier}
                                        checked={selectedModifiers.includes(modifier)}
                                        onChange={this.handleModifierChange}
                                    />
                                    <br />
                                    <p>{modifier.description}</p>
                                </Form.Field>
                            ))}
                        </Form>
                    </div>
                </div>
                {selectedType.name && <div className="Confirm">
                    <Header>Total Cost: {this.getTotalCost()} rps</Header>
                    <Input
                        value={note}
                        placeholder="Notes..."
                        onKeyUp={e => this.handleKeyUp(e, this.handleConfirm)}
                        onChange={(_, { value }) => this.setState({ note: value })}
                    />
                    <Button
                        content="buy"
                        disabled={resourcePointsLeft < this.getTotalCost()}
                        onClick={this.handleConfirm}
                        positive
                    />
                </div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resourcePointsLeft: getResourcePointsLeft(state)
});


const mapDispatchToProps = dispatch => ({
    onBuyResource: resource => dispatch(buyResource(resource))
});

export default connect(mapStateToProps, mapDispatchToProps)(RelationshipEditor);