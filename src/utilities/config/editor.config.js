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
