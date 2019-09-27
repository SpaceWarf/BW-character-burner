import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import Attribute from './Attribute/Attribute.jsx';
import {
    getHealthScore,
    getSteelScore,
    getReflexScore,
    getMortalWoundScore
} from '#Utilities/redux-selectors.js';
import HealthModal from './HealthModal/HealthModal.jsx';
import SteelModal from './SteelModal/SteelModal.jsx';
import './AttributesEditor.scss';

const AttributesEditor = ({ healthScore, steelScore, reflexScore, mortalWoundScore }) => {
    return (
        <div className="AttributesEditor">
            <Header className="section" as="h1">Attributes editor</Header>
            <div className="content">
                <Attribute
                    name="Health"
                    value={healthScore}
                    description={"Health is the average of Will and Forte plus or minus the answers to the health questions."}
                    QuestionModal={HealthModal}
                />
                <Attribute
                    name="Steel"
                    value={steelScore}
                    description={"Steel starts at 3 and the final result is determined by the answers to the Steel questions."}
                    QuestionModal={SteelModal}
                />
                <Attribute
                    name="Reflexes"
                    value={reflexScore}
                    description={"Reflexes is the average of Perception, Agility and Speed (rounded down)."}
                />
                <Attribute
                    name="Mortal Wound"
                    value={mortalWoundScore}
                    description={"Mortal Wound is the average of Power and Forte (rounded down) plus a base of 6."}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    healthScore: getHealthScore(state),
    steelScore: getSteelScore(state),
    reflexScore: getReflexScore(state),
    mortalWoundScore: getMortalWoundScore(state)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AttributesEditor);
