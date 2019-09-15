import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { getLifepathTraits, getTraitPoints } from '#Utilities/redux-selectors.js';
import './TraitsEditor.scss';

const TraitsEditor = ({ lifepathTraits, traitPoints }) => {
    return (
        <div className="TraitsEditor">
            <Header className="section" as="h1">Select your character's traits</Header>
            {/* <Header as="h3">
                Trait points left: 0 / {traitPoints}
            </Header>
            {lifepathTraits.required}
            <br />
            {lifepathTraits.optional} */}
        </div>
    );
};

const mapStateToProps = state => ({
    lifepathTraits: getLifepathTraits(state),
    traitPoints: getTraitPoints(state)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TraitsEditor);