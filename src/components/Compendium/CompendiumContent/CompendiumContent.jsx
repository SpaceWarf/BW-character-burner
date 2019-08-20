import React from "react";
import { Header, Menu } from 'semantic-ui-react';
import Lifepath from './Lifepath/Lifepath.jsx';
import Skill from './Skill/Skill.jsx';
import Trait from './Trait/Trait.jsx';
import { getLifepaths } from '#Utilities/data.js';
import './CompendiumContent.scss';

const getComponentForCategory = (type, data) => {
    switch (type) {
        case 'lifepaths':
            return <Lifepath key={`${type}-${data.name}`} lifepath={data} />
        case 'skills':
            return <Skill key={`${type}-${data.name}`} skill={data} />
        case 'traits':
            return <Trait key={`${type}-${data.name}`} trait={data} />
        default:
            return null;
    }
};

const CompendiumContent = ({ header, categoryType, categorySubType, lifepaths, nested }) => {
    return (
        <Menu.Item>
            <Header as="h1">{header}</Header>
            {lifepaths.map(lifepath => (
                nested ?
                    <CompendiumContent
                        key={lifepath}
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