import lifepaths_men from '#Resources/lifepaths/lifepaths_men.js';
import lifepaths_elves from '#Resources/lifepaths/lifepaths_elves.js';
import lifepaths_dwarves from '#Resources/lifepaths/lifepaths_dwarves.js';
import lifepaths_orcs from '#Resources/lifepaths/lifepaths_orcs.js';
import skills from '#Resources/skills/skills.js';
import traits from '#Resources/traits/traits.js';

const getLifepathDataSet = lifepathCategory => {
    switch (lifepathCategory) {
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

export const getDataSetForSection = (section, subSection) => {
    switch (section) {
        case 'lifepaths':
            return getLifepathSettings(subSection);
        case 'skills':
            return skills;
        case 'traits':
            return traits;
        default:
            return [];
    }
};

export const getLifepathSettings = lifepathCategory => {
    return [...new Set(
        getLifepathDataSet(lifepathCategory)
            .map(obj => obj.setting)
    )];
};

export const getLifepaths = (lifepathCategory, setting) => {
    const lifepathDataSet = getLifepathDataSet(lifepathCategory);
    return setting ?
        lifepathDataSet.filter(lifepath => lifepath.setting === setting)
        : lifepathDataSet;
};