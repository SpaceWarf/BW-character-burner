import React from "react";
import { connect } from 'react-redux';
import { Header, Card, Tab } from 'semantic-ui-react';
import SimpleEditor from './SimpleEditor/SimpleEditor.jsx';
import ArmsEditor from './ArmsEditor/ArmsEditor.jsx';
import MissilesEditor from './MissilesEditor/MissilesEditor.jsx';
import ArmorEditor from './ArmorEditor/ArmorEditor.jsx';
import PropertyEditor from './PropertyEditor/PropertyEditor.jsx';
import RelationshipEditor from './RelationshipEditor/RelationshipEditor.jsx';
import { getResourcePoints, getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import './ResourcesEditor.scss';

const panes = [
    { menuItem: 'Simple', render: () => <Tab.Pane><SimpleEditor /></Tab.Pane> },
    { menuItem: 'Arms', render: () => <Tab.Pane><ArmsEditor /></Tab.Pane> },
    { menuItem: 'Missiles', render: () => <Tab.Pane><MissilesEditor /></Tab.Pane> },
    { menuItem: 'Armor', render: () => <Tab.Pane><ArmorEditor /></Tab.Pane> },
    { menuItem: 'Property', render: () => <Tab.Pane><PropertyEditor /></Tab.Pane> },
    { menuItem: 'Relationships', render: () => <Tab.Pane><RelationshipEditor /></Tab.Pane> }
];

const ResourcesEditor = ({ resourcePoints, resourcePointsLeft }) => {
    return (
        <div className="ResourcesEditor">
            <Header className="section" as="h1">Select your character's resources</Header>
            <div className="content">
                <div className="Points">
                    <Card className="StatCard">
                        <Card.Content>
                            <Card.Header>
                                <p>Ressource Points</p>
                                <p>{resourcePointsLeft}/{resourcePoints}</p>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </div>
                <Tab panes={panes} activeIndex={1} />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    resourcePoints: getResourcePoints(state),
    resourcePointsLeft: getResourcePointsLeft(state)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesEditor);