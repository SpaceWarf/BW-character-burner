import React from "react";
import { connect } from 'react-redux';
import { Header, Card } from 'semantic-ui-react';
import SimpleEditor from './SimpleEditor/SimpleEditor.jsx';
import ArmsEditor from './ArmsEditor/ArmsEditor.jsx';
import MissilesEditor from './MissilesEditor/MissilesEditor.jsx';
import ArmorEditor from './ArmorEditor/ArmorEditor.jsx';
import PropertyEditor from './PropertyEditor/PropertyEditor.jsx';
import { getResourcePoints } from '#Utilities/redux-selectors.js';
import './ResourcesEditor.scss';

const ResourcesEditor = ({ resourcePoints }) => {
    return (
        <div className="ResourcesEditor">
            <Header className="section" as="h1">Select your character's resources</Header>
            <div className="content">
                <div className="Points">
                    <Card className="StatCard">
                        <Card.Content>
                            <Card.Header>
                                <p>Ressource Points</p>
                                <p>0/{resourcePoints}</p>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </div>
                <div className="ComplexEditors">
                    <ArmsEditor />
                    <MissilesEditor />
                    <ArmorEditor />
                    <PropertyEditor />
                </div>
                <SimpleEditor />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    resourcePoints: getResourcePoints(state)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesEditor);