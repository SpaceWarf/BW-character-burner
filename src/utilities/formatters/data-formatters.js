export const getFormatedSkills = dataSet => {
    return dataSet.map(skill => {
        const formattedSkill = { ...skill };
        formattedSkill.roots = formattedSkill.roots.split(",");
        formattedSkill.restrictions = formattedSkill.restrictions.split(",");

        if (formattedSkill.tools) {

            const tools = { exists: true };

            switch (formattedSkill.tools) {
                case 'Expendable': tools.expendable = true; break;
                case 'No':
                case 'Yes': break;
                default: tools.type = formattedSkill.tools;
            }
            formattedSkill.tools = tools;
        }

        return formattedSkill;
    });
};

export const getFormatedTraits = dataSet => {
    return dataSet.map(trait => {
        const formattedTrait = { ...trait };
        formattedTrait.type = formattedTrait.type.split(",");
        formattedTrait.restrictions = formattedTrait.restrictions.split(",");
        return formattedTrait;
    });
};

export const getFormattedLifepaths = dataSet => {
    return dataSet.map(lifepath => {
        const formattedLifepath = { ...lifepath };
        formattedLifepath.leads = formattedLifepath.leads.split(",");
        formattedLifepath.skills = {};
        formattedLifepath.traits = {};

        if (formattedLifepath.stat) {
            const stat = {};
            stat.bonus = formattedLifepath.stat[0];
            stat.attributes = formattedLifepath.stat.slice(1);
            if (stat.attributes === "M;P") {
                stat.attributes = "M,P";
            }
            formattedLifepath.stat = stat;
        }

        if (formattedLifepath["General Points"]) {
            formattedLifepath.skills.generalPoints = formattedLifepath["General Points"];
        }
        if (formattedLifepath["Skill Points"]) {
            formattedLifepath.skills.points = formattedLifepath["Skill Points"];
        }
        if (formattedLifepath["Skill List"]) {
            formattedLifepath.skills.from = formattedLifepath["Skill List"].split(",");
        }


        if (formattedLifepath["Trait Points"]) {
            formattedLifepath.traits.points = formattedLifepath["Trait Points"];
        }
        if (formattedLifepath["Trait List"]) {
            formattedLifepath.traits.from = formattedLifepath["Trait List"].split(",");
        }

        delete formattedLifepath["General Points"];
        delete formattedLifepath["Skill Points"];
        delete formattedLifepath["Skill List"];
        delete formattedLifepath["Trait Points"];
        delete formattedLifepath["Trait List"];

        return formattedLifepath;
    });
};