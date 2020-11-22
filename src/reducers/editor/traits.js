import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

import defaultState from '#Utilities/config/default-state.js';
import mockState from '#Utilities/config/mock-state.js';

const boughtTraits = (state = defaultState.traits.boughtTraits, action) => {
    switch (action.type) {
        case types.BUY_TRAIT:
            if (state.includes(action.trait)) {
                return state.filter(trait => trait.name !== action.trait.name);
            }
            return [...state, action.trait];
        case types.REMOVE_TRAIT:
            return state.filter(trait => trait.name !== action.trait.name);
        case types.REMOVE_LIFEPATH:
        case types.SELECT_LIFEPATH_COUNT:
            return [];
        default:
            return state;
    }
};

const addedTraits = (state = defaultState.traits.addedTraits, action) => {
    switch (action.type) {
        case types.ADD_TRAIT:
            return [
                ...state,
                action.trait
            ];
        case types.REMOVE_TRAIT:
            return state.filter(trait => trait.name !== action.trait.name);
        case types.REMOVE_LIFEPATH:
        case types.SELECT_LIFEPATH_COUNT:
            return [];
        default:
            return state;
    }
};

export default combineReducers({
    boughtTraits,
    addedTraits
});