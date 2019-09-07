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

export const lockSections = sections => ({
    type: types.LOCK_SECTIONS,
    sections
});

export const unlockSections = sections => ({
    type: types.UNLOCK_SECTIONS,
    sections
});

export const selectStatBonus = (bonus, index) => ({
    type: types.SELECT_STAT_BONUS,
    bonus,
    index
});

export const selectStat = (stat, value) => ({
    type: types.SELECT_STAT,
    stat,
    value
});
