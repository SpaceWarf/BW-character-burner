import React from "react";
import { connect } from 'react-redux';
import { Header, Table, Label } from "semantic-ui-react";
import {
    getLifepathSkills,
    getSkillPoints,
    getSkillPointsLeft
} from '#Utilities/redux-selectors.js';
import { advanceSkill } from '#Actions/editor.js';
import PointCounter from '#Components/Common/PointCounter/PointCounter.jsx';
import './SkillsList.scss';

class SkillsList extends React.Component {
    getTableRow(skill, required = false) {
        const {
            advancedSkills,
            onAdvanceSkill,
            skillPointsLeft
        } = this.props;
        const skillAdvances = advancedSkills
            .find(advancedSkill => advancedSkill.name === skill.name)
            || { lifepath: 0, general: 0 };
        return (
            <Table.Row
                key={`${skill.name}`}
            >
                <Table.Cell>{required
                    ? <Label ribbon>{skill.name}</Label>
                    : skill.name
                }</Table.Cell>
                <Table.Cell textAlign="center">{'Root'}</Table.Cell>
                <Table.Cell textAlign="center">
                    <PointCounter
                        value={required
                            ? skillAdvances.lifepath + 1
                            : skillAdvances.lifepath
                        }
                        min={required ? 1 : 0}
                        max={6}
                        canIncrease={skillPointsLeft.lifepath > 0}
                        onIncrease={() => onAdvanceSkill(skill.name, skillAdvances.lifepath + 1, false)}
                        onDecrease={() => onAdvanceSkill(skill.name, skillAdvances.lifepath - 1, false)}
                    />
                </Table.Cell>
                <Table.Cell textAlign="center">
                    <PointCounter
                        value={skillAdvances.general}
                        min={0}
                        max={6}
                        canIncrease={skillPointsLeft.general > 0}
                        onIncrease={() => onAdvanceSkill(skill.name, skillAdvances.general + 1, true)}
                        onDecrease={() => onAdvanceSkill(skill.name, skillAdvances.general - 1, true)}
                    />
                </Table.Cell>
                <Table.Cell textAlign="center">0</Table.Cell>
            </Table.Row>
        );
    };

    render() {
        const {
            lifepathSkills,
            skillPoints,
            skillPointsLeft
        } = this.props;
        return (
            <div className="SkillsList">
                <div className="Points">
                    <Header as="h3">
                        Lifepath points spent: {skillPointsLeft.lifepath} / {skillPoints.lifepath}
                    </Header>
                    <Header as="h3">
                        General points spent: {skillPointsLeft.general} / {skillPoints.general}
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
    skillPointsLeft: getSkillPointsLeft(state),
    advancedSkills: state.editor.skills.advancedSkills
});


const mapDispatchToProps = dispatch => ({
    onAdvanceSkill: (skill, advances, isGeneral) => dispatch(advanceSkill(skill, advances, isGeneral))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsList);