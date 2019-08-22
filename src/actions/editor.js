import * as types from "#Utilities/action-types.js";

const selectRace = race => ({
    type: types.SELECT_RACE,
    race
});

export {
    selectRace
};
