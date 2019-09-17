import React from "react";
import { Header } from 'semantic-ui-react';
import TraitsTable from './TraitsTable/TraitsTable.jsx';
import './TraitsEditor.scss';

const TraitsEditor = () => {
    return (
        <div className="TraitsEditor">
            <Header className="section" as="h1">Select your character's traits</Header>
            <div className="content">
                <TraitsTable />
            </div>
        </div>
    );
};

export default TraitsEditor;