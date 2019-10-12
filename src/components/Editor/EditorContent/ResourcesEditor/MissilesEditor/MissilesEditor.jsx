import React from "react";
import { Button } from 'semantic-ui-react';
import { missiles } from '#Resources/Resources/mannish_resources.js';
import './MissilesEditor.scss';

const MissilesEditor = () => {
    return (
        <div className="MissilesEditor">
            <Button>Buy Missiles</Button>
        </div>
    );
};

export default MissilesEditor;