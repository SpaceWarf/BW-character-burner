import lifepaths_men from '#Resources/lifepaths/lifepaths_men.js';
import lifepaths_elves from '#Resources/lifepaths/lifepaths_elves.js';
import lifepaths_dwarves from '#Resources/lifepaths/lifepaths_dwarves.js';
import lifepaths_orcs from '#Resources/lifepaths/lifepaths_orcs.js';
import skills from '#Resources/skills/skills.js';
import traits from '#Resources/traits/traits.js';

const getLifepathDataSet = lifepath => {
    switch (lifepath) {
        case 'men':
            return lifepaths_men;
        case 'elves':
            return lifepaths_elves;
        case 'dwarves':
            return lifepaths_dwarves;
        case 'orcs':
            return lifepaths_orcs;
        default:
            return [];
    }
};

export const getDataSetFromCategory = (category, subCategory) => {
    switch (category) {
        case 'lifepaths':
            return getLifepathSettings(subCategory);
        case 'skills':
            return skills;
        case 'traits':
            return traits;
        default:
            return [];
    }
};

export const getLifepathSettings = lifepath => {
    return [...new Set(
        getLifepathDataSet(lifepath)
            .map(obj => obj.setting)
    )];
};

export const getLifepaths = (lifepath, setting) => {
    const lifepathDataSet = getLifepathDataSet(lifepath);
    return setting ?
        lifepathDataSet.filter(lifepath => lifepath.setting === setting)
        : lifepathDataSet;
};