import React from "react";
import { connect } from 'react-redux';
import { Header, Table } from "semantic-ui-react";
import {
    getLifepathSkills,
    getSkillPoints,
    getSkillPointsLeft
} from '#Utilities/redux-selectors.js';
import { getDataSetForSection } from '#Utilities/data-selectors.js';
import { advanceSkill, openGeneralSkill, updateSectionsLockState } from '#Actions/editor.js';
import AddModal from '#Components/Common/AddModal/AddModal.jsx';
import SkillRow from './SkillRow/SkillRow.jsx';
import './SkillsTable.scss';

const SkillsTable = ({
    lifepathSkills,
    skillPoints,
    skillPointsLeft,
    openedGeneralSkills,
    onOpenGeneralSkill,
    onAdvanceSkill,
    onUpdateSectionsLockState
}) => {

    const handleOpenGeneralSkill = name => {
        onOpenGeneralSkill(name);
        onAdvanceSkill(name, 1, true);
        onUpdateSectionsLockState();
    };

    const getAddModalChoices = () => {
        const dataSet = getDataSetForSection("skills");
        const allSkillsInTable = [
            ...lifepathSkills.required,
            ...lifepathSkills.optional,
            ...openedGeneralSkills
        ];
        return dataSet.filter(skill => !allSkillsInTable.includes(skill.name));
    };

    return (
        <div className="SkillsTable">
            <div className="Points">
                <Header as="h3">
                    Lifepath points left: {skillPointsLeft.lifepath} / {skillPoints.lifepath}
                </Header>
                <Header as="h3">
                    General points left: {skillPointsLeft.general} / {skillPoints.general}
                </Header>
            </div>
            <Table striped celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={3}>Skill</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">Root</Table.HeaderCell>
                        <Table.HeaderCell width={2} textAlign="center">Advances<br />(Lifepath Points)</Table.HeaderCell>
                        <Table.HeaderCell width={2} textAlign="center">Advances<br />(General Points)</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">Final Exponent</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {lifepathSkills.required.map(skill => (
                        <SkillRow key={skill} skill={{ name: skill }} required />
                    ))}
                    {lifepathSkills.optional.map(skill => (
                        <SkillRow key={skill} skill={{ name: skill }} />
                    ))}
                    {openedGeneralSkills.map(skill => (
                        <SkillRow key={skill} skill={{ name: skill }} general />
                    ))}
                </Table.Body>
            </Table>
            {skillPointsLeft.general > 0 &&
                <div className="AddRow">
                    <AddModal
                        header={"Select general skills"}
                        type={"skill"}
                        choices={getAddModalChoices()}
                        onSelect={({ name }) => handleOpenGeneralSkill(name)}
                    />
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    lifepathSkills: getLifepathSkills(state),
    skillPoints: getSkillPoints(state),
    skillPointsLeft: getSkillPointsLeft(state),
    openedGeneralSkills: state.editor.skills.openedGeneralSkills
});


const mapDispatchToProps = dispatch => ({
    onAdvanceSkill: (skill, advances, isGeneral) => dispatch(advanceSkill(skill, advances, isGeneral)),
    onOpenGeneralSkill: skill => dispatch(openGeneralSkill(skill)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsTable);