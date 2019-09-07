import React from "react";
import { connect } from 'react-redux';
import { getAge, getStatBonuses } from '#Utilities/redux-selectors.js';
import { Header, Table } from "semantic-ui-react";
import BonusSelector from './BonusSelector/BonusSelector.jsx';
import StatPools from './StatPools/StatPools.jsx';
import StatsSelector from './StatsSelector/StatsSelector.jsx';
import { statPools } from '#Utilities/config/editor.config.js';
import './StatsEditor.scss';

const StatsEditor = ({ age, statBonuses, selectedStatBonuses }) => {
    return (
        <div className="StatsEditor">
            <Header className="section" as="h1">Select your character's stats</Header>
            <div className="Content">
                <div className="StatsContent">
                    <div className="Age Section">
                        <Header as='h3'>Starting Age: {age}</Header>
                        <i className="hint">
                            Remember: your character's age increases by one everytime you use a lead to change setting.
                    </i>
                    </div>
                    {statBonuses.chooseMalus > 0 && <BonusSelector type="malus" />}
                    {statBonuses.chooseBonus > 0 && <BonusSelector type="bonus" />}
                    <StatPools />
                    {selectedStatBonuses.length === statBonuses.choose && <StatsSelector />}
                </div>
                <Table compact='very' striped celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Starting Age</Table.HeaderCell>
                            <Table.HeaderCell>Mental Pool</Table.HeaderCell>
                            <Table.HeaderCell>Physical Pool</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {statPools.map(pool => (
                            <Table.Row
                                key={`${pool.minAge}-${pool.maxAge}`}
                                active={pool.minAge <= age && pool.maxAge >= age}
                            >
                                <Table.Cell>{`${pool.minAge} - ${pool.maxAge} years`}</Table.Cell>
                                <Table.Cell>{`${pool.mental} pts`}</Table.Cell>
                                <Table.Cell>{`${pool.physical} pts`}</Table.Cell>
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