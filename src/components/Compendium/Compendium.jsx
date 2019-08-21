import React from "react";
import { Menu } from 'semantic-ui-react';
import CompendiumSidebar from './CompendiumSidebar/CompendiumSidebar.jsx';
import CompendiumContent from './CompendiumContent/CompendiumContent.jsx';
import { getDataSetFromCategory } from '#Utilities/data.js';
import categories from '#Resources/config/categories.js';
import './Compendium.scss';

const Compendium = () => {
    return (
        <div className="Compendium">
            <CompendiumSidebar />
            <div className="Content">
                <Menu vertical>
                    {categories.map(category => {
                        const dataSet = getDataSetFromCategory(category.type, category.subType);
                        return dataSet.length > 0 && <CompendiumContent
                            key={category.name}
                            id={category.subType
                                ? `${category.type}-${category.subType}`
                                : category.type
                            }
                            header={category.name}
                            categoryType={category.type}
                            categorySubType={category.subType}
                            lifepaths={dataSet}
                            nested={category.nested}
                        />
                    })}
                </Menu>
            </div>
        </div>
    );
};

export default Compendium;