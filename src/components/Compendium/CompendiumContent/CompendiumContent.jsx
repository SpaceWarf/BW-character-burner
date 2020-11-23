import React from "react";
import { Header, Menu } from 'semantic-ui-react';
import Lifepath from 'Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from 'Components/Common/Card/Skill/Skill.jsx';
import Trait from 'Components/Common/Card/Trait/Trait.jsx';
import { getLifepaths } from 'Utilities/data-selectors.js';
import './CompendiumContent.scss';

const getComponentForCategory = (type, data, index) => {
    switch (type) {
        case 'lifepaths':
            return <Lifepath
                key={`${type}-${data.name}-${index}`}
                lifepath={data}
                linkable
                centered
            />
        case 'skills':
            return <Skill
                key={`${type}-${data.name}-${index}`}
                skill={data}
                linkable
                centered
            />
        case 'traits':
            return <Trait
                key={`${type}-${data.name}-${index}`}
                trait={data}
                linkable
                centered
            />
        default:
            return null;
    }
};

const CompendiumContent = ({ id, header, type, data, nested }) => {
    return (
        <Menu.Item id={id}>
            <Header className="section" as="h1">{header}</Header>
            {data.map((item, index) => (
                nested
                    ? <CompendiumContent
                        key={item}
                        id={item.name}
                        header={item}
                        type={type}
                        data={
                            getLifepaths(undefined, item)
                        }
                    />
                    : getComponentForCategory(type, item, index)
            ))}
        </Menu.Item>
    );
};

export default CompendiumContent;