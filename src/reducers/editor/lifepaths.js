import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const selectedBornLifepath = (state = [], action) => {
    switch (action.type) {
        case types.SELECT_BORN_LIFEPATH:
            return [action.lifepath];
        case types.UNSELECT_BORN_LIFEPATH:
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    selectedBornLifepath
});