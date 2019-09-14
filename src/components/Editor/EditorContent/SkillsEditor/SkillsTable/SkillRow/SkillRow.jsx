import React from "react";
import { connect } from 'react-redux';
import { Table, Label, Button } from "semantic-ui-react";
import { getSkillPointsLeft } from '#Utilities/redux-selectors.js';
import { advanceSkill, removeGeneralSkill, updateSectionsLockState } from '#Actions/editor.js';
import PointCounter from '#Components/Common/PointCounter/PointCounter.jsx';
import './SkillRow.scss';

const SkillRow = ({
    skill,
    required,
    general,
    advancedSkills,
    skillPointsLeft,
    onAdvanceSkill,
    onRemoveGeneralSkill,
    onUpdateSectionsLockState
}) => {
    const skillAdvances = advancedSkills
        .find(advancedSkill => advancedSkill.name === skill.name)
        || { lifepath: 0, general: 0 };

    const handleAdvanceSkill = (name, value, isGeneral) => {
        onAdvanceSkill(name, value, isGeneral)
        onUpdateSectionsLockState();
    };

    const handleRemoveGeneralSkill = name => {
        onRemoveGeneralSkill(name)
        onUpdateSectionsLockState();
    };

    // TODO: counter max should be determined by the final exponent which cannot be higher than 6
    return (
        <Table.Row
            key={`${skill.name}`}
            className="SkillRow"
        >
            <Table.Cell>
                {required
                    ? <Label ribbon>{skill.name}</Label>
                    : skill.name
                }
            </Table.Cell>
            <Table.Cell textAlign="center">{'Root'}</Table.Cell>
            <Table.Cell textAlign="center" disabled={general}>
                {general
                    ? (' — ')
                    : <PointCounter
                        value={required
                            ? skillAdvances.lifepath + 1
                            : skillAdvances.lifepath
                        }
                        min={required ? 1 : 0}
                        max={6}
                        canIncrease={skillPointsLeft.lifepath > 0}
                        onIncrease={() => handleAdvanceSkill(skill.name, skillAdvances.lifepath + 1, false)}
                        onDecrease={() => handleAdvanceSkill(skill.name, skillAdvances.lifepath - 1, false)}
                    />
                }
            </Table.Cell>
            <Table.Cell textAlign="center">
                <PointCounter
                    value={skillAdvances.general}
                    min={0}
                    max={6}
                    canIncrease={skillPointsLeft.general > 0}
                    onIncrease={() => handleAdvanceSkill(skill.name, skillAdvances.general + 1, true)}
                    onDecrease={() => handleAdvanceSkill(skill.name, skillAdvances.general - 1, true)}
                />
            </Table.Cell>
            <Table.Cell textAlign="center">0</Table.Cell>
            <Table.Cell textAlign="center">
                {/** TODO: implement card modal */}
                <Button
                    icon="info circle"
                    size="mini"
                    onClick={() => { }}
                />
                <Button
                    className={general ? "" : "hidden"}
                    icon="delete"
                    size="mini"
                    onClick={() => handleRemoveGeneralSkill(skill.name)}
                />
            </Table.Cell>
        </Table.Row>
    );
};


const mapStateToProps = state => ({
    skillPointsLeft: getSkillPointsLeft(state),
    advancedSkills: state.editor.skills.advancedSkills
});


const mapDispatchToProps = dispatch => ({
    onAdvanceSkill: (skill, advances, isGeneral) => dispatch(advanceSkill(skill, advances, isGeneral)),
    onRemoveGeneralSkill: skill => dispatch(removeGeneralSkill(skill)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillRow);