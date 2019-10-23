export default
    [
        {
            "name": "Born Clansman",
            "setting": "Clansman",
            "time": 20,
            "res": 10,
            "leads": [
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "generalPoints": 3
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Tender",
            "setting": "Clansman",
            "time": 20,
            "res": 7,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Guilder",
                "Host"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Hills-wise",
                    "Crop-wise",
                    "Farming"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Cursing"
                ]
            }
        },
        {
            "name": "Herder",
            "setting": "Clansman",
            "time": 15,
            "res": 9,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Guilder",
                "Host"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Climbing",
                    "Fence Building",
                    "Flock-wise",
                    "Animal Husbandry"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Affinity for Sheep and Goats",
                    "Booming Voice"
                ]
            }
        },
        {
            "name": "Tinkerer",
            "setting": "Clansman",
            "time": 35,
            "res": 15,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Outcast"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Scavenging",
                    "Mending",
                    "Stuff-wise"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Tinkerer",
                    "Curious"
                ]
            }
        },
        {
            "name": "Delver",
            "setting": "Clansman",
            "time": 20,
            "res": 10,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Host",
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Excavation",
                    "Gas Pocket-wise",
                    "Tunnel-wise"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Deep Sense"
                ]
            }
        },
        {
            "name": "Miller",
            "setting": "Clansman",
            "time": 30,
            "res": 30,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Host"
            ],
            "restrictions": "",
            "skills": {
                "points": 6,
                "from": [
                    "Grain-wise",
                    "Brewer",
                    "Mending",
                    "Miller",
                    "Grain Appraisal"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Brewer",
            "setting": "Clansman",
            "time": 40,
            "res": 40,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Guilder",
                "Host",
                "Outcast"
            ],
            "restrictions": "Miller; Longbeard; Seneschal; Captain; or Drunk",
            "skills": {
                "points": 5,
                "from": [
                    "Beer-wise",
                    "Miller",
                    "Nogger",
                    "Beer Appraisal"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Foreman",
            "setting": "Clansman",
            "time": 35,
            "res": 25,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Guilder",
                "Host",
                "Artificer"
            ],
            "restrictions": "Delver; Artificer's Ardent or Engineer",
            "skills": {
                "points": 5,
                "from": [
                    "Engineering",
                    "Vein-wise",
                    "Ore-wise"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Husband/Wife",
            "setting": "Clansman",
            "time": 70,
            "res": 18,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Host",
                "Outcast"
            ],
            "restrictions": "Husband/Wife cannot be the 2nd lifepath",
            "skills": {
                "points": 5,
                "from": [
                    "Soothing Platitudes",
                    "Haggling",
                    "Family-wise",
                    "Clan-wise"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Pragmatic Outlook",
                    "Dispute-Settler"
                ]
            }
        },
        {
            "name": "Longbeard",
            "setting": "Clansman",
            "time": 77,
            "res": 30,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Host",
                "Outcast"
            ],
            "restrictions": "Foreman; Graybeard; Artificer; Trader; Seneschal; Adventurer; or Husband/Wife",
            "skills": {
                "points": 6,
                "from": [
                    "Host-wise",
                    "Guilder-wise",
                    "Ugly Truth",
                    "Coarse Persuasion"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Oathswearer",
                    "Folksy Wisdom"
                ]
            }
        },
        {
            "name": "Born Guilder",
            "setting": "Guilder",
            "time": 21,
            "res": 5,
            "leads": [
                "Clansman"
            ],
            "restrictions": "",
            "skills": {
                "generalPoints": 4
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Wordbearer",
            "setting": "Guilder",
            "time": 15,
            "res": 10,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Host"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Clan History",
                    "Oratory",
                    "Rumor-wise",
                    "Hold-wise"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Quick-Step",
                    "Iron Memory",
                    "Quirky"
                ]
            }
        },
        {
            "name": "Hauler",
            "setting": "Guilder",
            "time": 10,
            "res": 7,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Host"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Road-wise",
                    "Cargo-wise",
                    "Wagon-wise",
                    "Hauling"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Lifting Heavy Things"
                ]
            }
        },
        {
            "name": "Carter",
            "setting": "Guilder",
            "time": 20,
            "res": 10,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Outcast"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Mule-wise",
                    "Mending",
                    "Driving",
                    "Animal Husbandry"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Iron Nose",
                    "Patient"
                ]
            }
        },
        {
            "name": "Hawker",
            "setting": "Guilder",
            "time": 15,
            "res": 15,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Clansman",
                "Outcast",
                "Host"
            ],
            "restrictions": "",
            "skills": {
                "points": 6,
                "from": [
                    "Spiel-wise",
                    "Haggling",
                    "Streetwise",
                    "Conspicuous",
                    "Inconspicuous"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Apprentice",
            "setting": "Guilder",
            "time": 15,
            "res": 20,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Artificer"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Scutwork-wise",
                    "Carpentry",
                    "Tanner",
                    "Carving"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Seen Not Heard"
                ]
            }
        },
        {
            "name": "Journeyman",
            "setting": "Guilder",
            "time": 25,
            "res": 25,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Clansman",
                "Artificer",
                "Host"
            ],
            "restrictions": "Apprentice or any Ardent lifepath",
            "skills": {
                "points": 7,
                "from": [
                    "Black-Metal Artifice",
                    "Mending",
                    "Cartwright",
                    "Reputation-wise",
                    "Haggling"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Hungry"
                ]
            }
        },
        {
            "name": "Craftsman",
            "setting": "Guilder",
            "time": 45,
            "res": 45,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Clansman",
                "Artificer"
            ],
            "restrictions": "Journeyman; Artificer; Artillerist; or Engineer",
            "skills": {
                "generalPoints": 1,
                "points": 4,
                "from": [
                    "Artificer-wise",
                    "Shipwright",
                    "Appraisal"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Trader",
            "setting": "Guilder",
            "time": 45,
            "res": 70,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Clansman",
                "Outcast"
            ],
            "restrictions": "Hawker; Journeyman; Adventurer; or Husband/Wife",
            "skills": {
                "points": 7,
                "from": [
                    "Persuasion",
                    "Haggling",
                    "Shrewd Appraisal",
                    "Stentorious Debate"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Born Artificer",
            "setting": "Artificer",
            "time": 20,
            "res": 15,
            "leads": [
                "Clansman"
            ],
            "restrictions": "",
            "skills": {
                "generalPoints": 3,
                "points": 2
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Ardent",
            "setting": "Artificer",
            "time": 21,
            "res": 15,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Noble",
                "Host",
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Soot-wise",
                    "Soothing Platitudes",
                    "Firebuilding"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Hard Work",
                    "Humility"
                ]
            }
        },
        {
            "name": "Tyro Artificer",
            "setting": "Artificer",
            "time": 21,
            "res": 20,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Guilder",
                "Host",
                "Outcast"
            ],
            "restrictions": "Artificer's Ardent or Journeyman",
            "skills": {
                "points": 5,
                "from": [
                    "Dwarven Art-wise",
                    "Mending",
                    "Black-Metal Artifice"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Determined"
                ]
            }
        },
        {
            "name": "Artificer Setting",
            "setting": "Artificer",
            "time": 30,
            "res": 35,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Outcast",
                "Host"
            ],
            "restrictions": "Tyro Artificer or Craftsman",
            "skills": {
                "points": 8,
                "from": [
                    "Gem Artifice",
                    "White-Metal Artifice",
                    "Etching",
                    "Stone Artifice"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Stolid"
                ]
            }
        },
        {
            "name": "Mask Bearer",
            "setting": "Artificer",
            "time": 55,
            "res": 50,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Outcast",
                "Host",
                "Noble"
            ],
            "restrictions": "Artificer",
            "skills": {
                "points": 6,
                "from": [
                    "War Art",
                    "Fire and Steel-wise",
                    "Jargon"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Master of Arches",
            "setting": "Artificer",
            "time": 75,
            "res": 55,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Outcast",
                "Host"
            ],
            "restrictions": "Artificer",
            "skills": {
                "points": 8,
                "from": [
                    "Etiquette",
                    "Symbology",
                    "Hallmaster",
                    "Sculpture",
                    "Lithography"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Patient",
                    "Confident"
                ]
            }
        },
        {
            "name": "Master of Forges",
            "setting": "Artificer",
            "time": 75,
            "res": 75,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Outcast",
                "Host"
            ],
            "restrictions": "Mask Bearer",
            "skills": {
                "points": 6,
                "from": [
                    "Maker's Mark-wise",
                    "Command",
                    "Engineering",
                    "Appraisal",
                    "Forge Artifice"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Estimation",
                    "Meticulous"
                ]
            }
        },
        {
            "name": "Master Engraver",
            "setting": "Artificer",
            "time": 100,
            "res": 60,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Outcast",
                "Host"
            ],
            "restrictions": "Master of Arches",
            "skills": {
                "generalPoints": 2,
                "points": 4,
                "from": [
                    "Mountain-wise",
                    "Stone-wise",
                    "Reason of Old Stone"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Born Noble",
            "setting": "Dwarven Noble",
            "time": 21,
            "res": 10,
            "leads": [
                "Guilder",
                "Artificer"
            ],
            "restrictions": "",
            "skills": {
                "generalPoints": 4,
                "points": 2,
                "from": [
                    "Dwarven Rune Script"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Dvergar"
                ]
            }
        },
        {
            "name": "Abecedart",
            "setting": "Dwarven Noble",
            "time": 20,
            "res": 10,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Artificer",
                "Outcast"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Obscure Text-wise",
                    "Etiquette",
                    "Chronology of Kings"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Know It All"
                ]
            }
        },
        {
            "name": "Ardent",
            "setting": "Dwarven Noble",
            "time": 25,
            "res": 15,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Guilder",
                "Artificer",
                "Outcast"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Whispered Secrets-wise",
                    "Accounting",
                    "Soothing Platitudes",
                    "Sing"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Humility in the Face of Your Betters"
                ]
            }
        },
        {
            "name": "Axe Bearer",
            "setting": "Dwarven Noble",
            "time": 20,
            "res": 25,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Host",
                "Outcast"
            ],
            "restrictions": "Noble Ardent or Banner Bearer",
            "skills": {
                "points": 8,
                "from": [
                    "Throwing",
                    "Formation Fighting Training",
                    "Shield Training",
                    "Armor Training",
                    "Axe"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Proud"
                ]
            }
        },
        {
            "name": "Chronicler",
            "setting": "Dwarven Noble",
            "time": 50,
            "res": 20,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Artificer",
                "Host"
            ],
            "restrictions": "Abecedart; Khirurgeon; or Graybeard",
            "skills": {
                "points": 9,
                "from": [
                    "Oath-wise",
                    "Symbology",
                    "Etiquette",
                    "Cartography",
                    "Poetry",
                    "Dwarf-wise",
                    "Clan-wise",
                    "Ancient History",
                    "Illuminations"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Seneschal",
            "setting": "Dwarven Noble",
            "time": 55,
            "res": 50,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Host"
            ],
            "restrictions": "Trader; Longbeard; Quartermaster; Chronicler; Khirurgeon; or Graybeard",
            "skills": {
                "points": 5,
                "from": [
                    "Hold-wise",
                    "Estate Management",
                    "Command",
                    "Etiquette"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Practical"
                ]
            }
        },
        {
            "name": "Treasurer",
            "setting": "Dwarven Noble",
            "time": 75,
            "res": 100,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Outcast",
                "Host"
            ],
            "restrictions": "Seneschal; Artificer; or Warden",
            "skills": {
                "points": 6,
                "from": [
                    "Administration",
                    "Treasure-wise",
                    "Accounting",
                    "Etiquette"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Rainman",
                    "Dangerous Obsession"
                ]
            }
        },
        {
            "name": "High Captain",
            "setting": "Dwarven Noble",
            "time": 75,
            "res": 75,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Outcast",
                "Host"
            ],
            "restrictions": "Noble Axe Bearer and either Captain or Warden",
            "skills": {
                "generalPoints": 2,
                "points": 5,
                "from": [
                    "Conspicuous",
                    "Strategy",
                    "Command"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Muttering",
                    "Stentorious Voice"
                ]
            }
        },
        {
            "name": "Prince",
            "setting": "Dwarven Noble",
            "time": 100,
            "res": 200,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Outcast",
                "Host"
            ],
            "restrictions": "Born Noble and Noble Axe Bearer",
            "skills": {
                "points": 8,
                "from": [
                    "Burden of the Crown-wise",
                    "Command",
                    "Oratory",
                    "Intimidation",
                    "Etiquette",
                    "Conspicuous"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Baleful Stare",
                    "Galvanizing Presence",
                    "Grumbling"
                ]
            }
        },
        {
            "name": "Foot Soldier",
            "setting": "Dwarven Host",
            "time": 10,
            "res": 6,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Outcast",
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "points": 6,
                "from": [
                    "Cadence-wise",
                    "Shield Training",
                    "Armor Training",
                    "Hammer",
                    "Brawling",
                    "Foraging"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Salt of the Earth"
                ]
            }
        },
        {
            "name": "Arbalester",
            "setting": "Dwarven Host",
            "time": 12,
            "res": 12,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Clansman",
                "Outcast",
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Windage-wise",
                    "Artillery Hand",
                    "Fletcher",
                    "Mending",
                    "Crossbow"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Squinty"
                ]
            }
        },
        {
            "name": "Banner Bearer",
            "setting": "Dwarven Host",
            "time": 7,
            "res": 10,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Outcast",
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Intimidation",
                    "Banner-wise",
                    "Conspicuous"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Obsessive",
                    "Resigned to Death"
                ]
            }
        },
        {
            "name": "Horncaller",
            "setting": "Dwarven Host",
            "time": 7,
            "res": 9,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Clansman",
                "Outcast",
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Suicidal Bravery-wise",
                    "Cadence-wise",
                    "Conspicuous",
                    "Links"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Axe Bearer",
            "setting": "Dwarven Host",
            "time": 15,
            "res": 15,
            "stat": {
                "bonus": "1",
                "attributes": "P"
            },
            "leads": [
                "Guilder",
                "Outcast",
                "Noble"
            ],
            "restrictions": "Noble Ardent; Graybeard; or Banner Bearer",
            "skills": {
                "points": 9,
                "from": [
                    "Throwing",
                    "Formation Fighting Training",
                    "Shield Training",
                    "Armor Training",
                    "Intimidation",
                    "Conspicuous",
                    "Axe",
                    "Foraging"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Swaggering"
                ]
            }
        },
        {
            "name": "Graybeard",
            "setting": "Dwarven Host",
            "time": 20,
            "res": 20,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Guilder",
                "Outcast",
                "Noble"
            ],
            "restrictions": "Axe Bearer; Longbeard; or three Host lifepaths",
            "skills": {
                "points": 5,
                "from": [
                    "Campaign-wise",
                    "Command",
                    "Field Dressing",
                    "Intimidation"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Oddly Likeable",
                    "Chuffing"
                ]
            }
        },
        {
            "name": "Khirurgeon",
            "setting": "Dwarven Host",
            "time": 25,
            "res": 25,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Outcast",
                "Noble"
            ],
            "restrictions": "Abecedart; Seneschal; or Graybeard",
            "skills": {
                "points": 6,
                "from": [
                    "Infection-wise",
                    "Cooking",
                    "Soothing Platitudes",
                    "Khirurgy"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Quartermaster",
            "setting": "Dwarven Host",
            "time": 50,
            "res": 35,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Outcast",
                "Noble"
            ],
            "restrictions": "Seneschal; Treasurer. Trader; or Graybeard",
            "skills": {
                "points": 7,
                "from": [
                    "Host-wise",
                    "Supply-wise",
                    "Strategy",
                    "Accounting",
                    "Logistics"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "No Nonsense"
                ]
            }
        },
        {
            "name": "Captain",
            "setting": "Dwarven Host",
            "time": 55,
            "res": 40,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Guilder",
                "Outcast",
                "Noble"
            ],
            "restrictions": "Prince or Graybeard",
            "skills": {
                "points": 7,
                "from": [
                    "Graybeard-wise",
                    "Cartography",
                    "Strategy",
                    "Formation Fighting Training",
                    "Conspicuous",
                    "Command"
                ]
            },
            "traits": {
                "points": 1
            }
        },
        {
            "name": "Artillerist",
            "setting": "Dwarven Host",
            "time": 55,
            "res": 45,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Artificer",
                "Outcast",
                "Noble"
            ],
            "restrictions": "Mask Bearer; Craftsman; Foreman; or three Arbalester lifepaths",
            "skills": {
                "points": 5,
                "from": [
                    "Structural Weakness-wise",
                    "Carpentry",
                    "Mending",
                    "Artillerist"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Complaining"
                ]
            }
        },
        {
            "name": "Engineer",
            "setting": "Dwarven Host",
            "time": 60,
            "res": 50,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Artificer",
                "Noble"
            ],
            "restrictions": "Artillerist or Mask Bearer",
            "skills": {
                "points": 6,
                "from": [
                    "Leverage-wise",
                    "Scavenging",
                    "War Engineer",
                    "Jargon"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Estimation"
                ]
            }
        },
        {
            "name": "Warden",
            "setting": "Dwarven Host",
            "time": 75,
            "res": 65,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Outcast",
                "Noble"
            ],
            "restrictions": "Prince; Captain; or High Captain",
            "skills": {
                "points": 7,
                "from": [
                    "Champion-wise",
                    "Etiquette",
                    "Strategy",
                    "Observation",
                    "Oratory",
                    "Conspicuous"
                ]
            },
            "traits": {
                "points": 1,
                "from": [
                    "Hard as Nails",
                    "Chuntering"
                ]
            }
        },
        {
            "name": "Adventurer",
            "setting": "Dwarven Outcast",
            "time": 5,
            "res": 10,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Clansman",
                "Guilder"
            ],
            "restrictions": "",
            "skills": {
                "points": 12,
                "from": [
                    "Lost Treasures-wise",
                    "Symbology",
                    "Obscure History",
                    "Appraisal",
                    "Lock Pick",
                    "Crossbow",
                    "Sword",
                    "Knives",
                    "Brawling",
                    "Firebuilding",
                    "Haggling",
                    "Herbalism",
                    "Knots",
                    "Climbing",
                    "Survival"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Boaster",
                    "Adventurer"
                ]
            }
        },
        {
            "name": "Gambler",
            "setting": "Dwarven Outcast",
            "time": 7,
            "res": 15,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Clansman"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Cheat-wise",
                    "Sleight of Hand",
                    "Observation",
                    "Games of Chance"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Stone-Faced"
                ]
            }
        },
        {
            "name": "Oathbreaker",
            "setting": "Dwarven Outcast",
            "time": 20,
            "res": 5,
            "stat": {
                "bonus": "1",
                "attributes": "M"
            },
            "leads": [
                "Clansman"
            ],
            "restrictions": "",
            "skills": {
                "points": 4,
                "from": [
                    "Oath-wise",
                    "Falsehood",
                    "Ugly Truth"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Bitter",
                    "Oathbreaker"
                ]
            }
        },
        {
            "name": "Drunk",
            "setting": "Dwarven Outcast",
            "time": 10,
            "res": 5,
            "leads": [
                "Clansman"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Tavern Tales-wise",
                    "Drunking",
                    "Stentorious Singing"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Drunk",
                    "Despondent"
                ]
            }
        },
        {
            "name": "Coward",
            "setting": "Dwarven Outcast",
            "time": 15,
            "res": 5,
            "stat": {
                "bonus": "1",
                "attributes": "M/P"
            },
            "leads": [
                "Clansman",
                "Guilder",
                "Artificer",
                "Dwarven Noble",
                "Dwarven Outcast",
                "Host"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Hypocritical Bastards-wise",
                    "Oratory",
                    "Ugly Truth",
                    "Inconspicuous"
                ]
            },
            "traits": {
                "points": 3,
                "from": [
                    "Branded a Coward"
                ]
            }
        },
        {
            "name": "Rune Caster",
            "setting": "Dwarven Outcast",
            "time": 20,
            "res": 6,
            "stat": {
                "bonus": "1",
                "attributes": "M,P"
            },
            "leads": [
                "Clansman",
                "Guilder",
                "Artificer",
                "Dwarven Noble"
            ],
            "restrictions": "",
            "skills": {
                "points": 5,
                "from": [
                    "Bad End-wise",
                    "Scavenging",
                    "Foraging",
                    "Rune Casting"
                ]
            },
            "traits": {
                "points": 2,
                "from": [
                    "Slave to Fate"
                ]
            }
        }
    ]