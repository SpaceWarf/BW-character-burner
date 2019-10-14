import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Form,
    Radio,
    Checkbox,
    Input,
    Button,
    Divider,
    Card
} from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import { relationship, affiliations, reputations } from '#Resources/Resources/mannish_resources.js';
import ResourceCard from '../ResourceCard/ResourceCard.jsx';
import './RelationshipEditor.scss';

class RelationshipEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: {},
            selectedModifiers: [],
            note: "",
            active: ""
        }
        this.handleModifierChange = this.handleModifierChange.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
        this.handleRelationshipConfirm = this.handleRelationshipConfirm.bind(this);
        this.handleAffiliationConfirm = this.handleAffiliationConfirm.bind(this);
        this.handleReputationConfirm = this.handleReputationConfirm.bind(this);
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

    handleRelationshipConfirm() {
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

    handleAffiliationConfirm(item, note) {
        const { onBuyResource } = this.props;

        onBuyResource({
            category: "affiliation",
            name: item.name,
            price: item.price,
            note
        });
        this.setState({
            active: ""
        });
    }

    handleReputationConfirm(item, note) {
        const { onBuyResource } = this.props;

        onBuyResource({
            category: "reputation",
            name: item.name,
            price: item.price,
            note
        });
        this.setState({
            active: ""
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
        const {
            selectedType,
            selectedModifiers,
            note,
            active
        } = this.state;

        return (
            <div className="RelationshipEditor">
                <div className="Relationship Section">
                    <Header as="h2">Relationship</Header>
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
                            {selectedType.name && <div className="Confirm">
                                <Header>Total Cost: {this.getTotalCost()} rps</Header>
                                <Input
                                    value={note}
                                    placeholder="Notes..."
                                    onKeyUp={e => this.handleKeyUp(e, this.handleRelationshipConfirm)}
                                    onChange={(_, { value }) => this.setState({ note: value })}
                                />
                                <Button
                                    content="buy"
                                    disabled={resourcePointsLeft < this.getTotalCost()}
                                    onClick={this.handleRelationshipConfirm}
                                    positive
                                />
                            </div>}
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
                </div>
                <Divider />
                <div className="AffiliationReputation Section">
                    <div className="Affiliations halfs">
                        <Header as="h2">Affiliation</Header>
                        {affiliations.map(item => (
                            <ResourceCard
                                item={item}
                                active={item.name === active}
                                disabled={resourcePointsLeft < item.price}
                                onClick={() => this.setState({ active: active === item.name ? "" : item.name })}
                                onConfirm={note => this.handleAffiliationConfirm(item, note)}
                                onCancel={() => this.setState({ active: "" })}
                            />
                        ))}
                    </div>
                    <div className="Reputations halfs">
                        <Header as="h2">Reputation</Header>
                        {reputations.map(item => (
                            <ResourceCard
                                item={item}
                                active={active === item.name}
                                disabled={resourcePointsLeft < item.price}
                                onClick={() => this.setState({ active: active === item.name ? "" : item.name })}
                                onConfirm={note => this.handleReputationConfirm(item, note)}
                                onCancel={() => this.setState({ active: "" })}
                            />
                        ))}
                    </div>
                </div>
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