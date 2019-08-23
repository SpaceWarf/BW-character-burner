import * as types from "#Actions/types.js";

const selectRace = race => ({
    type: types.SELECT_RACE,
    race
});

const setActiveSection = section => ({
    type: types.SET_ACTIVE_SECTION,
    section
});

export {
    selectRace,
    setActiveSection
};
