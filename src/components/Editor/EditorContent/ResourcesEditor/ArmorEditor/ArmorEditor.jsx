import React from "react";
import { connect } from 'react-redux';
import {
    Checkbox,
} from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import { armor } from '#Resources/Resources/mannish_resources.js';
import FullSuitEditor from './FullSuitEditor/FullSuitEditor.jsx';
import PartsEditor from './PartsEditor/PartsEditor.jsx';
import './ArmorEditor.scss';

class ArmorEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullSuit: false
        }
    }

    render() {
        const { fullSuit } = this.state;

        return (
            <div className="ArmorEditor">
                <div className="Description">{armor.description}</div>
                <Checkbox
                    label="Full Suit"
                    checked={fullSuit}
                    onChange={(e, { checked }) => this.setState({ fullSuit: checked })}
                    toggle
                />
                {fullSuit
                    ? <FullSuitEditor />
                    : <PartsEditor />
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(ArmorEditor);
