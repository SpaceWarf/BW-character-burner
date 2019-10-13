import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Input,
    Button,
    Table,
    Dropdown
} from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import { armor } from '#Resources/Resources/mannish_resources.js';
import './PartsEditor.scss';

class PartsEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedParts: {},
            note: ""
        };
        this.handleConfirm = this.handleConfirm.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
        this.handleSelectPartQuality = this.handleSelectPartQuality.bind(this);
        this.handleSelectPartType = this.handleSelectPartType.bind(this);
        this.getPartCost = this.getPartCost.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
        this.canBuy = this.canBuy.bind(this);
    }

    handleSelectPartType(part, type) {
        const { selectedParts } = this.state;
        const newParts = { ...selectedParts };

        if (newParts[part]) {
            newParts[part].type = type;
        } else {
            newParts[part] = { type };
        }

        this.setState({ selectedParts: newParts });
    }

    handleSelectPartQuality(part, quality) {
        const { selectedParts } = this.state;
        const newParts = { ...selectedParts };

        if (newParts[part]) {
            newParts[part].quality = quality;
        } else {
            newParts[part] = { quality };
        }

        this.setState({ selectedParts: newParts });

    }

    handleKeyUp({ key }, handler) {
        switch (key) {
            case 'Enter':
                handler();
                break;
            default:
        }
    }

    handleConfirm() {
        const { onBuyResource } = this.props;
        const { selectedParts, note } = this.state;

        onBuyResource({
            category: "partsArmor",
            selectedParts,
            price: this.getTotalCost(),
            note
        });
        this.setState({
            selectedParts: {},
            note: ""
        });
    }

    getTypeOptions(part) {
        return armor.types.map(type => {
            const price = Math.ceil(type.price * part.modifier);

            return {
                key: type.name,
                value: type,
                text: `${type.name} - ${price} rps`
            }
        });
    }

    getQualityOptions() {
        return armor.qualities.map(quality => ({
            key: quality.name,
            value: quality,
            text: `${quality.name} - ${quality.modifier}x rps`
        }));
    }

    getPartCost(part) {
        const { selectedParts } = this.state;

        if (
            selectedParts[part.name]
            && selectedParts[part.name].type
            && selectedParts[part.name].quality
        ) {
            const typePrice = selectedParts[part.name].type.price * part.modifier;
            return Math.ceil(typePrice * selectedParts[part.name].quality.modifier);
        }
        return 0;
    }

    getTotalCost() {
        return armor.parts.reduce((totalCost, part) => {
            return totalCost + this.getPartCost(part);
        }, 0);
    }

    canBuy() {
        const { selectedParts } = this.state;

        return Object.values(armor.parts).every(({ name }) => selectedParts[name]
            && selectedParts[name].type
            && selectedParts[name].quality
        );
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const { selectedParts, note } = this.state;

        return (
            <div className="PartsEditor">
                <div className="Editor">
                    <Table columns="6">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Part</Table.HeaderCell>
                                <Table.HeaderCell colSpan="2">Type</Table.HeaderCell>
                                <Table.HeaderCell colSpan="2">Quality</Table.HeaderCell>
                                <Table.HeaderCell>Price</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {armor.parts.map(part => (
                                <Table.Row key={part.name}>
                                    <Table.Cell>{`${part.name[0].toUpperCase()}${part.name.slice(1)}`}</Table.Cell>
                                    <Table.Cell colSpan="2">
                                        <Dropdown
                                            placeholder="Select type..."
                                            options={this.getTypeOptions(part)}
                                            value={(selectedParts[part.name] || {}).type || ""}
                                            onChange={(_, { value }) => this.handleSelectPartType(part.name, value)}
                                            selection
                                        />
                                    </Table.Cell>
                                    <Table.Cell colSpan="2">
                                        <Dropdown
                                            placeholder="Select quality..."
                                            options={this.getQualityOptions()}
                                            value={(selectedParts[part.name] || {}).quality || ""}
                                            onChange={(_, { value }) => this.handleSelectPartQuality(part.name, value)}
                                            selection
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{this.getPartCost(part)} rps</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan="4">
                                    {this.canBuy() && <React.Fragment>
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
                                    </React.Fragment>}
                                </Table.HeaderCell>
                                <Table.HeaderCell colSpan="2">
                                    <Header floated="right">{this.getTotalCost()} rps</Header>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(PartsEditor);