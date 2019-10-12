import { create } from 'domain';

const { createSelector } = require('reselect');
const {
    getLifepathDataSet,
    getSkillData,
    getTraitData,
    getHealthScoreBonusFromAnswers,
    getSteelScoreBonusFromAnswers
} = require('./data-selectors.js');
const { statPools } = require('./config/editor.config.js');
const get = require('lodash/get');
const { uniq } = require('./utilities.js');

// State properties
const getSelectedRace = state => state.editor.selectedRace;
const getSelectedLifepaths = state => state.editor.lifepaths.selectedLifepaths;
const getSelectedStatBonuses = state => state.editor.stats.selectedStatBonuses;
const getSelectedStats = state => state.editor.stats.selectedStats;
const getAdvancedSkills = state => state.editor.skills.advancedSkills;
const getBoughtTraits = state => state.editor.traits.boughtTraits;
const getHealthAnswers = state => state.editor.attributes.healthAnswers;
const getSteelAnswers = state => state.editor.attributes.steelAnswers;

// Lifepaths
export const getBornLifepaths = createSelector(
    [getSelectedRace], selectedRace => {
        const lifepaths = getLifepathDataSet(selectedRace);
        return lifepaths.filter(lifepath => lifepath.isBornLifepath);
    }
);

export const getLifepaths = createSelector(
    [getSelectedRace], selectedRace => {
        return getLifepathDataSet(selectedRace);
    }
);

// Stats
export const getStatBonuses = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((bonuses, { lifepath }) => {
            if (lifepath.stat) {
                switch (lifepath.stat.attributes) {
                    case 'M':
                        bonuses.mental += lifepath.stat.bonus;
                        break;
                    case 'P':
                        bonuses.physical += lifepath.stat.bonus;
                        break;
                    case 'M,P':
                        bonuses.mental += lifepath.stat.bonus;
                        bonuses.physical += lifepath.stat.bonus;
                        break;
                    case 'M/P':
                        if (lifepath.stat.bonus > 0) {
                            bonuses.chooseBonus += lifepath.stat.bonus;
                        } else {
                            bonuses.chooseMalus += Math.abs(lifepath.stat.bonus);
                        }
                        break;
                    default:
                }
            }
            return bonuses;
        }, { mental: 0, physical: 0, chooseBonus: 0, chooseMalus: 0 })
    }
)

export const getUsedLeads = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((usedLeads, { lifepath }, index) => {
            const nextLifepath = selectedLifepaths.find(lifepath => lifepath.index === index + 1);
            if (nextLifepath && lifepath.setting !== nextLifepath.lifepath.setting) {
                return usedLeads + 1;
            }
            return usedLeads;
        }, 0);
    }
);

export const getAge = createSelector(
    [getSelectedLifepaths, getUsedLeads], (selectedLifepaths, usedLeads) => {
        const age = selectedLifepaths.reduce((age, { lifepath }) => {
            return age + lifepath.time;
        }, 0);
        return age + usedLeads;
    }
);

export const getAgePools = createSelector(
    [getAge], age => {
        return statPools
            .find(pool => pool.minAge <= age && pool.maxAge >= age)
            || { mental: 0, physical: 0 };
    }
)

export const getMentalPool = createSelector(
    [getAgePools, getStatBonuses], (agePool, bonuses) => {
        return agePool.mental + bonuses.mental;
    }
);

export const getPhysicalPool = createSelector(
    [getAgePools, getStatBonuses], (agePool, bonuses) => {
        return agePool.physical + bonuses.physical;
    }
);

export const getAppliedBonuses = createSelector(
    [getSelectedStatBonuses], (selectedStatBonuses) => {
        const selectedMentalBonuses = selectedStatBonuses.bonus.reduce((total, bonus) => {
            return bonus.bonus === 'M' ? total + 1 : total;
        }, 0);
        const selectedMentalMaluses = selectedStatBonuses.malus.reduce((total, bonus) => {
            return bonus.bonus === 'M' ? total + 1 : total;
        }, 0);
        const selectedPhysicalBonuses = selectedStatBonuses.bonus.reduce((total, bonus) => {
            return bonus.bonus === 'P' ? total + 1 : total;
        }, 0);
        const selectedPhysicalMaluses = selectedStatBonuses.malus.reduce((total, bonus) => {
            return bonus.bonus === 'P' ? total + 1 : total;
        }, 0);
        return {
            mental: selectedMentalBonuses - selectedMentalMaluses,
            physical: selectedPhysicalBonuses - selectedPhysicalMaluses
        };
    }
);

export const getMentalPointsLeftToAssign = createSelector(
    [getMentalPool, getAppliedBonuses, getSelectedStats], (mentalPool, appliedBonuses, selectedStats) => {
        const totalPool = mentalPool + appliedBonuses.mental;
        return totalPool - selectedStats.will - selectedStats.perception;
    }
);

export const getPhysicalPointsLeftToAssign = createSelector(
    [getPhysicalPool, getAppliedBonuses, getSelectedStats], (physicalPool, appliedBonuses, selectedStats) => {
        const totalPool = physicalPool + appliedBonuses.physical;
        return totalPool - selectedStats.power - selectedStats.forte
            - selectedStats.agility - selectedStats.speed;
    }
);

// Skills
export const getLifepathSkillsPool = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((lifepathSkills, { lifepath }) => {
            const skillName = get(lifepath, 'skills.from', []);
            return uniq([
                ...lifepathSkills,
                ...skillName
            ]);
        }, [])
            // TODO: remove { name } validator once all skills have been transcribed
            .map(name => getSkillData(name) || { name });
    }
);

export const getRequiredSkills = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((requiredSkills, { lifepath }) => {
            const skillChoices = get(lifepath, 'skills.from', []);
            const requiredSkill = skillChoices.find(skill => !requiredSkills.includes(skill));
            return requiredSkill
                ? [...requiredSkills, requiredSkill]
                : requiredSkills;
        }, [])
            // TODO: remove { name } validator once all skills have been transcribed
            .map(name => getSkillData(name) || { name });
    }
);

export const getOptionalSkills = createSelector(
    [getLifepathSkillsPool, getRequiredSkills], (lifepathSkills, requiredSkills) => {
        return lifepathSkills.filter(lifepathSkill => !requiredSkills
            .find(requiredSkill => requiredSkill.name === lifepathSkill.name)
        );
    }
);

export const getLifepathSkills = createSelector(
    [getRequiredSkills, getOptionalSkills], (requiredSkills, optionalSkills) => {
        return {
            required: requiredSkills,
            optional: optionalSkills
        };
    }
);

export const getSkillPoints = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((skillPoints, { lifepath }) => {
            if (lifepath.skills.points) {
                skillPoints.lifepath += lifepath.skills.points
            }
            if (lifepath.skills.generalPoints) {
                skillPoints.general += lifepath.skills.generalPoints
            }
            return skillPoints;
        }, { lifepath: 0, general: 0 });
    }
);

export const getSkillPointsLeft = createSelector(
    [
        getSkillPoints,
        getRequiredSkills,
        getAdvancedSkills
    ], (skillPoints, requiredSkills, advancedSkills) => {
        const spentPoints = advancedSkills.reduce((total, advances) => {
            return {
                lifepath: total.lifepath + advances.lifepath,
                general: total.general + advances.general
            };
        }, { lifepath: 0, general: 0 })
        return {
            lifepath: skillPoints.lifepath - requiredSkills.length - spentPoints.lifepath,
            general: skillPoints.general - spentPoints.general
        };
    }
);

export const getAllSkills = createSelector(
    [getRequiredSkills, getAdvancedSkills], (requiredSkills, advancedSkills) => {
        const nonZeroAdvancedSkills = advancedSkills
            .reduce((skills, nextSkill) => {
                if (nextSkill.general > 0 || nextSkill.lifepath > 0) {
                    return [...skills, nextSkill];
                }
                return skills;
            }, [])
            .filter(skill => !requiredSkills
                .find(requiredSkill => requiredSkill.name === skill.name)
            );
        return [
            ...requiredSkills,
            ...nonZeroAdvancedSkills
        ];
    }
);

// Traits
export const getLifepathTraitsPool = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((lifepathTraits, { lifepath }) => {
            return uniq([
                ...lifepathTraits,
                ...get(lifepath, 'traits.from', [])
            ]);
        }, [])
            // TODO: remove { name } validator once all traits have been transcribed
            .map(name => getTraitData(name) || { name });
    }
);

export const getRequiredTraits = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((requiredTraits, { lifepath }) => {
            const traitChoices = get(lifepath, 'traits.from', []);
            const requiredTrait = traitChoices.find(trait => !requiredTraits.includes(trait));
            return requiredTrait
                ? [...requiredTraits, requiredTrait]
                : requiredTraits;
        }, [])
            // TODO: remove { name } validator once all traits have been transcribed
            .map(name => getTraitData(name) || { name });
    }
);

export const getOptionalTraits = createSelector(
    [getLifepathTraitsPool, getRequiredTraits], (lifepathTraits, requiredTraits) => {
        return lifepathTraits.filter(trait => !requiredTraits
            .find(requiredTrait => requiredTrait.name === trait.name)
        );
    }
);

export const getLifepathTraits = createSelector(
    [getRequiredTraits, getOptionalTraits], (requiredTraits, optionalTraits) => {
        return {
            required: requiredTraits,
            optional: optionalTraits
        };
    }
);

export const getTraitPoints = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((traitPoints, { lifepath }) => {
            return traitPoints + get(lifepath, 'traits.points', 0);
        }, 0);
    }
);

export const getTraitPointsLeft = createSelector(
    [getTraitPoints, getRequiredTraits, getBoughtTraits], (traitPoints, requiredTraits, boughtTraits) => {
        const spentPoints = boughtTraits.reduce((total, trait) => {
            return total + trait.cost;
        }, 0);
        return traitPoints - requiredTraits.length - spentPoints;
    }
);

export const getAllTraits = createSelector(
    [getRequiredTraits, getBoughtTraits], (requiredTraits, boughtTraits) => {
        return [
            ...requiredTraits,
            ...boughtTraits
        ];
    }
);

// Attributes
export const getHealthScoreBonus = createSelector(
    [getHealthAnswers], healthAnswers => {
        return getHealthScoreBonusFromAnswers(healthAnswers)
    }
);

export const getBaseHealthScore = createSelector(
    [getSelectedStats], (selectedStats) => {
        return Math.floor((selectedStats.will + selectedStats.forte) / 2);
    }
);

export const getHealthScore = createSelector(
    [getBaseHealthScore, getHealthScoreBonus], (baseHealthScore, bonus) => {
        return baseHealthScore + bonus;
    }
);

export const getSteelScoreBonus = createSelector(
    [getSteelAnswers, getSelectedStats], (steelAnswers, selectedStats) => {
        return getSteelScoreBonusFromAnswers(steelAnswers, selectedStats)
    }
);

export const getSteelScore = createSelector(
    [getSteelScoreBonus], bonus => {
        return 3 + bonus
    }
);

export const getReflexScore = createSelector(
    [getSelectedStats], selectedStats => {
        return Math.floor(
            (selectedStats.perception + selectedStats.agility + selectedStats.speed) / 3
        )
    }
);

export const getMortalWoundScore = createSelector(
    [getSelectedStats], selectedStats => {
        return 6 + Math.floor((selectedStats.power + selectedStats.forte) / 2)
    }
);

// Resources
export const getResourcePoints = createSelector(
    [getSelectedLifepaths], lifepaths => {
        return lifepaths.reduce((resourcePoints, { lifepath }) => {
            return resourcePoints + lifepath.res;
        }, 0);
    }
);