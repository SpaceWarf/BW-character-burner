import { combineReducers } from 'redux';
import * as types from "#Actions/types.js";

const boughtResources = (state = [
    {
        category: 'simple',
        name: 'Riding Mount, Pack Animal',
        price: 5,
        note: 'example note'
    },
    {
        category: 'arm',
        quality: {
            name: 'Poor',
            price: 3,
            description: 'Base Ob 2 to use',
            modificationCost: 1
        },
        modifications: [
            'modif1',
            'modif2'
        ],
        price: 5,
        note: 'example note'
    },
    {
        category: 'missile',
        type: {
            name: 'Hunting Bow',
            price: 5,
            addon: 'arrows'
        },
        quality: {
            name: 'Poor',
            modifier: 0.5,
            description: '+1 Ob to hit'
        },
        addons: [
            'Bodking Head',
            'Frog Crotch'
        ],
        price: 5,
        note: 'example note'
    },
    {
        category: 'fullArmor',
        type: {
            name: 'Gambeson',
            price: 3
        },
        quality: {
            name: 'Poor',
            modifier: 0.5,
            description: 'All 1s count for losing armor dice.'
        },
        price: 2,
        note: 'example note'
    },
    {
        category: 'partsArmor',
        selectedParts: {
            head: {
                type: {
                    name: 'Gambeson',
                    price: 3
                },
                quality: {
                    name: 'Poor',
                    modifier: 0.5,
                    description: 'All 1s count for losing armor dice.'
                }
            },
            chest: {
                type: {
                    name: 'Reinforced Leather',
                    price: 6
                },
                quality: {
                    name: 'Poor',
                    modifier: 0.5,
                    description: 'All 1s count for losing armor dice.'
                }
            },
            arms: {
                type: {
                    name: 'Light Mail',
                    price: 10
                },
                quality: {
                    name: 'Run of the Mill',
                    modifier: 1,
                    description: 'Only the first 1 counts.'
                }
            },
            legs: {
                type: {
                    name: 'Heavy Mail',
                    price: 15
                },
                quality: {
                    name: 'Run of the Mill',
                    modifier: 1,
                    description: 'Only the first 1 counts.'
                }
            }
        },
        price: 12,
        note: 'example note'
    },
    {
        category: 'property',
        name: 'Leaky Shack',
        price: 1,
        note: 'example note'
    },
    {
        category: 'relationship',
        type: {
            name: 'Minor',
            description: 'A character who plays a minor role in the setting or situation',
            price: 5
        },
        modifiers: [
            {
                name: 'Immediate Family',
                description: 'Immediate family relationship',
                modifier: -2
            },
            {
                name: 'Other Family',
                description: 'Other family relationship (cousins, aunts, etc.)',
                modifier: -1
            }
        ],
        price: 2,
        note: 'example note'
    },
    {
        category: 'affiliation',
        name: '1D, A small, local or specialized group',
        price: 10,
        note: 'example note'
    },
    {
        category: 'reputation',
        name: '1D, Local or minor reputation',
        price: 7,
        note: 'example note'
    }
], action) => {
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