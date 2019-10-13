import React from "react";
import { Button } from 'semantic-ui-react';
import { property } from '#Resources/Resources/mannish_resources.js';
import './PropertyEditor.scss';

const PropertyEditor = () => {
    return (
        <div className="PropertyEditor">
            <Button basic>Buy Property</Button>
        </div>
    );
};

export default PropertyEditor;