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
            <Route exact path="/compendium" render={(props) => <Compendium {...props} content="lifepaths-men" />} />
            <Route path="/compendium/lifepaths-men" render={(props) => <Compendium {...props} content="lifepaths-men" />} />
            <Route path="/compendium/lifepaths-elves" render={(props) => <Compendium {...props} content="lifepaths-elves" />} />
            <Route path="/compendium/lifepaths-dwarves" render={(props) => <Compendium {...props} content="lifepaths-dwarves" />} />
            <Route path="/compendium/lifepaths-orcs" render={(props) => <Compendium {...props} content="lifepaths-orcs" />} />
            <Route path="/compendium/skills" render={(props) => <Compendium {...props} content="skills" />} />
            <Route path="/compendium/traits" render={(props) => <Compendium {...props} content="traits" />} />
        </div>
    );
};

export default Main;