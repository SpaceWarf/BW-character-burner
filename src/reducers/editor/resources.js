import { combineReducers } from 'redux';
import * as types from "Actions/types.js";

import defaultState from 'Utilities/config/default-state.js';
import mockState from 'Utilities/config/mock-state.js';

const boughtResources = (state = defaultState.resources.boughtResources, action) => {
    switch (action.type) {
        case types.BUY_RESOURCE:
            return [...state, action.resource];
        case types.REMOVE_RESOURCE:
            return state.filter(resource => (
                resource !== action.resource
            ));
        default:
            return state;
    }
};

export default combineReducers({
    boughtResources
});