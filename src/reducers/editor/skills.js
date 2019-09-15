import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const advancedSkills = (state = [], action) => {
    switch (action.type) {
        case types.ADVANCE_SKILL:
            const advancedSkill = state.find(skill => skill.name === action.skill)
                || { name: action.skill, lifepath: 0, general: 0 };
            return [
                ...state.filter(skill => skill.name !== action.skill),
                {
                    name: advancedSkill.name,
                    lifepath: action.isGeneral
                        ? advancedSkill.lifepath
                        : action.advances,
                    general: action.isGeneral
                        ? action.advances
                        : advancedSkill.general
                }
            ];
        case types.REMOVE_GENERAL_SKILL:
            return state.filter(skill => skill.name !== action.skill);
        default:
            return state;
    }
};

const openedGeneralSkills = (state = [], action) => {
    switch (action.type) {
        case types.OPEN_GENERAL_SKILL:
            return [
                ...state,
                action.skill
            ];
        case types.REMOVE_GENERAL_SKILL:
            return state.filter(skill => skill.name !== action.skill);
        default:
            return state;
    }
};

export default combineReducers({
    advancedSkills,
    openedGeneralSkills
});