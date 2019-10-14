export const simple = [
    {
        name: "Riding Mount, Pack Animal",
        price: 5,
        description: "A horse, pony, camel and so forth can be bought with this choice.",
        stats: {},
        attributes: {},
        skills: {},
        traits: {},
        stride: 12
    },
    {
        name: "Warhorse (Courser)",
        price: 12,
        description: "A warhorse is trained to carry its master into battle.",
        stats: {},
        attributes: {},
        skills: {},
        traits: {},
        stride: 12
    },
    {
        name: "Clothes",
        price: 1,
        description: "This resource purchase includes all of the clothing a character would need for everyday life in his station. It is not just one outfit. Like the Arms purchase, Clothing allows you to take what you need to trick out your character (short of Finery)."
    },
    {
        name: "Finery",
        price: 5,
        description: "Finery covers specialty clothing and expensive items that one would wear either on special occasions: courtly regalia for nobles, vestments for priests, shining robes for mages, etc. Improper dress imposes obstacle penatlies to Inconspicuous and Etiquette tests."
    },
    {
        name: "Travelling Gear",
        price: 1,
        description: "This is all the necessary odds and ends that are needed for survival on the road - candles, matches, a pocket knife, a rain cloak, a rucksack, rope, a money purse, a warm coat, etc."
    },
    {
        name: "Personal Effects",
        price: 1,
        description: "You may purchase for your character personal effects of sentimental value: a religious trinket, a mirror, a book, a ring, a cane, a locket or any other similar item."
    },
    {
        name: "Shoes",
        price: 1,
        description: "Shoes."
    },
    {
        name: "Cash",
        price: 6,
        description: "A player may start with a pocketful of cash. This grants 1D of cash that can be used as per the Resources rules. Once used, the cash is expended."
    },
    {
        name: "Skill Toolkit",
        price: 8,
        description: "If a skill is listed with \"Tools: Yes\", then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools are at double obstacle penalty."
    },
    {
        name: "Workshop",
        price: 20,
        description: "A workshop is just a big toolkit. It is used for artisan and craftsman skill tests that require an appropriate room/building/tower to house the workshop. Workshops allow for more than one character to help on a skill test. This counts as property when factoring resources."
    },
    {
        name: "Companion Animal",
        price: 3,
        description: "You may wish to take a dog, cat or falcon as an accoutrement to your character. Stats are provided for these beasties in the Monster Burner, but they are really there more for show than for stealing the spotlight in an adventure."
    },
    {
        name: "Heard of Animals",
        price: 20,
        description: "Characters with the Animal Husbandry skill, or Master of Horses, Merchant or Magnate lifepath, may take an appropriate herd of animals. This purchase counts as property when factoring resources."
    },
    {
        name: "Rent",
        price: 5,
        description: "Characters who cannot afford to own property live on leased land or rented houses/appartments. This purchase gives the character a place to live and counts as an Ob 2 Resources maintenance test. Paying rent counts as property when factoring resources."
    }
];

export const arms = {
    qualities: [
        {
            name: "Poor",
            price: 3,
            description: "Base Ob 2 to use",
            modificationCost: 1
        },
        {
            name: "Run of the Mill",
            price: 5,
            description: "Base Ob 1 to use",
            modificationCost: 1
        },
        {
            name: "Superior",
            price: 20,
            description: "Base Ob 1 to use",
            modificationCost: 4
        }
    ],
    description: "Arms covers the necessary hand weaponry to suit a character's idiom. Arms for a knight would consist of a sword, lance and dirk. For a foot soldier, perhaps an axe and dagger. Whatever it is, just take what you need. Players may purchase beaks, spikes and weights for their character's weapons at +1 rp per modification per weapon, +4 rps per modification per weapon of superior quality.",

};

export const missiles = {
    types: [
        {
            name: "Throwing Weapon",
            price: 3
        },
        {
            name: "Hunting Bow",
            price: 5,
            addon: "arrows"
        },
        {
            name: "Great Bow",
            price: 10,
            addon: "arrows"
        },
        {
            name: "Crossbow",
            price: 7,
            addon: "bolts"
        },
        {
            name: "Heavy Crossbow",
            price: 12,
            addon: "bolts"
        },
        {
            name: "Pistol",
            price: 15
        },
        {
            name: "Arquebus",
            price: 20
        },
    ],
    qualities: [
        {
            name: "Poor",
            modifier: 0.5,
            description: "+1 Ob to hit"
        },
        {
            name: "Run of the Mill",
            modifier: 1,
            description: ""
        },
        {
            name: "Superior",
            modifier: 3,
            description: "+1D bonus balance die"
        }
    ],
    arrows: ["Bodking Head", "Leaf Head", "Frog Crotch", "Blunt Head", "Barbed Tip"],
    bolts: ["Mallet Head", "Fisted Bolt", "Spear Tip"],
    description: ""
};

export const armor = {
    types: [
        {
            name: "Gambeson",
            price: 3
        },
        {
            name: "Reinforced Leather",
            price: 6
        },
        {
            name: "Light Mail",
            price: 10
        },
        {
            name: "Heavy Mail",
            price: 15
        },
        {
            name: "Plated Mail",
            price: 20
        },
        {
            name: "Full Plated Mail",
            price: 50
        }
    ],
    qualities: [
        {
            name: "Poor",
            modifier: 0.5,
            description: "All 1s count for losing armor dice."
        },
        {
            name: "Run of the Mill",
            modifier: 1,
            description: "Only the first 1 counts."
        },
        {
            name: "Superior",
            modifier: 4,
            description: "Only the first 1 counts, which is rerolled; if it's 1 again, lose an armor die."
        }
    ],
    parts: [
        {
            name: "head",
            modifier: 0.5
        },
        {
            name: "chest",
            modifier: 0.5
        },
        {
            name: "arms",
            modifier: 1 / 3
        },
        {
            name: "legs",
            modifier: 1 / 3
        }
    ],
    description: ""
};

export const property = {
    types: [
        {
            name: "Leaky Shack",
            price: 1
        },
        {
            name: "Small Cottage",
            price: 3
        },
        {
            name: "House",
            price: 10
        },
        {
            name: "Vailla, Farm or Knight's fee",
            price: 15
        },
        {
            name: "Small Business",
            price: 20
        },
        {
            name: "Moderate Business",
            price: 30
        },
        {
            name: "Manor, Estate or Urban Hotel",
            price: 40
        },
        {
            name: "Well Payed Position (like mayor)",
            price: 45
        },
        {
            name: "Successful Small Business, Large Business or Keep",
            price: 60
        },
        {
            name: "Fortress or Moderate Estate",
            price: 75
        },
        {
            name: "Castle with Attendant Town or Large Estate",
            price: 90
        },
        {
            name: "Palace or Government Position",
            price: 105
        },
        {
            name: "Rowboat or Skiff",
            price: 5
        },
        {
            name: "Longboat",
            price: 10
        },
        {
            name: "Junk",
            price: 15
        },
        {
            name: "Felucca",
            price: 30
        },
        {
            name: "Carrack",
            price: 60
        },
        {
            name: "Caravel",
            price: 75
        },
        {
            name: "Treasure Ship",
            price: 105
        }
    ],
    description: "Only Noble Born characters or characters with the Minister, Town Official, Merchant, Magnate, Steward, Master of Horse, Master of Hounds, Bailiff, Justicar, Coroner, Constable, Treasurer, Bishop or Abbot lifepaths may spend more than 40 rps on property. Other characters simply may not own that degree of property."
};

export const relationship = {
    types: [
        {
            name: "Minor",
            description: "A character who plays a minor role in the setting or situation",
            price: 5
        },
        {
            name: "Important",
            description: "A character who is considered important or significant or important to the game setting",
            price: 10
        },
        {
            name: "Powerful",
            description: "A character who is considered powerful and who plays a large role in the game setting",
            price: 15
        }
    ],
    modifiers: [
        {
            name: "Immediate Family",
            description: "Immediate family relationship",
            modifier: -2
        },
        {
            name: "Other Family",
            description: "Other family relationship (cousins, aunts, etc.)",
            modifier: -1
        },
        {
            name: "Romantic",
            description: "Relationships involving bonds of romantic love",
            modifier: -1
        },
        {
            name: "Forbidden",
            description: "Forbidden relationships",
            modifier: -1
        },
        {
            name: "Hateful",
            description: "Relationships that are hateful, are rivals or are extremely unfriendly to the character",
            modifier: -2
        }
    ],
    description: ""
};
