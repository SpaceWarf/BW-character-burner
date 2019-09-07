const { createSelector } = require('reselect');
const { getLifepathDataSet } = require('./data-selectors.js');
const { statPools } = require('./config/editor.config.js');

const getSelectedRace = state => state.editor.selectedRace;
const getSelectedLifepaths = state => state.editor.lifepaths.selectedLifepaths;
const getSelectedStatBonuses = state => state.editor.stats.selectedStatBonuses;
const getSelectedStats = state => state.editor.stats.selectedStats;

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

// TODO: add leads
export const getAge = createSelector(
    [getSelectedLifepaths], selectedLifepaths => {
        return selectedLifepaths.reduce((age, { lifepath }) => {
            return age + lifepath.time;
        }, 0)
    }
);

export const getMentalPool = createSelector(
    [getAge, getStatBonuses], (age, bonuses) => {
        return statPools
            .find(pool => pool.minAge <= age && pool.maxAge >= age)
            .mental + bonuses.mental;
    }
);

export const getPhysicalPool = createSelector(
    [getAge, getStatBonuses], (age, bonuses) => {
        return statPools
            .find(pool => pool.minAge <= age && pool.maxAge >= age)
            .physical + bonuses.physical;
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
        return totalPool - (selectedStats.will || 0) - (selectedStats.perception || 0);
    }
);

export const getPhysicalPointsLeftToAssign = createSelector(
    [getPhysicalPool, getAppliedBonuses, getSelectedStats], (physicalPool, appliedBonuses, selectedStats) => {
        const totalPool = physicalPool + appliedBonuses.physical;
        return totalPool - (selectedStats.power || 0) - (selectedStats.forte || 0)
            - (selectedStats.agility || 0) - (selectedStats.speed || 0);
    }
);
