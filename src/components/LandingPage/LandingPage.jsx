import React from "react";
import { Header } from 'semantic-ui-react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Header as="h1">Welcome to the Cynder character burner for Burning Wheel</Header>
            <p>Head over to the <a href="/editor">Editor</a> to start working on you character</p>
            <p>or check out the <a href="/compendium">Compendium</a> if you need a quick reference to the rules</p>
        </div>
    );
};

export default LandingPage;