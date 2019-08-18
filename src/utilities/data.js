import lifepaths_men from '#Resources/lifepaths/lifepaths_men.js';
import lifepaths_elves from '#Resources/lifepaths/lifepaths_elves.js';
import lifepaths_dwarves from '#Resources/lifepaths/lifepaths_dwarves.js';
import lifepaths_orcs from '#Resources/lifepaths/lifepaths_orcs.js';

export const getSettings = lifepath => {
    let lifepathSet;
    switch (lifepath) {
        case 'men':
            lifepathSet = lifepaths_men;
            break;
        case 'elves':
            lifepathSet = lifepaths_elves;
            break;
        case 'dwarves':
            lifepathSet = lifepaths_dwarves;
            break;
        case 'orcs':
            lifepathSet = lifepaths_orcs;
            break;
        default:
            lifepathSet = [];
    }
    return [...new Set(
        lifepathSet.map(obj => obj.setting)
    )];
};

export const getLifepaths = setting => {
    return setting ?
        lifepaths_men.filter(lifepath => lifepath.setting === setting)
        : lifepaths_men;
}