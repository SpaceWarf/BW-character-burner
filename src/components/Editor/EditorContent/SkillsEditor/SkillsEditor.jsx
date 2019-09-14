import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import SkillsTable from './SkillsTable/SkillsTable.jsx';
import './SkillsEditor.scss';

const SkillsEditor = () => {
    return (
        <div className="SkillsEditor">
            <Header className="section" as="h1">Select your character's skills</Header>
            <SkillsTable />
        </div>
    );
};

const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsEditor);