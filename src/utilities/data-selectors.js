import lifepaths_men from '#Resources/lifepaths/lifepaths_men.js';
import lifepaths_elves from '#Resources/lifepaths/lifepaths_elves.js';
import lifepaths_dwarves from '#Resources/lifepaths/lifepaths_dwarves.js';
import lifepaths_orcs from '#Resources/lifepaths/lifepaths_orcs.js';
import skills from '#Resources/skills/skills.js';
import traits from '#Resources/traits/traits.js';

export const getLifepathDataSet = lifepathCategory => {
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
            return [
                ...lifepaths_men,
                ...lifepaths_elves,
                ...lifepaths_dwarves,
                ...lifepaths_orcs
            ];
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

export const getSkillData = name => {
    return skills.find(skill => skill.name === name);
};

export const getTraitData = name => {
    return traits.find(trait => trait.name === name);
};

export const getHealthScoreBonusFromAnswers = answers => {
    let appliedBonus = 0;
    if (answers.liveInFilth) {
        appliedBonus--;
    }
    if (answers.isFrail) {
        appliedBonus--;
    }
    if (answers.isSeverelyWounded) {
        appliedBonus--;
    }
    if (answers.wasTortured) {
        appliedBonus--;
    }
    if (answers.isNotMan) {
        appliedBonus++;
    }
    if (answers.isAthletic) {
        appliedBonus++;
    }
    if (answers.liveInCleanPlace) {
        appliedBonus++;
    }
    return appliedBonus;
};

export const getSteelScoreBonusFromAnswers = (answers, stats) => {
    let appliedBonus = 0;
    if (answers.wasSoldier) {
        appliedBonus++;
    }
    if (answers.wasWounded) {
        if (answers.wasSoldier) {
            appliedBonus++;
        } else {
            appliedBonus--;
        }
    }
    if (answers.hasMurdered) {
        appliedBonus++;
    }
    if (answers.wasTortured) {
        if (stats.will >= 5) {
            appliedBonus++;
        } else if (stats.will <= 3) {
            appliedBonus--;
        }
    }
    if (answers.wasSheltered) {
        appliedBonus--;
    }
    if (answers.isCompetitive) {
        appliedBonus++;
    }
    if (answers.gaveBirth) {
        appliedBonus++;
    }
    if (answers.isGifted) {
        appliedBonus++;
    }
    if (stats.perception >= 6) {
        appliedBonus++;
    }
    if (stats.will >= 5) {
        appliedBonus++;
    }
    if (stats.will >= 7) {
        appliedBonus++;
    }
    if (stats.forte >= 6) {
        appliedBonus++;
    }
    return appliedBonus;
};