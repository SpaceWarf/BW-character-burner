import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

import defaultState from '#Utilities/config/default-state.js';
import mockState from '#Utilities/config/mock-state.js';

const healthAnswers = (state = defaultState.attributes.healthAnswers, action) => {
    switch (action.type) {
        case types.ANSWER_HEALTH_QUESTIONS:
            const newState = { ...state };
            Object.keys(action.answers).forEach(question => {
                newState[question] = action.answers[question];
            });
            return newState;
        default:
            return state;
    }
};

const steelAnswers = (state = defaultState.attributes.steelAnswers, action) => {
    switch (action.type) {
        case types.ANSWER_STEEL_QUESTIONS:
            const newState = { ...state };
            Object.keys(action.answers).forEach(question => {
                newState[question] = action.answers[question];
            });
            return newState;
        default:
            return state;
    }
};

export default combineReducers({
    healthAnswers,
    steelAnswers
});