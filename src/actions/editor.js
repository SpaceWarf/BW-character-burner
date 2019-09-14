import * as types from "#Actions/types.js";
import { resolve } from "upath";

// App
export const setActiveSection = section => ({
    type: types.SET_ACTIVE_SECTION,
    section
});

export const lockSections = sections => ({
    type: types.LOCK_SECTIONS,
    sections
});

export const unlockSections = sections => ({
    type: types.UNLOCK_SECTIONS,
    sections
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

export const selectLifepathCount = count => dispatch => {
    dispatch({
        type: types.SELECT_LIFEPATH_COUNT,
        count
    });
    return Promise.resolve();
};

export const selectBornLifepath = lifepath => dispatch => {
    dispatch({
        type: types.SELECT_BORN_LIFEPATH,
        lifepath
    });
    return Promise.resolve();
};

export const unselectBornLifepath = () => dispatch => {
    dispatch({
        type: types.UNSELECT_BORN_LIFEPATH
    });
    return Promise.resolve();
}

export const addLifepath = (lifepath, index) => dispatch => {
    dispatch({
        type: types.ADD_LIFEPATH,
        lifepath,
        index
    });
    return Promise.resolve();
}

export const removeLifepath = index => dispatch => {
    dispatch({
        type: types.REMOVE_LIFEPATH,
        index
    });
    return Promise.resolve();
}

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
export const advanceSkill = (skill, advances, isGeneral) => dispatch => {
    dispatch({
        type: types.ADVANCE_SKILL,
        skill,
        advances,
        isGeneral
    });
    return Promise.resolve();
};

export const openGeneralSkill = skill => dispatch => {
    dispatch({
        type: types.OPEN_GENERAL_SKILL,
        skill
    });
    return Promise.resolve();
};

export const removeGeneralSkill = skill => dispatch => {
    dispatch({
        type: types.REMOVE_GENERAL_SKILL,
        skill
    });
    return Promise.resolve();
};
