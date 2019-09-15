import React from "react";
import { Header } from 'semantic-ui-react';
import SkillsTable from './SkillsTable/SkillsTable.jsx';
import './SkillsEditor.scss';

const SkillsEditor = () => {
    return (
        <div className="SkillsEditor">
            <Header className="section" as="h1">Select your character's skills</Header>
            <div className="content">
                <p>
                    <b>Skills</b> represent what your character can do in his everyday life. Is your character a cook and owner
                    of a fancy tavern? Consider advancing skills like Cooking, Brewing and Hosteller. Or is your character a
                    preppy noble knight who yearns for adventure? Then consider advancing skills like Shield Training, Armor Training
                    and Mace.
                <br />
                    <br />
                    <b>Required skills</b> (marked with a label) are
                    the first skills in the 'from' section of the selected lifepaths. These skills must be opened.
                    If a required skill is already opened from another lifepath, the next skill in the list is required
                    (and so on).
                <br />
                    <br />
                    To <b>open a skill</b>, assign one point to it. This will set the skill exponent to half of the average
                    (rounded down) of the roots of the skill. Every subsequent point added to that skill adds one to the exponent.
                <br />
                    <br />
                    <b>Lifepath points</b> are used to open and advance only the skills obtained from the selected lifepaths.
                <br />
                    <br />
                    <b>General points</b> can be used to either open and advance lifepath skills or any other skill not subject to restrictions.
            </p>
                <SkillsTable />
            </div>
        </div>
    );
};

export default SkillsEditor;