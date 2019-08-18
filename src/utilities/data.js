import lifepaths_men from '#Resources/lifepaths/lifepaths_men.js';
import lifepaths_elves from '#Resources/lifepaths/lifepaths_elves.js';
import lifepaths_dwarves from '#Resources/lifepaths/lifepaths_dwarves.js';
import lifepaths_orcs from '#Resources/lifepaths/lifepaths_orcs.js';

const getLifepathDataSet = (lifepath) => {
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

export const getLifepathSettings = lifepath => {
    return [...new Set(
        getLifepathDataSet(lifepath)
            .map(obj => obj.setting)
    )];
};

export const getLifepaths = (lifepath, setting) => {
    console.log(lifepath, setting);
    const lifepathDataSet = getLifepathDataSet(lifepath);
    return setting ?
        lifepathDataSet.filter(lifepath => lifepath.setting === setting)
        : lifepathDataSet;
}