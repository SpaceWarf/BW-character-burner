import * as types from "#Actions/types.js";

const setActiveSection = section => ({
    type: types.SET_ACTIVE_SECTION,
    section
});

const selectRace = race => ({
    type: types.SELECT_RACE,
    race
});

const selectLifepathCount = count => ({
    type: types.SELECT_LIFEPATH_COUNT,
    count
});

const selectBornLifepath = lifepath => ({
    type: types.SELECT_BORN_LIFEPATH,
    lifepath
});

const unselectBornLifepath = () => ({
    type: types.UNSELECT_BORN_LIFEPATH
});

const addLifepath = (lifepath, index) => ({
    type: types.ADD_LIFEPATH,
    lifepath,
    index
});

const removeLifepath = index => ({
    type: types.REMOVE_LIFEPATH,
    index
});

export {
    setActiveSection,
    selectRace,
    selectLifepathCount,
    selectBornLifepath,
    unselectBornLifepath,
    addLifepath,
    removeLifepath
};
