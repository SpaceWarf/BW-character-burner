import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Form,
    Radio,
    Input,
    Button,
    List,
    Icon
} from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import { arms } from '#Resources/Resources/mannish_resources.js';
import './ArmsEditor.scss';

class ArmsEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedQuality: {},
            note: "",
            modifications: [],
            modifNote: ""
        };
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleAddModification = this.handleAddModification.bind(this);
        this.handleRemoveModification = this.handleRemoveModification.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    getTotalCost() {
        const { selectedQuality, modifications } = this.state;
        return selectedQuality.price + (modifications.length * selectedQuality.modificationCost);
    }

    handleConfirm() {
        const { onBuyResource } = this.props;
        const { selectedQuality, note, modifications } = this.state;

        onBuyResource({
            category: "arm",
            quality: selectedQuality,
            modifications,
            price: this.getTotalCost(),
            note
        });
        this.setState({
            selectedQuality: {},
            note: "",
            modifications: [],
            modifNote: ""
        });
    }

    handleAddModification() {
        const { modifNote, modifications } = this.state;

        if (modifNote.trim() !== "" && !modifications.includes(modifNote)) {
            this.setState({
                modifications: [...modifications, modifNote],
                modifNote: ""
            });
        }
    }

    handleRemoveModification(item) {
        const { modifications } = this.state;

        this.setState({
            modifications: modifications.filter(modif => modif !== item)
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
        const { selectedQuality, note, modifNote, modifications } = this.state;

        return (
            <div className="ArmsEditor">
                <div className="Description">{arms.description}</div>
                <div className="Editor">
                    <div className="Quality thirds">
                        <Header>Quality</Header>
                        <Form>
                            {arms.qualities.map(quality => (
                                <Form.Field key={quality.name}>
                                    <Radio
                                        label={`${quality.name} - ${quality.price} rps`}
                                        name='ArmsTypeGroup'
                                        value={quality}
                                        checked={selectedQuality.name === quality.name}
                                        onChange={() => this.setState({ selectedQuality: quality })}
                                    />
                                    <br />
                                    <i>{quality.description}</i>
                                </Form.Field>
                            ))}
                        </Form>
                        {selectedQuality.name && <div className="Confirm">
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
                    {selectedQuality.name && <div className="Modifications thirds">
                        <Header>Modifications - {selectedQuality.modificationCost} rps</Header>
                        <List bulleted verticalAlign="middle">
                            {modifications.map(modif => (
                                <List.Item>
                                    <List.Content floated="right">
                                        <Icon
                                            name="delete"
                                            color="red"
                                            onClick={() => this.handleRemoveModification(modif)}
                                        />
                                    </List.Content>
                                    <List.Content>{modif}</List.Content>
                                </List.Item>
                            ))}
                        </List>
                        <Input
                            value={modifNote}
                            placeholder="Modification..."
                            label={
                                <Button
                                    icon="add"
                                    onClick={this.handleAddModification}
                                    positive
                                />
                            }
                            labelPosition="right"
                            onKeyUp={e => this.handleKeyUp(e, this.handleAddModification)}
                            onChange={(_, { value }) => this.setState({ modifNote: value })}
                        />
                    </div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArmsEditor);