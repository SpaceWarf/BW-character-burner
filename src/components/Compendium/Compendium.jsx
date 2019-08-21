import React from "react";
import { Menu } from 'semantic-ui-react';
import CompendiumSidebar from './CompendiumSidebar/CompendiumSidebar.jsx';
import CompendiumContent from './CompendiumContent/CompendiumContent.jsx';
import { getDataSetFromCategory } from '#Utilities/data.js';
import sections from '#Resources/config/compendium-sections.config.js';
import './Compendium.scss';

const Compendium = () => {
    return (
        <div className="Compendium">
            <CompendiumSidebar />
            <div className="Content">
                <Menu vertical>
                    {sections.map(section => {
                        const dataSet = getDataSetFromCategory(section.type, section.subType);
                        return dataSet.length > 0 && <CompendiumContent
                            key={section.name}
                            id={section.subType
                                ? `${section.type}-${section.subType}`
                                : section.type
                            }
                            header={section.name}
                            categoryType={section.type}
                            categorySubType={section.subType}
                            lifepaths={dataSet}
                            nested={section.nested}
                        />
                    })}
                </Menu>
            </div>
        </div>
    );
};

export default Compendium;