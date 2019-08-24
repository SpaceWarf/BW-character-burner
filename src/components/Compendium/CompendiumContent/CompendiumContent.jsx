import React from "react";
import { Header, Menu } from 'semantic-ui-react';
import Lifepath from '#Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from '#Components/Common/Card/Skill/Skill.jsx';
import Trait from '#Components/Common/Card/Trait/Trait.jsx';
import { getLifepaths } from '#Utilities/selectors.js';
import './CompendiumContent.scss';

const getComponentForCategory = (type, data) => {
    switch (type) {
        case 'lifepaths':
            return <Lifepath key={`${type}-${data.name}`} lifepath={data} linkable />
        case 'skills':
            return <Skill key={`${type}-${data.name}`} skill={data} linkable />
        case 'traits':
            return <Trait key={`${type}-${data.name}`} trait={data} linkable />
        default:
            return null;
    }
};

const CompendiumContent = ({ id, header, categoryType, categorySubType, lifepaths, nested }) => {
    return (
        <Menu.Item id={id}>
            <Header className="section" as="h1">{header}</Header>
            {lifepaths.map(lifepath => (
                nested ?
                    <CompendiumContent
                        key={lifepath}
                        id={lifepath.name}
                        header={lifepath}
                        categoryType={categoryType}
                        categorySubType={categorySubType}
                        lifepaths={
                            getLifepaths(categorySubType, lifepath)
                        }
                    />
                    : getComponentForCategory(categoryType, lifepath)
            ))}
        </Menu.Item>
    );
};

export default CompendiumContent;