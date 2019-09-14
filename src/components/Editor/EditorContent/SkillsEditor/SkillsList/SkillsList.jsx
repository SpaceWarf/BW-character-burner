import React from "react";
import { connect } from 'react-redux';
import { Header, Table } from "semantic-ui-react";
import { getLifepathSkills, getSkillPoints } from '#Utilities/redux-selectors.js';
import { advanceSkill } from '#Actions/editor.js';
import PointCounter from '#Components/Common/PointCounter/PointCounter.jsx';
import './SkillsList.scss';

class SkillsList extends React.Component {
    getTableRow(skill, required = false) {
        const { advancedSkills, onAdvanceSkill } = this.props;
        const skillAdvances = advancedSkills
            .find(advancedSkill => advancedSkill.name === skill.name)
            || { advances: 0, generalAdvances: 0 };
        return (
            <Table.Row
                key={`${skill.name}`}
                active={required}
            >
                <Table.Cell>{skill.name}</Table.Cell>
                <Table.Cell textAlign="center">{'Root'}</Table.Cell>
                <Table.Cell textAlign="center">
                    <PointCounter
                        value={required
                            ? skillAdvances.advances + 1
                            : skillAdvances.advances
                        }
                        min={required ? 1 : 0}
                        max={6}
                        canIncrease={true}
                        onIncrease={() => onAdvanceSkill(skill.name, skillAdvances.advances + 1, false)}
                        onDecrease={() => onAdvanceSkill(skill.name, skillAdvances.advances - 1, false)}
                    />
                </Table.Cell>
                <Table.Cell textAlign="center">
                    <PointCounter
                        value={skillAdvances.generalAdvances}
                        min={0}
                        max={6}
                        canIncrease={true}
                        onIncrease={() => onAdvanceSkill(skill.name, skillAdvances.generalAdvances + 1, true)}
                        onDecrease={() => onAdvanceSkill(skill.name, skillAdvances.generalAdvances - 1, true)}
                    />
                </Table.Cell>
                <Table.Cell textAlign="center">0</Table.Cell>
            </Table.Row>
        );
    };

    render() {
        const { lifepathSkills, skillPoints } = this.props;
        return (
            <div className="SkillsList">
                <div className="Points">
                    <Header as="h3">Lifepath points spent: 0 / {skillPoints.lifepath}</Header>
                    <Header as="h3">General points spent: 0 / {skillPoints.general}</Header>
                </div>
                <Table striped celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={3}>Skill</Table.HeaderCell>
                            <Table.HeaderCell width={1} textAlign="center">Root</Table.HeaderCell>
                            <Table.HeaderCell width={2} textAlign="center">Advances<br />(Lifepath Points)</Table.HeaderCell>
                            <Table.HeaderCell width={2} textAlign="center">Advances<br />(General Points)</Table.HeaderCell>
                            <Table.HeaderCell width={1} textAlign="center">Final Exponent</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {lifepathSkills.required.map(skill => (
                            this.getTableRow({ name: skill }, true)
                        ))}
                        {lifepathSkills.nonRequired.map(skill => (
                            this.getTableRow({ name: skill }, false)
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lifepathSkills: getLifepathSkills(state),
    skillPoints: getSkillPoints(state),
    advancedSkills: state.editor.skills.advancedSkills
});


const mapDispatchToProps = dispatch => ({
    onAdvanceSkill: (skill, advances, isGeneral) => dispatch(advanceSkill(skill, advances, isGeneral))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsList);