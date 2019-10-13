import React from "react";
import { Button } from 'semantic-ui-react';
import { arms } from '#Resources/Resources/mannish_resources.js';
import './ArmsEditor.scss';

const ArmsEditor = () => {
    return (
        <div className="ArmsEditor">
            <Button basic>Buy Arms</Button>
        </div>
    );
};

export default ArmsEditor;