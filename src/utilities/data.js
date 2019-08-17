import lifepaths_men from '#Resources/lifepaths/lifepaths_men.js';

export const getSettings = () => {
    return [...new Set(
        lifepaths_men.map(lifepath => lifepath.setting)
    )];
};

export const getLifepaths = setting => {
    return setting ?
        lifepaths_men.filter(lifepath => lifepath.setting === setting)
        : lifepaths_men;
}