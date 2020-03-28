import { sections } from './editor.config.js';

export default {
    editor: {
        selectedRace: '',
        activeSection: sections[0],
        lockedSections: sections.slice(1)
    },
    lifepaths: {
        count: 2,
        selectedLifepaths: []
    },
    stats: {
        selectedStatBonuses: {
            bonus: [],
            malus: []
        },
        selectedStats: {
            will: 0,
            perception: 0,
            power: 0,
            forte: 0,
            agility: 0,
            speed: 0
        }
    },
    skills: {
        advancedSkills: [],
        openedGeneralSkills: []
    },
    traits: {
        boughtTraits: [],
        addedTraits: []
    },
    attributes: {
        healthAnswers: {},
        steelAnswers: {}
    },
    resources: {
        boughtResources: []
    }
}