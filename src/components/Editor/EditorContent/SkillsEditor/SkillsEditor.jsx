import React from "react";
import { Header } from 'semantic-ui-react';
import { getDataSetForSection } from '#Utilities/data-selectors.js';
import CardList from '#Components/Common/CardList/CardList.jsx';
import './SkillsEditor.scss';

const SkillsEditor = () => {
    return (
        <div className="SkillsEditor">
            <Header className="section" as="h1">Select your character's skills</Header>
            <CardList
                header="Select a skill"
                type="skill"
                choices={getDataSetForSection('skills')}
                items={[]}
                maxCount={1}
                onSelect={() => { }}
                onRemove={() => { }}
            />
        </div>
    );
};

export default SkillsEditor;