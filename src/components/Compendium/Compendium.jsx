import React from "react";
import { Header, Image } from 'semantic-ui-react';
import Sidebar from './Sidebar/Sidebar.jsx';
import './Compendium.scss';

const Compendium = () => {
    return (
        <div className="Compendium">
            <Sidebar />
            <div className="Content">
                <Header as='h3'>Compendium</Header>
            </div>
        </div>
    );
};

export default Compendium;