import { combineReducers } from 'redux';
import * as types from "#Utilities/action-types.js";

const selectedRace = (state = "", action) => {
    switch (action.type) {
        case types.SELECT_RACE:
            return action.race;
        default:
            return state;
    }
};

export default combineReducers({
    selectedRace
});