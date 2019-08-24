import * as types from "#Actions/types.js";

const selectRace = race => ({
    type: types.SELECT_RACE,
    race
});

const setActiveSection = section => ({
    type: types.SET_ACTIVE_SECTION,
    section
});

const selectBornLifepath = lifepath => ({
    type: types.SELECT_BORN_LIFEPATH,
    lifepath
});

const unselectBornLifepath = () => ({
    type: types.UNSELECT_BORN_LIFEPATH
})

export {
    selectRace,
    setActiveSection,
    selectBornLifepath,
    unselectBornLifepath
};
