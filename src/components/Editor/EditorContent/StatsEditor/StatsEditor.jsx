import React from "react";
import { connect } from 'react-redux';
import { getAge, getStatBonuses } from '#Utilities/redux-selectors.js';
import { Header, Table, Label, Card } from "semantic-ui-react";
import BonusSelector from './BonusSelector/BonusSelector.jsx';
import StatPools from './StatPools/StatPools.jsx';
import StatsSelector from './StatsSelector/StatsSelector.jsx';
import { statPools } from '#Utilities/config/editor.config.js';
import './StatsEditor.scss';

const StatsEditor = ({ age, statBonuses, selectedStatBonuses }) => {
    return (
        <div className="StatsEditor">
            <Header className="section" as="h1">Select your character's stats</Header>
            <p>
                <b>Stats</b> will determine how good your character is at certain types of skills. Want a stealthy rogue
                that runs around pickpocketing people? Prioritize Perception and Agility. Want a savage barbarian that can
                dish out as much pain as they can take? Prioritize Forte and Power.
            </p>
            <div className="content">
                <div className="StatsContent">
                    <div className="Age Section">
                        <Card className="AgeCard">
                            <Card.Content>
                                <Card.Header>
                                    <p>Starting Age</p>
                                    <p>{age}</p>
                                </Card.Header>
                            </Card.Content>
                        </Card>
                        <i className="hint">
                            Remember: your character's age increases by one everytime you use a lead to change setting.
                    </i>
                    </div>
                    {statBonuses.chooseMalus > 0 && <BonusSelector type="malus" />}
                    {statBonuses.chooseBonus > 0 && <BonusSelector type="bonus" />}
                    <StatPools />
                    {selectedStatBonuses.bonus.length === statBonuses.chooseBonus
                        && selectedStatBonuses.malus.length === statBonuses.chooseMalus
                        && <StatsSelector />
                    }
                </div>
                <Table compact='very' striped celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Starting Age</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Mental Pool</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center">Physical Pool</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {statPools.map(pool => (
                            <Table.Row
                                key={`${pool.minAge}-${pool.maxAge}`}
                            >
                                <Table.Cell>{pool.minAge <= age && pool.maxAge >= age
                                    ? <Label ribbon>{`${pool.minAge} - ${pool.maxAge} years`}</Label>
                                    : `${pool.minAge} - ${pool.maxAge} years`
                                }</Table.Cell>
                                <Table.Cell textAlign="center">{`${pool.mental} pts`}</Table.Cell>
                                <Table.Cell textAlign="center">{`${pool.physical} pts`}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    age: getAge(state),
    statBonuses: getStatBonuses(state),
    selectedStatBonuses: state.editor.stats.selectedStatBonuses
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsEditor);