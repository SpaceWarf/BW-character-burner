import * as types from "#Actions/types.js";

export const setActiveSection = section => ({
    type: types.SET_ACTIVE_SECTION,
    section
});

export const selectRace = race => ({
    type: types.SELECT_RACE,
    race
});

export const selectLifepathCount = count => ({
    type: types.SELECT_LIFEPATH_COUNT,
    count
});

export const selectBornLifepath = lifepath => ({
    type: types.SELECT_BORN_LIFEPATH,
    lifepath
});

export const unselectBornLifepath = () => ({
    type: types.UNSELECT_BORN_LIFEPATH
});

export const addLifepath = (lifepath, index) => ({
    type: types.ADD_LIFEPATH,
    lifepath,
    index
});

export const removeLifepath = index => ({
    type: types.REMOVE_LIFEPATH,
    index
});

export const lockSection = section => ({
    type: types.LOCK_SECTION,
    section
});

export const unlockSection = section => ({
    type: types.UNLOCK_SECTION,
    section
});
