import React from "react";
import { Menu } from 'semantic-ui-react';
import CompendiumSidebar from './CompendiumSidebar/CompendiumSidebar.jsx';
import CompendiumContent from './CompendiumContent/CompendiumContent.jsx';
import { getDataSetForSection } from '#Utilities/data-selectors.js';
import { sections } from '#Utilities/config/compendium.config.js';
import './Compendium.scss';

const Compendium = () => {
    return (
        <div className="Compendium">
            <CompendiumSidebar />
            <div className="CompendiumContent">
                <Menu vertical>
                    {sections.map(section => {
                        const dataSet = getDataSetForSection(section.type, section.subType);
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