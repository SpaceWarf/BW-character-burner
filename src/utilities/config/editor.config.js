import humanIcon from '#Assets/images/human.png';
import elfIcon from '#Assets/images/elf.png';
import dwarfIcon from '#Assets/images/dwarf.png';
import orcIcon from '#Assets/images/orc.png';

export const sections = [
    'Lifepaths',
    'Stats',
    'Skills',
    'Traits',
    'Attributes',
    'Resources',
    'Finalize'
];

export const races = [
    {
        name: "men",
        icon: humanIcon
    },
    {
        name: "elves",
        icon: elfIcon,
        disabled: true
    },
    {
        name: "dwarves",
        icon: dwarfIcon,
        disabled: true
    },
    {
        name: "orcs",
        icon: orcIcon,
        disabled: true
    }
];

export const lifepathCounts = [
    {
        key: "2",
        text: "2",
        value: 2,
        hint: "Novice character. Two lifepath characters are challenging to play and not recommended for first time players."
    },
    {
        key: "3",
        text: "3",
        value: 3,
        hint: "Competent and well rounded character, but not an expert. Good for first time players."
    },
    {
        key: "4",
        text: "4",
        value: 4,
        hint: "Competent and well rounded character, but not an expert. Good for first time players."
    },
    {
        key: "5",
        text: "5",
        value: 5,
        hint: "Veteran character with a couple of expert skills."
    },
    {
        key: "6",
        text: "6",
        value: 6,
        hint: "Potent and experienced character that has plenty of points to play with."
    },
    {
        key: "7",
        text: "7",
        value: 7,
        hint: "Potent and experienced character that has plenty of points to play with."
    },
    {
        key: "8",
        text: "8",
        value: 8,
        hint: "Potent and experienced character that has plenty of points to play with."
    }
];

export const statPools = [
    {
        minAge: 1,
        maxAge: 10,
        mental: 5,
        physical: 10
    },
    {
        minAge: 11,
        maxAge: 14,
        mental: 6,
        physical: 13
    },
    {
        minAge: 15,
        maxAge: 16,
        mental: 6,
        physical: 16
    },
    {
        minAge: 17,
        maxAge: 25,
        mental: 7,
        physical: 16
    },
    {
        minAge: 26,
        maxAge: 29,
        mental: 7,
        physical: 15
    },
    {
        minAge: 30,
        maxAge: 35,
        mental: 7,
        physical: 14
    },
    {
        minAge: 36,
        maxAge: 40,
        mental: 7,
        physical: 13
    },
    {
        minAge: 41,
        maxAge: 55,
        mental: 7,
        physical: 12
    },
    {
        minAge: 56,
        maxAge: 65,
        mental: 7,
        physical: 11
    },
    {
        minAge: 66,
        maxAge: 79,
        mental: 7,
        physical: 10
    },
    {
        minAge: 80,
        maxAge: 100,
        mental: 6,
        physical: 9
    },
];

export const attributeDescriptions = {
    health: "Health is the average of Will and Forte plus or minues the answers to the health questions.",
    steel: "Steel starts at 3 and the final result is determined by the answers to the Steel questions.",
    reflexes: "Reflexes is the average of Perception, Agility and Speed (rounded down).",
    mortalWound: "Mortal Wound is the average of Power and Forte (rounded down) plus a base of 6."
};
