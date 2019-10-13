import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Form,
    Radio,
    Button,
    List,
    Icon,
    Dropdown,
    Input
} from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import { missiles } from '#Resources/Resources/mannish_resources.js';
import './MissilesEditor.scss';

class MissilesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: {},
            selectedQuality: {},
            note: "",
            addons: [],
            selectedAddon: ""
        };
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleAddAddon = this.handleAddAddon.bind(this);
        this.handleRemoveAddon = this.handleRemoveAddon.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.getAddonOptions = this.getAddonOptions.bind(this);
    }

    getTotalCost() {
        const { selectedType, selectedQuality, addons } = this.state;
        return Math.ceil((selectedType.price * selectedQuality.modifier) + addons.length);
    }

    handleConfirm() {
        const { onBuyResource } = this.props;
        const { selectedType, selectedQuality, note, addons } = this.state;

        onBuyResource({
            category: "missile",
            type: selectedType,
            quality: selectedQuality,
            addons,
            price: this.getTotalCost(),
            note
        });
        this.setState({
            selectedType: {},
            selectedQuality: {},
            note: "",
            addons: [],
            selectedAddon: ""
        });
    }

    handleAddAddon() {
        const { addons, selectedAddon } = this.state;

        if (selectedAddon !== "") {
            this.setState({
                addons: [...addons, selectedAddon],
                selectedAddon: ""
            });
        }
    }

    handleRemoveAddon(item) {
        const { addons } = this.state;

        this.setState({
            addons: addons.filter(addon => addon !== item)
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

    handleTypeChange(type) {
        const { selectedType } = this.state;

        if (selectedType.addon === type.addon) {
            this.setState({ selectedType: type });
        } else {
            this.setState({
                selectedType: type,
                addons: []
            });
        }
    }

    getAddonOptions() {
        const { addons, selectedType } = this.state;

        return missiles[selectedType.addon]
            .filter(addon => !addons.includes(addon))
            .map(addon => ({
                key: addon,
                text: addon,
                value: addon
            }));
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const {
            selectedType,
            selectedQuality,
            note,
            addons,
            selectedAddon
        } = this.state;

        return (
            <div className="MissilesEditor">
                <div className="Description">{missiles.description}</div>
                <div className="Editor">
                    <div className="Type thirds">
                        <Header>Type</Header>
                        <Form>
                            {missiles.types.map(type => (
                                <Form.Field key={type.name}>
                                    <Radio
                                        label={`${type.name} - ${type.price} rps`}
                                        name='MissilesTypeGroup'
                                        value={type}
                                        checked={selectedType.name === type.name}
                                        onChange={() => this.handleTypeChange(type)}
                                    />
                                    <br />
                                </Form.Field>
                            ))}
                        </Form>
                    </div>
                    <div className="Quality thirds">
                        <Header>Quality</Header>
                        <Form>
                            {missiles.qualities.map(quality => (
                                <Form.Field key={quality.name}>
                                    <Radio
                                        label={`${quality.name} - ${quality.modifier}x rps`}
                                        name='MissilesTypeGroup'
                                        value={quality}
                                        checked={selectedQuality.name === quality.name}
                                        onChange={() => this.setState({ selectedQuality: quality })}
                                    />
                                    <br />
                                    {quality.description && <i>{quality.description}</i>}
                                </Form.Field>
                            ))}
                        </Form>
                    </div>
                    {selectedQuality.name && selectedType.addon && <div className="Addons">
                        <Header>Special {`${selectedType.addon[0].toUpperCase()}${selectedType.addon.slice(1)}`} - 1 rps</Header>
                        <List bulleted verticalAlign="middle">
                            {addons.map(addon => (
                                <List.Item key={addon}>
                                    <List.Content floated="right">
                                        <Icon
                                            name="delete"
                                            color="red"
                                            onClick={() => this.handleRemoveAddon(addon)}
                                        />
                                    </List.Content>
                                    <List.Content>{addon}</List.Content>
                                </List.Item>
                            ))}
                        </List>
                        <Dropdown
                            placeholder="Select type..."
                            options={this.getAddonOptions()}
                            value={selectedAddon}
                            onChange={(_, { value }) => this.setState({ selectedAddon: value })}
                            selection
                        />
                        <Button
                            icon="add"
                            onClick={this.handleAddAddon}
                            positive
                        />
                    </div>}
                </div>
                {selectedType.name && selectedQuality.name && <div className="Confirm">
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

export default connect(mapStateToProps, mapDispatchToProps)(MissilesEditor);