import { combineReducers } from 'redux';
import * as types from "Actions/types.js";

import defaultState from 'Utilities/config/default-state.js';
import mockState from 'Utilities/config/mock-state.js';

const selectedStatBonuses = (state = defaultState.stats.selectedStatBonuses, action) => {
    switch (action.type) {
        case types.SELECT_STAT_BONUS:
            const newState = { bonus: [...state.bonus], malus: [...state.malus] };
            newState[action.bonusType] = newState[action.bonusType]
                .filter(bonus => bonus.index !== action.index);
            newState[action.bonusType].push({
                bonus: action.bonus,
                index: action.index
            })
            return newState;
        case types.REMOVE_LIFEPATH:
        case types.SELECT_LIFEPATH_COUNT:
            return { bonus: [], malus: [] };
        default:
            return state;
    }
};

const selectedStats = (state = defaultState.stats.selectedStats, action) => {
    switch (action.type) {
        case types.SELECT_STAT:
            const newState = { ...state };
            newState[action.stat] = action.value;
            return newState;
        case types.REMOVE_LIFEPATH:
        case types.SELECT_LIFEPATH_COUNT:
            return {
                will: 0,
                perception: 0,
                power: 0,
                forte: 0,
                agility: 0,
                speed: 0
            };
        default:
            return state;
    }
};

export default combineReducers({
    selectedStatBonuses,
    selectedStats
});