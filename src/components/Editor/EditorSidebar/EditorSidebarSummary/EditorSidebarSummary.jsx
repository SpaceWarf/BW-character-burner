import React from "react";
import { Menu } from 'semantic-ui-react';
import './EditorSidebarSummary.scss';

const EditorSidebarSummary = () => {
    return (
        <Menu.Item className="EditorSidebarSummary">
            <Menu.Header>
                Character Summary
            </Menu.Header>
            <br />
            lifepath count
            <br />
            age
            <br />
            mental/physical pool
            <br />
            <br />
            skill count
            <br />
            skill points left
            <br />
            <br />
            trait count
            <br />
            trait points left
            <br />
            <br />
            resource points left
        </Menu.Item>
    );
};

export default EditorSidebarSummary;