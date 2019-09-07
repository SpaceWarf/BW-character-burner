import { combineReducers } from 'redux';
import { sections } from '#Utilities/config/editor.config.js';
import lifepaths from './lifepaths.js';
import stats from './stats';
import * as types from "#Actions/types.js";

const selectedRace = (state = "", action) => {
    switch (action.type) {
        case types.SELECT_RACE:
            return action.race;
        default:
            return state;
    }
};

const activeSection = (state = "Lifepaths", action) => {
    switch (action.type) {
        case types.SET_ACTIVE_SECTION:
            return action.section;
        default:
            return state;
    }
};

const lockedSections = (state = sections.slice(1), action) => {
    switch (action.type) {
        case types.LOCK_SECTIONS:
            return [
                ...state,
                ...action.sections
            ];
        case types.UNLOCK_SECTIONS:
            return state.filter(section => (
                !action.sections.includes(section)
            ));
        default:
            return state;
    }
};

export default combineReducers({
    selectedRace,
    activeSection,
    lockedSections,
    lifepaths,
    stats
});