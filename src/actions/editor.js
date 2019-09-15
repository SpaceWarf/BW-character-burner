import * as types from "#Actions/types.js";

// App
export const setActiveSection = section => ({
    type: types.SET_ACTIVE_SECTION,
    section
});

export const updateSectionsLockState = () => (dispatch, getState) => {
    const state = getState();
    return dispatch({
        type: types.UPDATE_SECTIONS_LOCK_STATE,
        state
    });
};

// Lifepath editor
export const selectRace = race => ({
    type: types.SELECT_RACE,
    race
});

export const selectLifepathCount = count => ({
    type: types.SELECT_LIFEPATH_COUNT,
    count
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

// Stats editor
export const selectStatBonus = (bonus, index, bonusType) => ({
    type: types.SELECT_STAT_BONUS,
    bonus,
    index,
    bonusType
});

export const selectStat = (stat, value) => ({
    type: types.SELECT_STAT,
    stat,
    value
});

// Skills editor
export const advanceSkill = (skill, advances, isGeneral) => ({
    type: types.ADVANCE_SKILL,
    skill,
    advances,
    isGeneral
});

export const openGeneralSkill = skill => ({
    type: types.OPEN_GENERAL_SKILL,
    skill
});

export const removeGeneralSkill = skill => ({
    type: types.REMOVE_GENERAL_SKILL,
    skill
});
