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

const selectedBornLifepath = (state = [
    {
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
    }
], action) => {
    switch (action.type) {
        case types.SELECT_BORN_LIFEPATH:
            return [action.lifepath];
        case types.UNSELECT_BORN_LIFEPATH:
        case types.SELECT_RACE:
            return [];
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
            name: 'Farmer',
            setting: 'Peasant',
            time: 8,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Servitude',
                'Professional Soldier',
                'Villager'
            ],
            skills: {
                points: 8,
                from: [
                    'Farming',
                    'Mending',
                    'Animal Husbandry',
                    'Weaving',
                    'Cooking',
                    'Sewing',
                    'Firebuilding',
                    'Sing'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Hoarding'
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
        case types.SELECT_BORN_LIFEPATH:
            return [
                ...state,
                {
                    lifepath: action.lifepath,
                    index: 0
                }
            ];
        case types.UNSELECT_BORN_LIFEPATH:
            return state.filter(lifepath => (
                lifepath.index !== 0
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
    selectedBornLifepath,
    selectedLifepaths
});