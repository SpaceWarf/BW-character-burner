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

const typeOptions = armor.types.map(type => ({
    key: type.name,
    value: type,
    text: `${type.name} - ${type.price} rps`
}));

const qualityOptions = armor.qualities.map(quality => ({
    key: quality.name,
    value: quality,
    text: `${quality.name} - ${quality.modifier}x rps`
}));

class PartsEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: {
                head: { type: "", quality: "" },
                chest: { type: "", quality: "" },
                arms: { type: "", quality: "" },
                legs: { type: "", quality: "" }
            },
            note: ""
        };
        this.handleConfirm = this.handleConfirm.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
        this.handlePartQuality = this.handlePartQuality.bind(this);
        this.handlePartType = this.handlePartType.bind(this);
        this.getPartCost = this.getPartCost.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
        this.canBuy = this.canBuy.bind(this);
    }

    handlePartType(part, type) {
        const { parts } = this.state;
        const newParts = { ...parts };
        newParts[part].type = type;

        this.setState({ newParts });
    }

    handlePartQuality(part, quality) {
        const { parts } = this.state;
        const newParts = { ...parts };
        newParts[part].quality = quality;

        this.setState({ newParts });

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
        const { parts, note } = this.state;

        onBuyResource({
            category: "partsArmor",
            parts,
            price: this.getTotalCost(),
            note
        });
        this.setState({
            parts: {
                head: { type: "", quality: "" },
                chest: { type: "", quality: "" },
                arms: { type: "", quality: "" },
                legs: { type: "", quality: "" }
            },
            note: ""
        });
    }

    getPartCost(part) {
        const { parts } = this.state;

        if (parts[part].type && parts[part].quality) {
            return Math.ceil(parts[part].type.price * parts[part].quality.modifier);
        }
        return 0;
    }

    getTotalCost() {
        const { parts } = this.state;

        return Object.keys(parts).reduce((totalCost, part) => {
            return totalCost + this.getPartCost(part);
        }, 0);
    }

    canBuy() {
        const { parts } = this.state;

        return Object.values(parts).every(part => part.type && part.quality);
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const { parts, note } = this.state;

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
                            {Object.keys(parts).map(key => (
                                <Table.Row key={key}>
                                    <Table.Cell>{`${key[0].toUpperCase()}${key.slice(1)}`}</Table.Cell>
                                    <Table.Cell colSpan="2">
                                        <Dropdown
                                            placeholder="Select type..."
                                            options={typeOptions}
                                            value={parts[key].type}
                                            onChange={(_, { value }) => this.handlePartType(key, value)}
                                            selection
                                        />
                                    </Table.Cell>
                                    <Table.Cell colSpan="2">
                                        <Dropdown
                                            placeholder="Select quality..."
                                            options={qualityOptions}
                                            value={parts[key].quality}
                                            onChange={(_, { value }) => this.handlePartQuality(key, value)}
                                            selection
                                        />
                                    </Table.Cell>
                                    <Table.Cell>{this.getPartCost(key)} rps</Table.Cell>
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