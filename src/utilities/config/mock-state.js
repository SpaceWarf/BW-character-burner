import { sections } from './editor.config.js';

export default {
    editor: {
        selectedRace: 'Men',
        activeSection: sections[6],
        lockedSections: []
    },
    lifepaths: {
        count: 3,
        selectedLifepaths: [
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
                    name: 'Lazy Stayabout',
                    setting: 'Peasant',
                    time: 7,
                    res: 3,
                    leads: [
                        'Servitude',
                        'Professional Soldier',
                        'Outcast'
                    ],
                    skills: {
                        points: 3,
                        from: [
                            'Lazy-wise',
                            'Peasant-wise',
                            'Wife-wise',
                            'Work-wise'
                        ]
                    },
                    traits: {
                        points: 1,
                        from: [
                            'A Little Fat'
                        ]
                    }
                },
                index: 1
            },
            {
                lifepath: {
                    name: 'Conscript',
                    setting: 'Peasant',
                    time: 1,
                    res: 4,
                    leads: [
                        'Servitude',
                        'Professional Soldier',
                        'Outcast'
                    ],
                    skills: {
                        points: 2,
                        from: [
                            'Foraging',
                            'Battle-wise',
                            'Rumor-wise'
                        ]
                    },
                    traits: {
                        points: 1,
                        from: [
                            'Flee from Battle'
                        ]
                    }
                },
                index: 2
            }
        ]
    },
    stats: {
        selectedStatBonuses: {
            bonus: [],
            malus: []
        },
        selectedStats: {
            will: 3,
            perception: 3,
            power: 5,
            forte: 4,
            agility: 3,
            speed: 4
        }
    },
    skills: {
        advancedSkills: [
            {
                name: 'Boxing (Martial Arts)',
                lifepath: 0,
                general: 3
            },
            {
                name: 'Foraging',
                lifepath: 2,
                general: 0
            },
            {
                name: 'Lazy-wise',
                lifepath: 1,
                general: 0
            }
        ],
        openedGeneralSkills: [
            {
                name: 'Boxing (Martial Arts)',
                roots: [
                    'Power',
                    'Agility'
                ],
                description: 'description',
                obstacles: {},
                FoRKs: [
                    'Brawling',
                    'Appropriate melee weapon skill'
                ],
                skillType: 'Martial',
                tools: {
                    exists: false
                }
            }
        ]
    },
    traits: {
        boughtTraits: [
            {
                name: 'Aura of Innocence',
                type: 'C-O',
                cost: 2,
                description: 'description'
            }
        ],
        addedTraits: [
            {
                name: 'Aura of Innocence',
                type: 'C-O',
                cost: 2,
                description: 'description'
            }
        ]
    },
    attributes: {
        healthAnswers: {
            liveInFilth: false,
            isSeverelyWounded: false,
            isAthletic: true
        },
        steelAnswers: {
            wasSoldier: true
        }
    },
    resources: {
        boughtResources: [
            {
                category: 'simple',
                name: 'Clothes',
                price: 1,
                note: 'Basic peasant clothes'
            },
            {
                category: 'simple',
                name: 'Shoes',
                price: 1,
                note: 'Basic shoes'
            },
            {
                category: 'arm',
                quality: {
                    name: 'Poor',
                    price: 3,
                    description: 'Base Ob 2 to use',
                    modificationCost: 1
                },
                modifications: [],
                price: 3,
                note: 'Sword and Dagger'
            },
            {
                category: 'fullArmor',
                type: {
                    name: 'Gambeson',
                    price: 3
                },
                quality: {
                    name: 'Run of the Mill',
                    modifier: 1,
                    description: 'Only the first 1 counts.'
                },
                price: 3,
                note: 'Set of armor from my regiment'
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
                        name: 'Other Family',
                        description: 'Other family relationship (cousins, aunts, etc.)',
                        modifier: -1
                    },
                    {
                        name: 'Hateful',
                        description: 'Relationships that are hateful, are rivals or are extremely unfriendly to the character',
                        modifier: -2
                    }
                ],
                price: 2,
                note: 'My aunt'
            }
        ]
    }
}