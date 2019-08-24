const { createSelector } = require('reselect');
const { getLifepathDataSet } = require('./data-selectors.js');

const getSelectedRace = state => state.editor.selectedRace;

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