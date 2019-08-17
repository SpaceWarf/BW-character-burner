import React from "react";
import { Route } from 'react-router-dom';
import LandingPage from '#Components/LandingPage/LandingPage.jsx';
import Editor from '#Components/Editor/Editor.jsx';
import Compendium from '#Components/Compendium/Compendium.jsx';
import './Main.scss';

const Main = () => {
    return (
        <div className="Main">
            <Route exact path="/" component={LandingPage} />
            <Route path="/editor" component={Editor} />
            <Route path="/compendium" component={Compendium} />
        </div>
    );
};

export default Main;