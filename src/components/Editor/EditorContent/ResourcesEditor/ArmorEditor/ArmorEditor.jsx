import React from "react";
import { Button } from 'semantic-ui-react';
import { armor } from '#Resources/Resources/mannish_resources.js';
import './ArmorEditor.scss';

const ArmorEditor = () => {
    return (
        <div className="ArmorEditor">
            <Button basic>Buy Armor</Button>
        </div>
    );
};

export default ArmorEditor;