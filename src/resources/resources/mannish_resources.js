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
    name: "Arms",
    types: [
        {
            name: "Poor Quality Arms",
            price: 3,
            description: "Base Ob 2 to use."
        },
        {
            name: "Run of the Mill Quality Arms",
            price: 5,
            description: "Base Ob 1 to use."
        },
        {
            name: "Superior Quality Arms",
            price: 20,
            description: "Base Ob 1 to use."
        }
    ],
    description: "Arms covers the necessary hand weaponry to suit a character's idiom. Arms for a knight would consist of a sword, lance and dirk. For a foot soldier, perhaps an axe and dagger. Whatever it is, just take what you need. Players may purchase beaks, spikes and weights for their character's weapons at +1 rp per modification per weapon, +4 rps per modification per weapon of superior quality.",

};

export const missiles = {
    name: "Missiles",
    types: [
        {
            name: "Throwing Weapons",
            price: 3
        },
        {
            name: "Hunting Bow",
            price: 5
        },
        {
            name: "Great Bow",
            price: 10
        },
        {
            name: "Crossbow",
            price: 7
        },
        {
            name: "Heavy Crossbow",
            price: 12
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
    quality: [
        {
            name: "Poor Quality Missiles",
            modifier: 0.5,
            description: "+1 Ob to hit"
        },
        {
            name: "Superior Quality Missiles",
            modifier: 3,
            description: "+1D bonus balance die"
        }
    ],
    description: ""
};

export const armor = {
    name: "Armor",
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
            name: "Light Mai",
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
    quality: [
        {
            name: "Poor Quality Armor",
            modifier: 0.5,
            description: "All 1s count for losing armor dice."
        },
        {
            name: "Superior Quality Armor",
            modifier: 4,
            description: "Only the first 1 counts, which is rerolled; if that die comes up 1 again, an armor die is lost."
        }
    ],
    description: ""
};

export const property = {
    name: "Property",
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
            name: "Vailla, Farm, Knight's fee",
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
            name: "Manor, Estate, Urban Hotel",
            price: 40
        },
        {
            name: "Well Payed Position (like mayor)",
            price: 45
        },
        {
            name: "Successful Small Business, Large Business, Keep",
            price: 60
        },
        {
            name: "Fortress, Moderate Estate",
            price: 75
        },
        {
            name: "Castle with Attendant Town, Large Estate",
            price: 90
        },
        {
            name: "Palace, Government Position",
            price: 105
        },
        {
            name: "Rowboat, Skiff",
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
    description: "Only Noble Born characters or characters with the Minister, Town Official, Merchant, Magnate, Steward, Master of Horse, Master of Hounds, Bailiff, Justicar, Coroner, Constable, Treasurer, Bishop or Abbot lifepaths may spend more than 40 rps on property. Other charcters simply may not own that degree of property."
};