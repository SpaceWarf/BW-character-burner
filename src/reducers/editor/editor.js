import { combineReducers } from 'redux';
import { sections } from '#Utilities/config/editor.config.js';
import {
    getSkillPointsLeft
} from '#Utilities/redux-selectors.js';
import lifepaths from './lifepaths.js';
import stats from './stats';
import skills from './skills';
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
        case types.UPDATE_SECTIONS_LOCK_STATE:
            const newState = [];
            const editorState = action.state.editor;
            const skillPointsLeft = getSkillPointsLeft(action.state);
            if (editorState.lifepaths.selectedLifepaths.length !== editorState.lifepaths.count) {
                newState.push('Stats');
            }
            if (
                !newState.includes('Skills') &&
                (skillPointsLeft.lifepath !== 0 || skillPointsLeft.general !== 0)
            ) {
                newState.push('Traits');
            }
            return newState;
        case types.LOCK_SECTIONS:
        case types.UNLOCK_SECTIONS:
        default:
            return state;
    }
};

export default combineReducers({
    selectedRace,
    activeSection,
    lockedSections,
    lifepaths,
    stats,
    skills
});