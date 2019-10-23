import React from "react";
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';
import './App.scss';

import skills from "#Resources/skills/skills.js";
import { getFormatedSkills } from "#Utilities/formatters/data-formatters.js";

const App = () => {
    console.log(getFormatedSkills(skills));
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
};

export default App;