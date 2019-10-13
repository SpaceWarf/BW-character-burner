import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const boughtResources = (state = [], action) => {
    switch (action.type) {
        case types.BUY_RESOURCE:
            return [...state, action.resource];
        case types.REMOVE_RESOURCE:
            return state;
        default:
            return state;
    }
};

export default combineReducers({
    boughtResources
});