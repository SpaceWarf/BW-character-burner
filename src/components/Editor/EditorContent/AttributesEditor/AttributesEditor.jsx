import React from "react";
import { Header, Button } from 'semantic-ui-react';
import Attribute from './Attribute/Attribute.jsx';
import { attributeDescriptions } from '#Utilities/config/editor.config.js';
import HealthModal from './HealthModal/HealthModal.jsx';
import './AttributesEditor.scss';

const AttributesEditor = () => {
    return (
        <div className="AttributesEditor">
            <Header className="section" as="h1">Attributes editor</Header>
            <div className="content">
                <Attribute
                    name="Health"
                    value={3}
                    description={attributeDescriptions.health}
                    QuestionModal={HealthModal}
                />
                <Attribute
                    name="Steel"
                    value={3}
                    description={attributeDescriptions.steel}
                />
                <Attribute
                    name="Reflexes"
                    value={3}
                    description={attributeDescriptions.reflexes}
                />
                <Attribute
                    name="Mortal Wound"
                    value={3}
                    description={attributeDescriptions.mortalWound}
                />
            </div>
        </div>
    );
};

export default AttributesEditor;