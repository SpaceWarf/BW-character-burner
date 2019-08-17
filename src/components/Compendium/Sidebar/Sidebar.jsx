import React from "react";
import { Menu, Input } from 'semantic-ui-react';
import { getSettings } from '#Utilities/data.js';
import skills from '#Resources/skills/skills.js';
import traits from '#Resources/traits/traits.js';
import SidebarContent from './SidebarContent/SidebarContent.jsx';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="Menu">
            <Menu vertical inverted>
                <Input icon='search' placeholder='Search...' />
                <SidebarContent
                    header="Lifepaths of Men"
                    content={getSettings()}
                    as="sidebar"
                />
                <SidebarContent header="Lifepaths of Elves" />
                <SidebarContent header="Lifepaths of Dwarves" />
                <SidebarContent header="Lifepaths of Orcs" />
                <SidebarContent
                    header="Skills"
                    content={skills}
                />
                <SidebarContent
                    header="Traits"
                    content={traits}
                />
            </Menu>
        </div>
    );
};

export default Sidebar;