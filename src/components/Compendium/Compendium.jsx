import React from "react";
import { Menu } from 'semantic-ui-react';
import Sidebar from './Sidebar/Sidebar.jsx';
import CompendiumContent from './CompendiumContent/CompendiumContent.jsx';
import { getDataSetFromCategory } from '#Utilities/data.js';
import categories from '#Resources/config/categories.js';
import './Compendium.scss';

const Compendium = () => {
    return (
        <div className="Compendium">
            <Sidebar />
            <div className="Content">
                <Menu vertical>
                    {categories.map(category => (
                        <CompendiumContent
                            key={category.name}
                            header={category.name}
                            categoryType={category.type}
                            categorySubType={category.subType}
                            lifepaths={
                                getDataSetFromCategory(category.type, category.subType)
                            }
                            nested={category.nested}
                        />
                    ))}
                </Menu>
            </div>
        </div>
    );
};

export default Compendium;