import React from "react";
import { connect } from 'react-redux';
import { Table, Label, Button } from "semantic-ui-react";
import { getSkillPointsLeft } from '#Utilities/redux-selectors.js';
import { advanceSkill, removeGeneralSkill, updateSectionsLockState } from '#Actions/editor.js';
import PointCounter from '#Components/Common/PointCounter/PointCounter.jsx';
import CardModal from '#Components/Common/CardModal/CardModal.jsx';
import './SkillRow.scss';

const SkillRow = ({
    skill,
    required,
    general,
    advancedSkills,
    skillPointsLeft,
    selectedStats,
    onAdvanceSkill,
    onRemoveGeneralSkill,
    onUpdateSectionsLockState
}) => {
    const skillAdvances = advancedSkills
        .find(advancedSkill => advancedSkill.name === skill.name) || { lifepath: 0, general: 0 };

    const handleAdvanceSkill = (name, value, isGeneral) => {
        onAdvanceSkill(name, value, isGeneral)
        onUpdateSectionsLockState();
    };

    const handleRemoveGeneralSkill = name => {
        onRemoveGeneralSkill(name)
        onUpdateSectionsLockState();
    };

    const calculateExponent = () => {
        if (skill.roots && (required || skillAdvances.lifepath > 0 || skillAdvances.general > 0)) {
            const rootAverage = skill.roots
                .map(root => selectedStats[root.toLowerCase()])
                .reduce((total, value) => total + value, 0) / skill.roots.length;
            return required
                ? Math.floor(rootAverage / 2) + skillAdvances.lifepath + skillAdvances.general
                : (Math.floor(rootAverage / 2) + skillAdvances.lifepath + skillAdvances.general) - 1;
        }
        return 0;
    };

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
            <Table.Cell textAlign="center" disabled={!skill.roots}>
                {(skill.roots || ['—']).join(', ')}
            </Table.Cell>
            <Table.Cell textAlign="center" disabled={general}>
                {general
                    ? ('—')
                    : <PointCounter
                        value={required
                            ? skillAdvances.lifepath + 1
                            : skillAdvances.lifepath
                        }
                        min={required ? 1 : 0}
                        max={6}
                        canIncrease={skillPointsLeft.lifepath > 0 && calculateExponent() < 6}
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
                    canIncrease={skillPointsLeft.general > 0 && calculateExponent() < 6}
                    onIncrease={() => handleAdvanceSkill(skill.name, skillAdvances.general + 1, true)}
                    onDecrease={() => handleAdvanceSkill(skill.name, skillAdvances.general - 1, true)}
                />
            </Table.Cell>
            <Table.Cell textAlign="center">{calculateExponent()}</Table.Cell>
            <Table.Cell textAlign="center">
                <CardModal data={skill} type="skill" />
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
    advancedSkills: state.editor.skills.advancedSkills,
    selectedStats: state.editor.stats.selectedStats
});


const mapDispatchToProps = dispatch => ({
    onAdvanceSkill: (skill, advances, isGeneral) => dispatch(advanceSkill(skill, advances, isGeneral)),
    onRemoveGeneralSkill: skill => dispatch(removeGeneralSkill(skill)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillRow);