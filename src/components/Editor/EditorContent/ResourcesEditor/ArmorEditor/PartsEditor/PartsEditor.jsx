import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Input,
    Button
} from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import { armor } from '#Resources/Resources/mannish_resources.js';
import './PartsEditor.scss';

class PartsEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ""
        };
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
        const { onBuyResource } = this.props;
        const { } = this.state;

        onBuyResource({});
        this.setState({
            note: ""
        });
    }

    getTotalCost() {
        const { } = this.state;

        return 0;
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const { note } = this.state;

        return (
            <div className="PartsEditor">
                <div className="Editor">

                </div>
                {<div className="Confirm">
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

export default connect(mapStateToProps, mapDispatchToProps)(PartsEditor);