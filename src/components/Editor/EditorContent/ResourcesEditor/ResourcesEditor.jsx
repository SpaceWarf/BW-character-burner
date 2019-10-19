import React from "react";
import { connect } from 'react-redux';
import { Header, Card, Tab, Button } from 'semantic-ui-react';
import SimpleEditor from './SimpleEditor/SimpleEditor.jsx';
import ArmsEditor from './ArmsEditor/ArmsEditor.jsx';
import MissilesEditor from './MissilesEditor/MissilesEditor.jsx';
import ArmorEditor from './ArmorEditor/ArmorEditor.jsx';
import PropertyEditor from './PropertyEditor/PropertyEditor.jsx';
import RelationshipEditor from './RelationshipEditor/RelationshipEditor.jsx';
import AllResourcesList from './AllResourcesList/AllResourcesList.jsx';
import { getResourcePoints, getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import './ResourcesEditor.scss';

const panes = [
    { menuItem: 'Simple', render: () => <Tab.Pane><SimpleEditor /></Tab.Pane> },
    { menuItem: 'Arms', render: () => <Tab.Pane><ArmsEditor /></Tab.Pane> },
    { menuItem: 'Missiles', render: () => <Tab.Pane><MissilesEditor /></Tab.Pane> },
    { menuItem: 'Armor', render: () => <Tab.Pane><ArmorEditor /></Tab.Pane> },
    { menuItem: 'Property', render: () => <Tab.Pane><PropertyEditor /></Tab.Pane> },
    { menuItem: 'Relationships', render: () => <Tab.Pane><RelationshipEditor /></Tab.Pane> },
    { menuItem: 'AllResources', render: () => <Tab.Pane><AllResourcesList /></Tab.Pane> }
];

class ResourcesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 6
        };
    }

    render() {
        const { resourcePoints, resourcePointsLeft } = this.props;
        const { activeIndex } = this.state;

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
                        <div className="AllResources">
                            <Button onClick={() => this.setState({ activeIndex: 6 })}>
                                Purchased Resources
                            </Button>
                        </div>
                    </div>
                    <Tab
                        panes={panes}
                        activeIndex={activeIndex}
                        onTabChange={(_, { activeIndex }) => this.setState({ activeIndex })}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resourcePoints: getResourcePoints(state),
    resourcePointsLeft: getResourcePointsLeft(state)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesEditor);