import React from "react";
import { Menu } from 'semantic-ui-react';
import EditorSidebarSummary from './EditorSidebarSummary/EditorSidebarSummary.jsx';
import sections from '#Resources/config/editor-sections.config.js';
import './EditorSidebar.scss';

const EditorSidebar = () => {
    return (
        <div className="EditorSidebar">
            <Menu vertical inverted>
                <div className="content">
                    {sections.map((section, index) => (
                        <Menu.Item
                            key={section.name}
                            onClick={e => window.location.href = `#${section.link}`}
                        >
                            {index + 1}. {section.name}
                        </Menu.Item>
                    ))}
                </div>
                <EditorSidebarSummary />
            </Menu>
        </div>
    );
};

export default EditorSidebar;