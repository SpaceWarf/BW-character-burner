import { combineReducers } from 'redux';
import { sections } from '#Utilities/config/editor.config.js';
import {
    getSkillPointsLeft,
    getPhysicalPointsLeftToAssign,
    getMentalPointsLeftToAssign,
    getTraitPointsLeft
} from '#Utilities/redux-selectors.js';
import lifepaths from './lifepaths.js';
import stats from './stats';
import skills from './skills';
import traits from './traits';
import attributes from './attributes';
import * as types from "#Actions/types.js";

const selectedRace = (state = "", action) => {
    switch (action.type) {
        case types.SELECT_RACE:
            return action.race;
        default:
            return state;
    }
};

const activeSection = (state = sections[0], action) => {
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
            const editorState = action.state.editor;

            // Stats section lock conditions
            if (editorState.lifepaths.selectedLifepaths.length !== editorState.lifepaths.count) {
                return sections.slice(1);
            }

            // Skills section lock conditions
            const mentalPointsLeft = getMentalPointsLeftToAssign(action.state);
            const physicalPointsLeft = getPhysicalPointsLeftToAssign(action.state);
            if (mentalPointsLeft !== 0 || physicalPointsLeft !== 0) {
                return sections.slice(2);
            }

            // Traits section lock conditions
            const skillPointsLeft = getSkillPointsLeft(action.state);
            if (skillPointsLeft.lifepath !== 0 || skillPointsLeft.general !== 0) {
                return sections.slice(3);
            }

            // Attributes & Resources section lock conditions
            const traitPointsLeft = getTraitPointsLeft(action.state);
            if (traitPointsLeft !== 0) {
                return sections.slice(4);
            }

            // Finalize section lock conditions
            if (true) {
                return sections.slice(6);
            }

            return [];
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
    skills,
    traits,
    attributes
});