import React from "react";
import { Menu } from 'semantic-ui-react';
import './EditorSidebarSummary.scss';

const EditorSidebarSummary = () => {
    return (
        <Menu.Item className="EditorSidebarSummary">
            <Menu.Header>
                Character Summary
            </Menu.Header>
        </Menu.Item>
    );
};

export default EditorSidebarSummary;