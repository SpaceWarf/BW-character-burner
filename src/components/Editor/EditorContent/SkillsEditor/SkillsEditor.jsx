import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { getDataSetForSection } from '#Utilities/data-selectors.js';
import SkillsList from './SkillsList/SkillsList.jsx';
import './SkillsEditor.scss';

const SkillsEditor = () => {
    return (
        <div className="SkillsEditor">
            <Header className="section" as="h1">Select your character's skills</Header>
            <SkillsList />
        </div>
    );
};

const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsEditor);