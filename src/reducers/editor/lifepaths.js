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

const selectedLifepaths = (state = [
    {
        lifepath: {
            name: 'Born Peasant',
            isBornLifepath: true,
            setting: 'Peasant',
            time: 8,
            res: 3,
            leads: [
                'Servitude',
                'Professional Soldier',
                'Seafaring',
                'Religious'
            ],
            skills: {
                generalPoints: 3
            },
            traits: {
                points: 2
            }
        },
        index: 0
    },
    {
        lifepath: {
            name: 'Midwife',
            setting: 'Peasant',
            time: 10,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Outcast',
                'Villager'
            ],
            skills: {
                points: 7,
                from: [
                    'Animal Husbandry',
                    'Herbalism',
                    'Midwifery',
                    'Omen-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Bedside Manner'
                ]
            }
        },
        index: 1
    }
], action) => {
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