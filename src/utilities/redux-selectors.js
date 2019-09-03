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
                        bonuses.choose += lifepath.stat.bonus;
                        break;
                    default:
                }
            }
            return bonuses;
        }, { mental: 0, physical: 0, choose: 0 })
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

export const getMentalPointsLeftToAssign = createSelector(
    [getMentalPool, getSelectedStatBonuses, getSelectedStats], (mentalPool, selectedStatBonuses, selectedStats) => {
        const selectedMentalBonuses = selectedStatBonuses.reduce((total, bonus) => {
            return bonus.bonus === 'M' ? total + 1 : total;
        }, 0)
        const totalPool = mentalPool + selectedMentalBonuses;
        return totalPool - (selectedStats.will || 0) - (selectedStats.perception || 0);
    }
);

export const getPhysicalPointsLeftToAssign = createSelector(
    [getPhysicalPool, getSelectedStatBonuses, getSelectedStats], (physicalPool, selectedStatBonuses, selectedStats) => {
        const selectedPhysicalBonuses = selectedStatBonuses.reduce((total, bonus) => {
            return bonus.bonus === 'P' ? total + 1 : total;
        }, 0)
        const totalPool = physicalPool + selectedPhysicalBonuses;
        return totalPool - (selectedStats.power || 0) - (selectedStats.forte || 0)
            - (selectedStats.agility || 0) - (selectedStats.speed || 0);
    }
);
