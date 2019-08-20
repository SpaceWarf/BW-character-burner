export default
    [
        {
            name: 'Born Peasant',
            isBornLifepath: true,
            setting: 'Peasant',
            time: 8,
            res: 3,
            leads: [
                'Servitude',
                'Soldier',
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
        {
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
                'Soldier',
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
        {
            name: 'Head of Household',
            setting: 'Peasant',
            time: 15,
            res: 20,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Soldier',
                'Villager'
            ],
            skills: {
                points: 8,
                from: [
                    'Carpentry',
                    'Hunting',
                    'Haggling',
                    'Almanac'
                ]
            },
            traits: {
                points: 2
            }
        },
        {
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
        {
            name: 'Lazy Stayabout',
            setting: 'Peasant',
            time: 7,
            res: 3,
            leads: [
                'Servitude',
                'Soldier',
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
        {
            name: 'Conscript',
            setting: 'Peasant',
            time: 1,
            res: 4,
            leads: [
                'Servitude',
                'Soldier',
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
        {
            name: 'Peasant Pilgrim',
            setting: 'Peasant',
            time: 3,
            res: 4,
            leads: [
                'Servitude',
                'Villager',
                'Outcast'
            ],
            skills: {
                generalPoints: 1,
                points: 3,
                from: [
                    'Doctrine',
                    'Pilgrimage-wise',
                    'Saint-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Road Weary',
                    'Alms-Taker'
                ]
            }
        },
        {
            name: 'Miller',
            setting: 'Peasant',
            time: 7,
            res: 15,
            leads: [
                'Villager'
            ],
            skills: {
                points: 5,
                from: [
                    'Miller',
                    'Brewer',
                    'Mending',
                    'Carpentry'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Lord\'s Favorite'
                ]
            }
        },
        {
            name: 'Fisherman',
            setting: 'Peasant',
            time: 6,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Villager',
                'Seafaring',
                'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Fishing',
                    'Rigging',
                    'Knots',
                    'Mending',
                    'Cooking',
                    'Boatwright'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Superstitious'
                ]
            }
        },
        {
            name: 'Shepherd',
            setting: 'Peasant',
            time: 4,
            res: 4,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Villager',
                'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Animal Husbandry',
                    'Sing',
                    'Climbing',
                    'Flute'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Cry Wolf'
                ]
            }
        },
        {
            name: 'Woodcutter',
            setting: 'Peasant',
            time: 5,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Villager',
                'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Firebuilding',
                    'Mending',
                    'Foraging',
                    'Orienteering',
                    'Tree-wise',
                    'Tree Cutting'
                ]
            },
            traits: {
                points: 1
            }
        },
        {
            name: 'Hunter',
            setting: 'Peasant',
            time: 5,
            res: 6,
            stat: {
                bonus: 1,
                attributes: 'M,P'
            },
            leads: [
                'Villager',
                'Outcast',
                'Soldier'
            ],
            skills: {
                points: 7,
                from: [
                    'Hunting',
                    'Tracking',
                    'Stealthy',
                    'Cooking',
                    'Orienteering',
                    'Javelin|Bow'
                ]
            },
            traits: {
                points: 1
            }
        },
        {
            name: 'Trapper',
            setting: 'Peasant',
            time: 5,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'M,P'
            },
            leads: [
                'Villager',
                'Outcast',
                'Soldier'
            ],
            skills: {
                points: 6,
                from: [
                    'Trapper',
                    'Stealthy',
                    'Tracking',
                    'Cooking',
                    'Haggling',
                    'Taxidermy'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Fould Smelling'
                ]
            }
        },
        {
            name: 'Peddler',
            setting: 'Peasant',
            time: 5,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
                'Outcast',
                'Servitude',
                'City'
            ],
            skills: {
                points: 7,
                from: [
                    'Mending',
                    'Sing',
                    'Haggling',
                    'Chandler',
                    'Persuasion',
                    'Inconspicuous',
                    'Falsehood'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Blank Stare',
                    'Glib',
                    'Eidetic Memory'
                ]
            }
        },
        {
            name: 'Elder',
            setting: 'Peasant',
            time: 15,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
                'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Observation',
                    'Persuasion',
                    'Ugly Truth',
                    'Peasant-wise',
                    'Local History'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Crochety'
                ]
            }
        },
        {
            name: 'Augur',
            setting: 'Peasant',
            time: 5,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Servitude',
                'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Astrology',
                    'Sorcery',
                    'Falsehood',
                    'Ugly Truth',
                    'Omen-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Disturbed',
                    'Dreamer',
                    'Cassandra',
                    'Touch of Ages'
                ]
            }
        },
        {
            name: 'Itinerant Priest',
            setting: 'Peasant',
            time: 6,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
                'Outcast',
                'City',
                'Religious'
            ],
            skills: {
                points: 7,
                from: [
                    'Oratory',
                    'Suasion',
                    'Chandler',
                    'Riding',
                    'Write',
                    'Read',
                    'Doctrine'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Dusty',
                    'Faithful'
                ]
            }
        },
        {
            name: 'Recluse Wizard',
            setting: 'Peasant',
            time: 15,
            res: 28,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
                'Outcast',
                'City',
                'Religious'
            ],
            skills: {
                points: 7,
                from: [
                    'Astrology',
                    'Alchemy',
                    'Enchanting',
                    'Illumination',
                    'Ancient History',
                    'Obscure History'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Batshit',
                    'Gifted'
                ]
            }
        },
        {
            name: 'Country Wife',
            setting: 'Peasant',
            time: 10,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M,P'
            },
            leads: [
                'Religious'
            ],
            skills: {
                points: 2,
                from: [
                    'Child-Rearing',
                    'Cooking'
                ]
            },
            traits: {
                points: 1
            }
        },
        {
            name: 'Village Born',
            isBornLifepath: true,
            setting: 'Villager',
            time: 10,
            res: 4,
            leads: [
                'Peasant',
                'Servitude',
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
        {
            name: 'Kid',
            setting: 'Villager',
            time: 4,
            res: 3,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'City',
                'Outcast',
                'Peasant',
                'Religious',
                'Seafaring',
                'Servitude',
                'Soldier',
                'Villager'
            ],
            skills: {
                points: 3,
                from: [
                    'Trouble-wise',
                    'Throwing',
                    'Inconspicuous'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Bad Egg',
                    'Good for Nothing',
                    'Fleet of Foot'
                ]
            }
        },
        {
            name: 'Idiot',
            setting: 'Villager',
            time: 10,
            res: 4,
            leads: [
                'Outcast',
                'Peasant'
            ],
            skills: {
                points: 4,
                from: [
                    'Inconspicuous',
                    'Conspicuous',
                    'Ugly Truth',
                    'Village Secrets-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Problems',
                    'Alcoholic',
                    'Abused',
                    'Handicapped'
                ]
            }
        },
        {
            name: 'Pilgrim',
            setting: 'Villager',
            time: 2,
            res: 4,
            leads: [
                'Religious',
                'Servitude',
                'City'
            ],
            skills: {
                points: 5,
                from: [
                    'Religious Rumor-wise',
                    'Road-wise',
                    'Shrine-wise',
                    'Alms-wise',
                    'Reilc-wise',
                    'Doctrine'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Collector'
                ]
            }
        },
        {
            name: 'Conscript',
            setting: 'Villager',
            time: 1,
            res: 5,
            leads: [
                'Servitude',
                'Soldier',
                'Outcast'
            ],
            skills: {
                points: 2,
                from: [
                    'Foraging',
                    'Baggage Train-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Hide before Battle'
                ]
            }
        },
        {
            name: 'Groom',
            setting: 'Villager',
            time: 4,
            res: 7,
            leads: [
                'Peasant',
                'City',
                'Soldier'
            ],
            skills: {
                points: 4,
                from: [
                    'Animal Husbandry',
                    'Riding',
                    'Mending',
                    'Horse-wise',
                    'Road-wise'
                ]
            },
            traits: {
                points: 1
            }
        },
        {
            name: 'Runner',
            setting: 'Villager',
            time: 4,
            res: 6,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'City',
                'Peasant',
                'Soldier'
            ],
            skills: {
                points: 3,
                from: [
                    'Streetwise',
                    'Inconspicuous',
                    'Shortcut-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Skinny',
                    'Fleet of Foot'
                ]
            }
        },
        {
            name: 'Village Peddler',
            setting: 'Villager',
            time: 5,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Servitude',
                'City',
                'Outcast'
            ],
            skills: {
                points: 7,
                from: [
                    'Mending',
                    'Sing',
                    'Haggling',
                    'Chandler',
                    'Persuasion',
                    'Inconspicuous',
                    'Falsehood'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Odd'
                ]
            }
        },
        {
            name: 'Shopkeeper',
            setting: 'Villager',
            time: 6,
            res: 15,
            leads: [
                'City',
                'Outcast',
                'Soldier'
            ],
            skills: {
                points: 5,
                from: [
                    'Haggling',
                    'Accounting',
                    'Observation',
                    'Merchant-wise'
                ]
            },
            traits: {
                points: 1
            }
        },
        {
            name: 'Clerk',
            setting: 'Villager',
            time: 4,
            res: 9,
            leads: [
                'City',
                'Outcast',
                'Soldier'
            ],
            skills: {
                points: 4,
                from: [
                    'Bureaucracy',
                    'Write',
                    'Read',
                    'Contract-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Cramped Hands',
                    'Mind for Small Details'
                ]
            }
        },
        {
            name: 'Sailor',
            setting: 'Villager',
            time: 5,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Soldier',
                'Outcast',
                'Servitude',
                'Peasant'
            ],
            skills: {
                points: 6,
                from: [
                    'Rigging',
                    'Knots',
                    'Brawling',
                    'Mending',
                    'Sing',
                    'Fishing'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Superstitious',
                    'Sea Legs'
                ]
            }
        },
        {
            name: 'Laborer',
            setting: 'Villager',
            time: 4,
            res: 4,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Soldier',
                'Outcast',
                'Servitude',
                'Peasant'
            ],
            skills: {
                points: 2,
                from: [
                    'Ditch Digging',
                    'Latrine-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Calloused',
                    'Starved',
                    'Broken',
                    'Hardened',
                    'Numb'
                ]
            }
        },
        {
            name: 'Miner',
            setting: 'Villager',
            time: 3,
            res: 7,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Soldier',
                'Outcast',
                'Servitude',
                'Peasant'
            ],
            skills: {
                points: 2,
                from: [
                    'Mining',
                    'Cave-In-wise'
                ]
            },
            traits: {
                points: 3,
                from: [
                    'Black Lung',
                    'Drunk',
                    'Superstitious'
                ]
            },
            'requires': [
                'Laborer',
                'Conscript',
                'Farmer',
                'Foot Soldier'
            ]
        },
        {
            name: 'Taskmaster',
            setting: 'Villager',
            time: 6,
            res: 15,
            leads: [
                'City',
                'Outcast',
                'Soldier'
            ],
            skills: {
                points: 5,
                from: [
                    'Intimidation',
                    'Brawling',
                    'Sing',
                    'Conspicuous',
                    'Lazy Bastard-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Hard Hearted',
                    'Mean',
                    'Barker',
                    'Booming Voice'
                ]
            },
            'requires': [
                'Village Sergeant',
                'lifepath:Soldier'
            ]
        },
        {
            name: 'Serving Wench',
            setting: 'Villager',
            time: 3,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'City',
                'Outcast',
                'Peasant',
                'Religious',
                'Seafaring',
                'Servitude',
                'Soldier',
                'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Soothing Platitudes',
                    'Ugly Truth',
                    'Customer-wise',
                    'Sleight of Hand'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Extremely Bitter',
                    'Ugly',
                    'Drop Dead Gorgeous',
                    'Buxom'
                ]
            }
        },
        {
            name: 'Hosteller',
            setting: 'Villager',
            time: 6,
            res: 15,
            leads: [
                'City',
                'Peasant'
            ],
            skills: {
                points: 5,
                from: [
                    'Cooking',
                    'Mending',
                    'Accounting',
                    'Soothing Platitudes',
                    'Guest-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Fixed Smile',
                    'Gossip'
                ]
            }
        },
        {
            name: 'Village Guard',
            setting: 'Villager',
            time: 3,
            res: 7,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Soldier',
                'City',
                'Peasant',
                'Servitude'
            ],
            skills: {
                points: 4,
                from: [
                    'Appropriate Weapons',
                    'Intimidation',
                    'Brawling',
                    'Graft-wise',
                    'Village-wise',
                    'Guard-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Thug'
                ]
            }
        },
        {
            name: 'Village Sergeant',
            setting: 'Villager',
            time: 5,
            res: 9,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Soldier',
                'Servitude',
                'Noble'
            ],
            skills: {
                points: 6,
                from: [
                    'Command',
                    'Intimidation',
                    'Field Dressing',
                    'Appropriate Weapons',
                    'Shield Training',
                    'Armor Training',
                    'Bribe-wise',
                    'Wealthy-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Overworked',
                    'Underpaid'
                ]
            },
            'requires': [
                'Village Guard',
                'Squire',
                'Freebooter',
                'Sergeant-At-Arms',
                'Man-At-Arms'
            ]
        },
        {
            name: 'Corrupt Sergeant',
            setting: 'Villager',
            time: 5,
            res: 12,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Soldier',
                'Servitude',
                'Noble'
            ],
            skills: {
                points: 6,
                from: [
                    'Intimidation',
                    'Appropriate Weapons',
                    'Shield Training',
                    'Armor Training',
                    'Bribe-wise',
                    'Wealthy-wise',
                    'Criminal-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Predatory'
                ]
            },
            'requires': [
                'Village Guard',
                'Squire',
                'Freebooter',
                'Sergeant-At-Arms',
                'Man-At-Arms'
            ]
        },
        {
            name: 'Tailor',
            setting: 'Villager',
            time: 5,
            res: 12,
            leads: [
                'City',
                'Peasant'
            ],
            skills: {
                points: 5,
                from: [
                    'Sewing',
                    'Embroidery',
                    'Clothing-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Frippery'
                ]
            }
        },
        {
            name: 'Tax Collector',
            setting: 'Villager',
            time: 5,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [],
            skills: {
                points: 4,
                from: [
                    'Intimidation',
                    'Accounting',
                    'Haggling',
                    'Persuasion'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Hard Hearted',
                    'Manhunter'
                ]
            }
        },
        {
            name: 'Cobbler',
            setting: 'Villager',
            time: 8,
            res: 20,
            leads: [
                'City',
                'Peasant',
                'Soldier'
            ],
            skills: {
                points: 4,
                from: [
                    'Cobbler',
                    'Shoe-wise',
                    'Feet-wise',
                    'Leather-wise',
                    'Nail-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Comfortable Shoes'
                ]
            },
            'requires': [
                'Apprentice'
            ]
        },
        {
            name: 'Fartier',
            setting: 'Villager',
            time: 5,
            res: 12,
            leads: [
                'Peasant',
                'Soldier',
                'City'
            ],
            skills: {
                points: 4,
                from: [
                    'Blacksmith',
                    'Animal Husbandry',
                    'Horse-wise',
                    'Haggling'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'A Bit Deag'
                ]
            },
            'requires': [
                'Apprentice'
            ]
        },
        {
            name: 'Butcher',
            setting: 'Villager',
            time: 6,
            res: 15,
            leads: [
                'City',
                'Peasant',
                'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Butchery',
                    'Cooking',
                    'Guts-wise',
                    'Anatomy'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Prominent Scar',
                    'Thick Skin',
                    'Stinky',
                    'Muttering'
                ]
            }
        },
        {
            name: 'Barber',
            setting: 'Villager',
            time: 7,
            res: 16,
            leads: [
                'City',
                'Peasant',
                'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Bloodletting',
                    'Anatomy',
                    'Apothecary',
                    'Village-wise',
                    'Gossip-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Agreeable',
                    'Seemingly Concerned'
                ]
            }
        },
        {
            name: 'Brewer',
            setting: 'Villager',
            time: 8,
            res: 15,
            leads: [
                'City',
                'Peasant',
                'Noble'
            ],
            skills: {
                points: 4,
                from: [
                    'Brewer',
                    'Miller',
                    'Grain-wise',
                    'Brew-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Reeks of Alcohol',
                    'Ruddy Complexion'
                ]
            }
        },
        {
            name: 'Acolyte',
            setting: 'Villager',
            time: 7,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Servitude',
                'City',
                'Religious'
            ],
            skills: {
                points: 6,
                from: [
                    'Doctrine',
                    'Bureaucracy',
                    'Write',
                    'Read',
                    'Ritual',
                    'Religion'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Tonsured',
                    'Early Riser',
                    'Broken',
                    'Perfect Pitch'
                ]
            }
        },
        {
            name: 'Failed Acolyte',
            setting: 'Villager',
            time: 7,
            res: 10,
            leads: [
                'Outcast',
                'Soldier',
                'Peasant'
            ],
            skills: {
                points: 4,
                from: [
                    'Temple-wise',
                    'Dirty Secrets-wise',
                    'Doctrine',
                    'Religious History'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Bitter'
                ]
            }
        },
        {
            name: 'Village Priest',
            setting: 'Villager',
            time: 8,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'City',
                'Outcast',
                'Peasant',
                'Religious',
                'Seafaring',
                'Servitude',
                'Soldier',
                'Villager'
            ],
            skills: {
                points: 5,
                from: [
                    'Oratory',
                    'Suasion',
                    'Symbology'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Vested',
                    'Devout',
                    'Faithful'
                ]
            }
        },
        {
            name: 'Venal Priest',
            setting: 'Villager',
            time: 9,
            res: 20,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'City',
                'Outcast',
                'Peasant',
                'Religious',
                'Seafaring',
                'Servitude',
                'Soldier',
                'Villager'
            ],
            skills: {
                points: 6,
                from: [
                    'Persuasion',
                    'Soothing Platitudes',
                    'Falsehood'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Venal',
                    'Vested'
                ]
            }
        },
        {
            name: 'Apprentice',
            setting: 'Villager',
            time: 7,
            res: 7,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'City',
                'Peasant',
                'Soldier',
                'Seafaring'
            ],
            skills: {
                points: 6,
                from: [
                    'Mending',
                    'Blacksmith',
                    'Carpentry',
                    'Tanner',
                    'Potter',
                    'Cooper'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Broken In',
                    'Back-Breaking Labor'
                ]
            }
        },
        {
            name: 'Journeyman',
            setting: 'Villager',
            time: 6,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'City',
                'Peasant',
                'Soldier',
                'Seafaring'
            ],
            skills: {
                points: 5,
                from: [
                    'Haggling',
                    'Appraisal',
                    'Write',
                    'Read'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Made Man',
                    'Geometric'
                ]
            },
            'requires': [
                'Apprentice'
            ]
        },
        {
            name: 'Cloth Dryer',
            setting: 'Villager',
            time: 5,
            res: 20,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'City',
                'Peasant'
            ],
            skills: {
                points: 6,
                from: [
                    'Cloth Dyeing',
                    'Dye Manufacture',
                    'Accounting',
                    'Haggling',
                    'Fabric-wise',
                    'Mineral-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Many-Colored Hands'
                ]
            },
            'requires': [
                'Apprentice'
            ]
        },
        {
            name: 'Bowyer',
            setting: 'Villager',
            time: 6,
            res: 15,
            leads: [
                'Soldier',
                'Outcast',
                'Peasant'
            ],
            skills: {
                points: 4,
                from: [
                    'Bowyer',
                    'Fletcher',
                    'Mending',
                    'Bow',
                    'Bow-wise'
                ]
            },
            traits: {
                points: 1
            },
            'requires': [
                'Apprentice',
                'Huntsman',
                'Forester',
                'Archer'
            ]
        },
        {
            name: 'Master Craftsman',
            setting: 'Villager',
            time: 10,
            res: 30,
            stat: {
                bonus: 1,
                attributes: 'M,P'
            },
            leads: [
                'Soldier',
                'Outcast',
                'Peasant'
            ],
            skills: {
                generalPoints: 3,
                points: 6,
                from: [
                    'Craftsman-wise',
                    'Artisan-wise',
                    'Materials-wise',
                    'Tools-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Perfectionist',
                    'Early Riser',
                    'Stubborn',
                    'Healthy'
                ]
            },
            'requires': [
                'Journeyman'
            ]
        },
        {
            name: 'Vintner',
            setting: 'Villager',
            time: 10,
            res: 40,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Noble',
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Vintner',
                    'Wine Tasting',
                    'Estate Management',
                    'Grape-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Patient',
                    'Lugubrious'
                ]
            }
        },
        {
            name: 'Apiarist',
            setting: 'Villager',
            time: 8,
            res: 20,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'City',
                'Peasant',
                'Noble'
            ],
            skills: {
                points: 4,
                from: [
                    'Insect Husbandry',
                    'Carpentry',
                    'Firebuilding',
                    'Honey-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Stung Once (Once)',
                    'Beespeaker'
                ]
            }
        },
        {
            name: 'Mining Engineer',
            setting: 'Villager',
            time: 8,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'City',
                'Noble',
                'Soldier'
            ],
            skills: {
                points: 5,
                from: [
                    'Prospecting',
                    'Engineer',
                    'Ore-wise',
                    'Rock-wise',
                    'Command'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Grim',
                    'Agoraphobic',
                    'Deep Sense'
                ]
            },
            'requires': [
                'Apprentice',
                'Miner',
                'Student',
                'Journeyman'
            ]
        },
        {
            name: 'Town Official',
            setting: 'Villager',
            time: 5,
            res: 25,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'City',
                'Outcast',
                'Soldier'
            ],
            skills: {
                points: 8,
                from: [
                    'Rule of Law',
                    'Persuasion',
                    'Etiquette',
                    'Interrogation',
                    'Falsehood',
                    'Town-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Distracted'
                ]
            },
            'requires': [
                'Accountant',
                'Sea Captain',
                'Shopkeeper',
                'Smuggler',
                'Fence',
                'Vintner',
                'Chamberlain'
            ]
        },
        {
            name: 'Village Wife',
            setting: 'Villager',
            time: 8,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M,P'
            },
            leads: [
                'Religious',
                'City',
                'Servitude'
            ],
            skills: {
                points: 2,
                from: [
                    'Child-Rearing',
                    'Cooking'
                ]
            },
            traits: {
                points: 1
            }
        },
		{
            name: 'City Born',
            isBornLifepath: true,
            setting: 'City Dweller',
            time: 12,
            res: 10,
            leads: [
                'Servitude',
                'Court',
                'Noble',
                'Outcast'
            ],
            skills: {
                generalPoints:  4
            },
            traits: {
                points: 1
            }
        },
		{
            name: 'Runner',
            setting: 'City Dweller',
            time: 3,
            res: 7,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Villager',
                'Soldier'
            ],
            skills: {
                points: 3,
                from: [
                    'Streetwise',
                    'Inconspicuous'
                ]
            },
            traits: {
                points: 1,
            }
        },
		{
            name: 'Urchin',
            setting: 'City Dweller',
            time: 2,
            res: 4,
            leads: [
                'Outcast',
                'Servitude',
                'Village'
            ],
            skills: {
                points: 5,
                from: [
                    'Inconspicuous',
                    'Falsehood',
					'Streetwise',
					'Stealthy'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Sickly',
					'Fleet of Foot',
					'Unheeded'
                ]
            }
        },
		{
            name: 'Beggar',
            setting: 'City Dweller',
            time: 5,
            res: 4,
            stat: {
                bonus: ,
                attributes: ''
            },
            leads: [
                'Outcast',
                'Servitude',
				'Village'
            ],
            skills: {
                points: 6,
                from: [
                    'City-wise',
                    'City Guard-wise',
					'Wealth-wise',
					'Inconspicuous',
					'Persuasion',
					'Falsehood'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Lame',
					'Downtrodden',
					'Hurt',
					'Broken'
                ]
            }
        },
		{
            name: 'Courier',
            setting: 'City Dweller',
            time: 4,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
                'Soldier'
            ],
            skills: {
                points: 4,
                from: [
                    'Riding',
                    'Streetwise',
					'Countryside-wise'
                ]
            },
            traits: {
                points: 1,
            }
        },
		{
            name: 'Laborer',
            setting: 'City Dweller',
            time: 4,
            res: 4,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Soldier',
                'Outcast',
				'Servitude',
				'Peasant'
            ],
            skills: {
                points: 2,
                from: [
                    'Ditch Digging',
                    'Hauling'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Drunk',
					'Mind-Numbing Work'
                ]
            }
        },
		{
            name: 'Pilgrim',
            setting: 'City Dweller',
            time: 2,
            res: 3,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Religious',
                'Servitude',
				'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Religious Diatribe',
                    'City-wise',
					'Shrine-wise',
					'Doctrine'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Tall Tale Teller',
					'Stinky'
                ]
            }
        },
		{
            name: 'Groom',
            setting: 'City Dweller',
            time: 4,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Peasant',
                'Villager',
				'Soldier'
            ],
            skills: {
                points: 4,
                from: [
                    'Road-wise',
                    'Driving',
					'Riding',
					'Animal Husbandry',
					'Mending',
					'City-wise',
					'Traveler-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Peripatetic'
                ]
            }
        },
		{
            name: 'Duelist',
            setting: 'City Dweller',
            time: 4,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Soldier',
                'Outcast',
				'Servitude'
            ],
            skills: {
                points: 7,
                from: [
                    'Sword',
                    'Brawling',
					'Two-Fisted Fighting Training',
					'Streetwise',
					'Haggling',
					'Conspicuous',
					'Trial by Combat-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Mercenary',
					'Cold-Blooded',
					'Fearless'
                ]
            }
            'requires': [
                'Squire',
                'Outcast',
				'Soldier',
				'Village Guard',
				'City Guard'
            ]
        },
		{
            name: 'Coin Clipper',
            setting: 'City Dweller',
            time: 6,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Outcast',
                'Noble Court'
            ],
            skills: {
                points: 5,
                from: [
                    'Streetwise',
                    'Forgery',
					'Falsehood',
					'Intimidation',
					'Counterfeiting',
					'Coin-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Light Sleeper'
                ]
            }
        },
		{
            name: 'Pickpocket',
            setting: 'City Dweller',
            time: 4,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Outcast',
                'Villager',
				'Servitude'
            ],
            skills: {
                points: 5,
                from: [
                    'Inconspicuous',
                    'Streetwise',
					'Sleight of Hand',
					'Crowd-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Plain Face'
                ]
            }
        },
		{
            name: 'Street Thug',
            setting: 'City Dweller',
            time: 3,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Outcast',
                'Servitude',
				'Soldier'
            ],
            skills: {
                points: 5,
                from: [
                    'Brawling',
                    'Intimidation',
					'Streetwise',
					'Darkened Streets-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Cruel',
					'Street Smart'
                ]
            }
        },
		{
            name: 'Criminal',
            setting: 'City Dweller',
            time: 5,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Outcast',
                'Villager',
				'Soldier'
            ],
            skills: {
                points: 6,
                from: [
                    'Inconspicuous',
                    'Streetwise',
					'Intimidation',
					'Knives',
					'Climbing'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Cynical',
					'Poker Face',
					'Rainman',
					'Alert'
                ]
            }
        },
		{
            name: 'Confidence Man',
            setting: 'City Dweller',
            time: 4,
            res: 12,
            leads: [
                'Outcast',
                'Soldier',
				'Villager'
            ],
            skills: {
                points: 5,
                from: [
                    'Falsehood',
                    'Inconspicuous',
					'Disguise',
					'Persuasion',
					'Grift-wise'
                ]
            },
            traits: {
                points: 1
            }
        },
		{
            name: 'City Peddler',
            setting: 'City Dweller',
            time: 5,
            res: 10,
            leads: [
                'Villager',
                'Servitude',
				'Peasant',
				'Outcast'
            ],
            skills: {
                points: 7,
                from: [
                    'Mending',
                    'Sing',
					'Haggling',
					'Chandler',
					'Persuasion'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'The Story'
                ]
            }
        },
		{
            name: 'Sailor',
            setting: 'City Dweller',
            time: 5,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Soldier',
                'Seafaring',
				'Peasant',
				'Servitude'
            ],
            skills: {
                points: 5,
                from: [
                    'Rigging',
                    'Knots',
					'Brawling',
					'Mending',
					'Sing',
					'Gambling'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Superstitious',
					'Sea Legs'
                ]
            }
        },
		{
            name: 'Student',
            setting: 'City Dweller',
            time: 4,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager',
				'City Dweller',
				'Noble Court',
				'Religious',
				'Soldier',
				'Seafaring',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 11,
                from: [
                    'Write',
                    'Read',
					'Philosophy',
					'Rule of Law',
					'History',
					'Symbology',
					'Anatomy',
					'Astrology',
					'Inconspicuous',
					'Streetwise',
					'City-wise'
                ]
            },
            traits: {
                points: 3,
                from: [
                    'Rabble Rouser',
					'Drunk',
					'Geometric'
                ]
            }
        },
		{
            name: 'Ganymede',
            setting: 'City Dweller',
            time: 5,
            res: 15,
            leads: [
                'Noble Court',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Fashion-wise',
                    'Inconspicuous',
					'Conspicuous',
					'Soothing Platitudes'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Catamite',
					'Flamboyant',
					'Comely',
					'Sharp Dresser'
                ]
            }
        },
		{
            name: 'Dilettante',
            setting: 'City Dweller',
            time: 3,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Sorcery-wise',
                    'Obscure History',
					'Falsehood'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Superstitious',
					'Entropic',
					'Cipher'
                ]
            }
        },
		{
            name: 'Neophyte Sorcerer',
            setting: 'City Dweller',
            time: 6,
            res: 12,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Write',
                    'Read',
					'Research',
					'Symbology',
					'Great Masters-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Extremely Respectful of One\'s Betters',
					'Bitter',
					'Gifted'
                ]
            }
        },
		{
            name: 'Temple Acolyte',
            setting: 'City Dweller',
            time: 5,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
				'Religious',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Doctrine',
                    'Bureaucracy',
					'Write',
					'Read',
					'Temple-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Believer',
					'Tonsured',
					'Faithful'
                ]
            }
        },
		{
            name: 'Sculptor',
            setting: 'City Dweller',
            time: 5,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Peasant',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Sculpture',
                    'Mason',
					'Blacksmith',
					'Carpentry',
					'Stone-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Passionate'
                ]
            }
        },
		{
            name: 'Painter',
            setting: 'City Dweller',
            time: 5,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Peasant',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Painting',
                    'Illuminations',
					'Anatomy',
					'Paint-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Odd',
					'Perspective'
					'Greater Muse'
                ]
            }
        },
		{
            name: 'Composer',
            setting: 'City Dweller',
            time: 4,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Music Composition',
                    'Poetry',
					'Sing',
					'Musical Instrument'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Esoteric',
					'Remote'
                ]
            }
        },
		{
            name: 'Dramaturge',
            setting: 'City Dweller',
            time: 4,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Playwright',
                    'Composition',
					'Write',
					'Drama-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Other Life'
                ]
            }
        },
		{
            name: 'Performer',
            setting: 'City Dweller',
            time: 3,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
				'Soldier',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Acting',
                    'Persuasion',
					'Sing',
					'Falsehood',
					'Conspicuous',
					'Sleight of Hand',
					'Musical Instrument'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Colorful'
                ]
            }
        },
		{
            name: 'Tinkerer',
            setting: 'City Dweller',
            time: 7,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Mending',
                    'Scavenging',
					'Junk-wise'
                ]
            },
            traits: {
                points: 2
            }
        },
		{
            name: 'Coal Man',
            setting: 'City Dweller',
            time: 4,
            res: 5,
            leads: [
                'Peasant',
				'Soldier',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Firebuilding',
                    'Streetwise',
					'Charcoal-wise',
					'Haggling'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Hacking Cough'
                ]
            }
        },
		{
            name: 'Seamstress',
            setting: 'City Dweller',
            time: 5,
            res: 10,
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Sewing',
                    'Embroidery',
					'Clothing-wise',
					'Fashion-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Fretful',
					'Sharp Dresser'
                ]
            }
        },
		{
            name: 'Barkeep',
            setting: 'City Dweller',
            time: 5,
            res: 15,
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Drink-wise',
                    'Drunk-wise',
					'Persuasion'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Good Listener'
                ]
            }
        },
		{
            name: 'Shopkeeper',
            setting: 'City Dweller',
            time: 6,
            res: 16,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Merchant-wise',
                    'Haggling',
					'Accounting',
					'Observation'
                ]
            },
        },
		{
            name: 'Baker',
            setting: 'City Dweller',
            time: 6,
            res: 10,
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 5,
                from: [
                    'Baking',
                    'Cooking',
					'Daily Bread-wise',
					'Sweet Tooth-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Floury'
                ]
            }
        },
		{
            name: 'Alewife',
            setting: 'City Dweller',
            time: 6,
            res: 12,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Peasant',
                'Villager',
				'Noble Court'
            ],
            skills: {
                points: 5,
                from: [
                    'Brewer',
                    'Mending',
					'Drinking',
					'Administration',
					'Drunk Husband-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Domineering Presence'
                ]
            }
        },
		{
            name: 'Conner',
            setting: 'City Dweller',
            time: 6,
            res: 12,
            leads: [
                'Peasant',
                'Villager',
				'Noble Court'
            ],
            skills: {
                points: 5,
                from: [
                    'Brewer',
                    'Mending',
					'Drinking',
					'Cooper',
					'Beer-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Red Cheeks',
					'Drunk'
                ]
            }
        },
		{
            name: 'Clerk',
            setting: 'City Dweller',
            time: 4,
            res: 9,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
				'Soldier',
				'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Bureaucracy',
                    'Write',
					'Read',
					'Accounting',
					'Bribe-wise',
					'Paperwork-wise'
                ]
            },
            traits: {
                points: 1
            }
        },
		{
            name: 'Scribe',
            setting: 'City Dweller',
            time: 7,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 5,
                from: [
                    'Write',
                    'Illuminations',
					'Read',
					'Handwriting-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Near-Sighted',
					'Cramped Hands'
                ]
            }
            'requires': [
                'Student',
                'Acolyte',
				'Clerk'
            ]
        },
		{
            name: 'Accountant',
            setting: 'City Dweller',
            time: 10,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Accounting',
                    'Bureaucracy',
					'Write',
					'Read',
					'Ledger-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Bored'
                ]
            }
            'requires': [
                'Clerk',
                'Young Lady',
				'Student'
            ]
        },
		{
            name: 'Scholar',
            setting: 'City Dweller',
            time: 10,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 11,
                from: [
                    'Read',
                    'Research',
					'History',
					'Philosophy',
					'Symbology',
					'Instruction',
					'Illuminations',
					'Foreign Languages',
					'Ancient Languages'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Know It All',
					'Bookworm'
                ]
            }
            'requires': [
                'Scribe',
                'Thinker',
				'Archivist',
				'Interpreter',
				'Custodian',
				'Bishop',
				'Recluse Wizard',
				'Neophyte Sorcerer',
				'Sorcerer',
				'Court Sorcerer',
				'Wizard of War',
				'Weather Witch',
				'Rogue Wizard',
				'Crazy Witch',
				'Mad Summoner',
				'Augur',
				'Arcane Devotee'
            ]
        },
		{
            name: 'Moneylender',
            setting: 'City Dweller',
            time: 8,
            res: 20,
            leads: [
                'Peasant',
                'Villager',
				'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Currency-wise',
                    'Haggling',
					'Accounting'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Penny-wise'
                ]
            }
        },
		{
            name: 'Tax Collector',
            setting: 'City Dweller',
            time: 5,
            res: 18,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager',
				'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Intimidation',
                    'Accounting',
					'Haggling',
					'Interrogation'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Hard Hearted'
                ]
            }
        },
		{
            name: 'Taskmaster',
            setting: 'City Dweller',
            time: 6,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Peasant',
                'Villager',
				'Soldier'
            ],
            skills: {
                points: 5,
                from: [
                    'Intimidation',
                    'Brawling',
					'Sing',
					'Conspicuous',
					'Laborer-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Intimidating',
					'Dreadful'
                ]
            }
        },
		{
            name: 'Mercenary Captain',
            setting: 'City Dweller',
            time: 5,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
				'Soldier',
				'Seafaring',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Pilot',
                    'Fat Merchant-wise',
					'Sword',
					'Climbing',
					'Intimidation'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Predatory'
                ]
            }
            'requires': [
                'Sailor',
                'Pirate',
				'Knight'
            ]
        },
		{
            name: 'City Guard',
            setting: 'City Dweller',
            time: 5,
            res: 9,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
				'Soldier',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Brawling',
                    'Intimidation',
					'Drinking',
					'Appropriate Weapons',
					'Armor Training'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Drunk'
                ]
            }
        },
		{
            name: 'Sergeant-at-Arms',
            setting: 'City Dweller',
            time: 6,
            res: 11,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
				'Soldier',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Intimidation',
                    'Appropriate Weapons',
					'Armor Training',
					'Field Dressing'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Overworked'
                ]
            }
            'requires': [
                'Village Guard',
				'City Guard',
				'Guard Captain',
				'Village Sergeant',
				'Corrupt Sergeant',
				'Marine',
				'First Mate',
				'Foot Soldier',
				'Freebooter',
				'Squire',
				'Man-at-Arms',
				'Cavalryman'
            ]
        },
		{
            name: 'Guard Captain',
            setting: 'City Dweller',
            time: 6,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
				'Noble Court',
				'Soldier',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Etiquette',
                    'Riding',
					'Intimidation',
					'Command',
					'Appropriate Weapons'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Exasperated'
                ]
            }
            'requires': [
                'Knight',
                'Captain',
				'Village Sergeant',
				'Corrupt Sergeant',
				'Sergeant-at-Arms',
				'Sergeant'
            ]
        },
		{
            name: 'Apprentice',
            setting: 'City Dweller',
            time: 7,
            res: 8,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Peasant',
                'Villager',
				'Soldier',
				'Seafaring'
            ],
            skills: {
                points: 6,
                from: [
                    'Mending',
                    'Write',
					'Read',
					'Hauling',
					'Driving',
					'Ditch Digging'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Broken In',
					'Back-Breaking Labor'
                ]
            }
        },
		{
            name: 'Apprentice Artisan',
            setting: 'City Dweller',
            time: 8,
            res: 10,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
                'Villager',
				'Soldier'
            ],
            skills: {
                points: 8,
                from: [
                    'Artisan-wise',
                    'Mason',
					'Blacksmith',
					'Coppersmith',
					'Locksmith',
					'Weaponsmith',
					'Whitesmith'
					'Carpentry',
					'Write',
					'Read',
					'Jargon'
                ]
            },
            traits: {
                points: 1
            }
        },
		{
            name: 'Journeyman',
            setting: 'City Dweller',
            time: 6,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Peasant',
                'Villager',
				'Soldier',
				'Seafaring'
            ],
            skills: {
                points: 7,
                from: [
                    'Haggling',
                    'Appraisal',
					'Blacksmith',
					'Carpentry',
					'Tanner',
					'Potter',
					'Cooper'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Made Man',
					'Geometric'
                ]
            }
            'requires': [
                'Apprentice'
            ]
        },
		{
            name: 'Engraver',
            setting: 'City Dweller',
            time: 7,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'P'
            },
            leads: [
				'Noble Court',
				'Soldier'
            ],
            skills: {
                points: 4,
                from: [
                    'Engraving',
                    'Etching',
					'Jargon'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Gentle but Firm'
                ]
            }
            'requires': [
                'Journeyman'
            ]
        },
		{
            name: 'Saddler',
            setting: 'City Dweller',
            time: 8,
            res: 25,
            stat: {
                bonus: 1,
                attributes: 'M/P'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Soldier'
            ],
            skills: {
                points: 6,
                from: [
                    'Saddlery',
                    'Tanner',
					'Sewing',
					'Embroidery',
					'Mending',
					'Mount-wise'
                ]
            },
            traits: {
                points: 1
            }
            'requires': [
                'Journeyman'
            ]
        },
		{
            name: 'Armorer',
            setting: 'City Dweller',
            time: 10,
            res: 25,
            leads: [
				'Noble Court',
				'Soldier',
				'Outcast'
            ],
            skills: {
                points: 7,
                from: [
                    'Swordsman-wise',
                    'Blacksmith',
					'Tanner',
					'Armorer',
					'Weaponsmith'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Diligent'
                ]
            }
            'requires': [
                'Journeyman'
            ]
        },
		{
            name: 'Plumber',
            setting: 'City Dweller',
            time: 7,
            res: 20,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Plumbing',
                    'Engineer',
					'Coppersmith',
					'Waterworks'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'A Touch of Madness'
                ]
            }
            'requires': [
                'Journeyman'
            ]
        },
		{
            name: 'Locksmith',
            setting: 'City Dweller',
            time: 8,
            res: 13,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 4,
                from: [
                    'Locksmith',
                    'Haggling',
					'Lock-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Steady Hands'
                ]
            }
            'requires': [
                'Journeyman'
            ]
        },
		{
            name: 'Jeweler',
            setting: 'City Dweller',
            time: 9,
            res: 20,
            leads: [
                'Peasant',
                'Villager'
            ],
            skills: {
                points: 5,
                from: [
                    'Jeweler',
                    'Lapidary',
					'Appraisal',
					'Haggling',
					'Falsehood'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Guarded'
                ]
            }
            'requires': [
                'Journeyman'
            ]
        },
		{
            name: 'Gaol Warden',
            setting: 'City Dweller',
            time: 4,
            res: 15,
            leads: [
                'Villager',
				'Noble Court',
				'Soldier',
				'Outcast'
            ],
            skills: {
                points: 4,
                from: [
                    'Administration',
                    'Etiquette',
					'Gaol-wise',
					'Everybody\'s Innocent-wise'
                ]
            },
            traits: {
                points: 1
            }
            'requires': [
                'Born Noble',
                'Merchant',
				'Sergeant',
				'Man-at-Arms',
				'Judge'
            ]
        },
		{
            name: 'Advocate',
            setting: 'City Dweller',
            time: 6,
            res: 25,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Rule of Law',
                    'Bureaucracy',
					'Persuasion',
					'History',
					'Rhetoric'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Shrewd'
                ]
            }
            'requires': [
                'Student',
                'Young Lady'
            ]
        },
		{
            name: 'Doctor',
            setting: 'City Dweller',
            time: 7,
            res: 20,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Anatomy',
                    'Apothecary',
					'Bloodletting',
					'Surgery',
					'Soothing Platitudes'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Frustrated'
                ]
            }
            'requires': [
                'Student',
                'Young Lady'
            ]
        },
		{
            name: 'Physician',
            setting: 'City Dweller',
            time: 5,
            res: 15,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
				'Noble Court',
				'Soldier'
            ],
            skills: {
                points: 6,
                from: [
                    'Herbalism',
                    'Apothecary',
					'Anatomy',
					'Research',
					'Herbalist-wise'
                ]
            },
            traits: {
                points: 1
            }
            'requires': [
                'Midwife',
                'Young Lady',
				'Student'
            ]
        },
		{
            name: 'Hospital Warden',
            setting: 'City Dweller',
            time: 4,
            res: 15,
            leads: [
				'Religious',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 5,
                from: [
                    'Administration',
                    'Beggar-wise',
					'Vagrant-wise',
					'Leper-wise'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Overworked',
					'Generous',
					'Venal',
					'Hypochondriac'
                ]
            }
            'requires': [
                'lifepath:Noble',
                'lifepath:Noble Court',
				'lifepath:Religious'
            ]
        },
		{
            name: 'Banker',
            setting: 'City Dweller',
            time: 10,
            res: 60,
            leads: [
				'Noble',
				'Noble Court'
            ],
            skills: {
                points: 4,
                from: [
                    'Accounting',
                    'Administration',
					'Currency-wise',
                ],
				generalPoints: 2
            },
            traits: {
                points: 1,
                from: [
                    'Intense'
                ]
            }
            'requires': [
                'Merchant',
                'Moneylender',
				'Steward',
				'Accountant',
				'Chamberlain'
            ]
        },
		{
            name: 'Merchant',
            setting: 'City Dweller',
            time: 6,
            res: 30,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager',
				'Noble Court'
            ],
            skills: {
                points: 6,
                from: [
                    'Accounting',
                    'Haggling',
					'Supplier-wise',
					'Lord-wise',
					'Peasant-wise'
                ]
            },
            'requires': [
                'Master Craftsman',
                'Master of Horses',
				'Master of Hounds',
				'Moneylender',
				'Steward',
				'Jeweler',
				'Saddler',
				'Armorer',
				'Cobbler',
				'Courtier',
				'Chamberlain'
            ]
        },
		{
            name: 'Sorcerer',
            setting: 'City Dweller',
            time: 6,
            res: 32,
            stat: {
                bonus: 1,
                attributes: 'M,P'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Sorcery',
                    'Enchanting',
					'Calligraphy'
                ]
            },
            traits: {
                points: 1
            }
            'requires': [
                'Neophyte Sorcerer',
                'Arcane Devotee',
				'Weather Witch'
            ]
        },
		{
            name: 'Temple Priest',
            setting: 'City Dweller',
            time: 5,
            res: 20,
            leads: [
                'Peasant',
                'Villager',
				'Noble Court',
				'Religious',
				'Soldier',
				'Seafaring',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 8,
                from: [
                    'Church Politics-wise',
                    'Doctrine',
					'Oratory',
					'Suasion',
					'Symbology'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Vested',
					'Aloof',
					'Imperious',
					'Strong-Willed'
                ]
            }
            'requires': [
                'Religious Acolyte',
                'Temple Acolyte',
				'Military Order'
            ]
        },
		{
            name: 'Judge',
            setting: 'City Dweller',
            time: 10,
            res: 30,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
				'Villager',
				'Noble Court'
            ],
            skills: {
                points: 5,
                from: [
                    'Rule of Law',
                    'Amercement',
					'Criminal-wise',
					'Interrogation'
                ]
            },
            traits: {
                points: 2,
                from: [
                    'Ornery',
					'Quick-Witted'
                ]
            }
            'requires': [
                'Town Official',
                'Tax Collector',
				'Bailiff',
				'Justiciar'
            ]
        },
		{
            name: 'Municipal Minister',
            setting: 'City Dweller',
            time: 9,
            res: 30,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Persuasion',
                    'Rule of Law',
					'Administration',
					'Oratory',
					'Law-wise',
					'Minister-wise'
                ]
            },
            'requires': [
                'Town Official',
                'Scholar',
				'Priest',
				'Bishop',
				'Captain',
				'Sea Captain',
				'Artisan',
				'Master Craftsman',
				'Knight',
				'Courtier',
				'Master of Horses'
            ]
        },
		{
            name: 'Artisan',
            setting: 'City Dweller',
            time: 10,
            res: 45,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
				'Noble Court',
				'Soldier'
            ],
            skills: {
                points: 9,
                from: [
                    'Jargon',
                    'Mason',
					'Engineer',
					'Architect'
                ]
            },
            traits: {
                points: ,
                from: [
                    'Self-Confident'
                ]
            }
            'requires': [
                'Apprentice Artisan',
                'Engineer',
				'Master Craftsman'
            ]
        },
		{
            name: 'Master Craftsman',
            setting: 'City Dweller',
            time: 10,
            res: 45,
            stat: {
                bonus: 1,
                attributes: 'M,P'
            },
            leads: [
                'Villager',
				'Noble Court',
				'Soldier'
            ],
            skills: {
                points: 6,
                from: [
                    'Craftsman-wise',
                    'Artisan-wise',
					'Materials-wise',
					'Tools-wise'
                ]
				generalPoints: 3
            },
            traits: {
                points: 2,
                from: [
                    'Ambitious',
					'Charismatic'
                ]
            }
            'requires': [
				//TODO: Requires Journeyman AND one of the following:
                'Locksmith',
                'Plumber',
				'Engraver',
				'Saddler',
				'Blacksmith',
				'Armorer',
				'Atilliator',
				'Cobbler',
				'Bowyer',
				'Taskmaster'
            ]
        },
		{
            name: 'Bishop',
            setting: 'City Dweller',
            time: 12,
            res: 60,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
				'Noble Court',
				'Religious'
            ],
            skills: {
                points: 5,
                from: [
                    'Etiquette',
                    'Bureaucracy',
					'Ritual',
					'Church-wise',
					'City-wise'
                ]
            },
            traits: {
                points: 1,
                from: [
                    'Holier'
                ]
            }
            'requires': [
                'Archpriest',
                'Canon',
				'Steward',
				'Chamberlain'
				//TODO: or the 'Your Grace' trait
            ]
        },
		{
            name: 'Magnate',
            setting: 'City Dweller',
            time: 12,
            res: 75,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
                'Peasant',
                'Villager',
				'Noble',
				'Noble Court',
				'Religious',
				'Soldier',
				'Seafaring',
				'Servitude',
				'Outcast'
            ],
            skills: {
                points: 6,
                from: [
                    'Administration',
                    'Merchant-wise',
					'Court-wise',
					'Commodities-wise',
					'Pirates-wise',
					'Bandit-wise'
                ],
				generalPoints: 1
            },
            traits: {
                points: 2,
                from: [
                    'Self-Satisfied',
					'Greedy',
					'Affinity for Business'
                ]
            }
            'requires': [
                'Merchant',
                'Master of Horses'
            ]
        },
		{
            name: 'City Wife',
            setting: 'City Dweller',
            time: 6,
            res: 5,
            stat: {
                bonus: 1,
                attributes: 'M'
            },
            leads: [
				'Religious'
            ],
            skills: {
                points: 2,
                from: [
                    'Child-Rearing',
                    'Husband-wise',
                ]
            },
            traits: {
                points: 1
            }
			//TODO: A player who takes the City Wife lifepath may also choose
			//her husband's lifepath from the City Dweller setting. The City 
			//Wife may choose from her husband's skills -- she gets half of his
			//skill points, rounded down -- and she gets one quarter of her
			//husband's Resources.
        },
    ]