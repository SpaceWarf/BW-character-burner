import React from "react";
import { Menu } from 'semantic-ui-react';
import CompendiumSidebar from './CompendiumSidebar/CompendiumSidebar.jsx';
import CompendiumContent from './CompendiumContent/CompendiumContent.jsx';
import { getDataSetForSection } from '#Utilities/data-selectors.js';
import { sections } from '#Utilities/config/compendium.config.js';
import './Compendium.scss';

const Compendium = ({ content }) => {

    const getCompendiumComponent = () => {
        const section = sections[content];
        const dataSet = getDataSetForSection(section.type, section.subType);
        return dataSet.length > 0 && <CompendiumContent
            key={section.name}
            id={section.subType
                ? `${section.type}-${section.subType}`
                : section.type
            }
            header={section.name}
            type={section.type}
            data={dataSet}
            nested={section.type === "lifepaths"}
        />;
    };

    return (
        <div className="Compendium">
            <CompendiumSidebar content={content} />
            <div className="CompendiumContent">
                <Menu vertical>
                    {getCompendiumComponent()}
                </Menu>
            </div>
        </div>
    );
};

export default Compendium;