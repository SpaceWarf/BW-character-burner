import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import Attribute from './Attribute/Attribute.jsx';
import { attributeDescriptions } from '#Utilities/config/editor.config.js';
import {
    getHealthScore,
    getSteelScore,
    getReflexScore,
    getMortalWoundScore
} from '#Utilities/redux-selectors.js';
import HealthModal from './HealthModal/HealthModal.jsx';
import './AttributesEditor.scss';

const AttributesEditor = ({ healthScore, steelScore, reflexScore, mortalWoundScore }) => {
    return (
        <div className="AttributesEditor">
            <Header className="section" as="h1">Attributes editor</Header>
            <div className="content">
                <Attribute
                    name="Health"
                    value={healthScore}
                    description={attributeDescriptions.health}
                    QuestionModal={HealthModal}
                />
                <Attribute
                    name="Steel"
                    value={steelScore}
                    description={attributeDescriptions.steel}
                />
                <Attribute
                    name="Reflexes"
                    value={reflexScore}
                    description={attributeDescriptions.reflexes}
                />
                <Attribute
                    name="Mortal Wound"
                    value={mortalWoundScore}
                    description={attributeDescriptions.mortalWound}
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
