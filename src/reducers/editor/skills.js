import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const advancedSkills = (state = [], action) => {
    switch (action.type) {
        case types.ADVANCE_SKILL:
            const advancedSkill = state.find(skill => skill.name === action.skill)
                || { name: action.skill, advances: 0, generalAdvances: 0 };
            return [
                ...state.filter(skill => skill.name !== action.skill),
                {
                    name: advancedSkill.name,
                    advances: action.isGeneral
                        ? advancedSkill.advances
                        : action.advances,
                    generalAdvances: action.isGeneral
                        ? action.advances
                        : advancedSkill.generalAdvances
                }
            ];
        default:
            return state;
    }
};

export default combineReducers({
    advancedSkills
});