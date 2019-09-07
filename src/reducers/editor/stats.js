import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const selectedStatBonuses = (state = { bonus: [], malus: [] }, action) => {
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
        case types.UNSELECT_BORN_LIFEPATH:
        case types.REMOVE_LIFEPATH:
        case types.SELECT_LIFEPATH_COUNT:
            return { bonus: [], malus: [] };
        default:
            return state;
    }
};

const selectedStats = (state = {}, action) => {
    switch (action.type) {
        case types.SELECT_STAT:
            const newState = { ...state };
            newState[action.stat] = action.value;
            return newState;
        case types.UNSELECT_BORN_LIFEPATH:
        case types.REMOVE_LIFEPATH:
        case types.SELECT_LIFEPATH_COUNT:
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    selectedStatBonuses,
    selectedStats
});