import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Form,
    Radio,
    Input,
    Button
} from 'semantic-ui-react';
import { buyResource, updateSectionsLockState } from 'Actions/editor.js';
import { getResourcePointsLeft } from 'Utilities/redux-selectors.js';
import { armor } from 'Resources/resources/mannish_resources.js';
import './FullSuitEditor.scss';

class FullSuitEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: "",
            selectedQuality: "",
            note: ""
        }
        this.handleConfirm = this.handleConfirm.bind(this);
        this.getTotalCost = this.getTotalCost.bind(this);
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
        const { onBuyResource, onUpdateSectionsLockState  } = this.props;
        const { selectedType, selectedQuality, note } = this.state;

        onBuyResource({
            category: "fullArmor",
            type: selectedType,
            quality: selectedQuality,
            price: this.getTotalCost(),
            note
        });
        onUpdateSectionsLockState();
        this.setState({
            selectedType: "",
            selectedQuality: "",
            note: ""
        });
    }

    getTotalCost() {
        const { selectedType, selectedQuality } = this.state;

        return Math.ceil(selectedType.price * selectedQuality.modifier);
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const { selectedType, selectedQuality, note } = this.state;

        return (
            <div className="FullSuitEditor">
                <div className="Editor">
                    <div className="Type thirds">
                        <Header>Type</Header>
                        <Form>
                            {armor.types.map(type => (
                                <Form.Field key={type.name}>
                                    <Radio
                                        label={`${type.name} - ${type.price} rps`}
                                        name='ArmorTypeGroup'
                                        value={type}
                                        checked={selectedType.name === type.name}
                                        onChange={() => this.setState({ selectedType: type })}
                                    />
                                    <br />
                                </Form.Field>
                            ))}
                        </Form>
                    </div>
                    <div className="Quality halfs">
                        <Header>Quality</Header>
                        <Form>
                            {armor.qualities.map(quality => (
                                <Form.Field key={quality.name}>
                                    <Radio
                                        label={`${quality.name} - ${quality.modifier}x rps`}
                                        name='ArmorTypeGroup'
                                        value={quality}
                                        checked={selectedQuality.name === quality.name}
                                        onChange={() => this.setState({ selectedQuality: quality })}
                                    />
                                    <br />
                                    {quality.description && <p>{quality.description}</p>}
                                </Form.Field>
                            ))}
                        </Form>
                    </div>
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
    onBuyResource: resource => dispatch(buyResource(resource)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(FullSuitEditor);