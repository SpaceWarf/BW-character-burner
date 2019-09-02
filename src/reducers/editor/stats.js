import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const selectedStatBonuses = (state = [], action) => {
    switch (action.type) {
        case types.SELECT_STAT_BONUS:
            const newState = state
                .filter(bonus => bonus.index !== action.index);
            newState.push({
                bonus: action.bonus,
                index: action.index
            })
            return newState;
        case types.REMOVE_LIFEPATH:
        case types.SELECT_LIFEPATH_COUNT:
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    selectedStatBonuses
});