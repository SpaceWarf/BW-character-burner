import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const count = (state = 2, action) => {
    switch (action.type) {
        case types.SELECT_LIFEPATH_COUNT:
            return action.count;
        default:
            return state;
    }
};

const selectedLifepaths = (state = [], action) => {
    switch (action.type) {
        case types.ADD_LIFEPATH:
            return [
                ...state,
                {
                    lifepath: action.lifepath,
                    index: action.index
                }
            ];
        case types.REMOVE_LIFEPATH:
            return state.filter(lifepath => (
                lifepath.index !== action.index
            ));
        case types.SELECT_RACE:
            return [];
        case types.SELECT_LIFEPATH_COUNT:
            return state.filter(lifepath => (
                lifepath.index < action.count
            ));
        default:
            return state;
    }
};

export default combineReducers({
    count,
    selectedLifepaths
});