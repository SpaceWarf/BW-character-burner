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
