import React from "react";
import { connect } from 'react-redux';
import { selectStatBonus } from '#Actions/editor.js';
import { getAge, getMentalPool, getPhysicalPool, getStatBonuses } from '#Utilities/redux-selectors.js';
import { Header, Table, Button } from "semantic-ui-react";
import { statPools } from '#Utilities/config/editor.config.js';
import './StatsEditor.scss';

class StatsEditor extends React.Component {
    getBonusesComponents() {
        const {
            statBonuses,
            onSelectStatBonus,
            selectedStatBonuses
        } = this.props;
        const buttonGroups = [];
        for (let i = 0; i < statBonuses.choose; i++) {
            const selectedStatBonus = selectedStatBonuses
                .find(bonus => bonus.index === i);
            buttonGroups.push(
                <Button.Group size="mini">
                    <Button
                        active={selectedStatBonus && selectedStatBonus.bonus === 'M'}
                        positive={selectedStatBonus && selectedStatBonus.bonus === 'M'}
                        onClick={() => onSelectStatBonus('M', i)}
                    >
                        M
                    </Button>
                    <Button.Or />
                    <Button
                        active={selectedStatBonus && selectedStatBonus.bonus === 'P'}
                        positive={selectedStatBonus && selectedStatBonus.bonus === 'P'}
                        onClick={() => onSelectStatBonus('P', i)}
                    >
                        P
                    </Button>
                </Button.Group>
            )
        }
        return buttonGroups;
    };

    render() {
        const {
            age,
            mentalPool,
            physicalPool,
            statBonuses,
            selectedStatBonuses
        } = this.props;

        const appliedBonuses = selectedStatBonuses.reduce(
            (appliedBonuses, bonus) => {
                if (bonus.bonus === 'M') {
                    appliedBonuses.mental += 1;
                } else if (bonus.bonus === 'P') {
                    appliedBonuses.physical += 1
                }
                return appliedBonuses;
            },
            { mental: 0, physical: 0 }
        );
        return (
            <div className="StatsEditor">
                <Header className="section" as="h1">Choose your character's stats</Header>
                <div className="Age Section">
                    <Header as='h3'>Age: {age}</Header>
                    <i className="hint">
                        Remember: your character's age increases by one everytime you use a lead to change setting.
                    </i>
                </div>
                {statBonuses.choose > 0 && <div className="Bonuses Section">
                    <Header as='h3'>Bonuses to choose: </Header>
                    {this.getBonusesComponents()}
                </div>}
                <div className="Mental Section">
                    <Header as='h3'>
                        Mental Pool:
                        {mentalPool + appliedBonuses.mental}
                        ({mentalPool - statBonuses.mental} + {statBonuses.mental + appliedBonuses.mental})
                    </Header>
                </div>
                <div className="Physical Section">
                    <Header as='h3'>
                        Physical Pool:
                        {physicalPool + appliedBonuses.physical}
                        ({physicalPool - statBonuses.physical} + {statBonuses.physical + appliedBonuses.physical})
                    </Header>
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
                            <Table.Row>
                                <Table.Cell>{`${pool.minAge} - ${pool.maxAge} years`}</Table.Cell>
                                <Table.Cell>{`${pool.mental} pts`}</Table.Cell>
                                <Table.Cell>{`${pool.physical} pts`}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    age: getAge(state),
    mentalPool: getMentalPool(state),
    physicalPool: getPhysicalPool(state),
    statBonuses: getStatBonuses(state),
    selectedStatBonuses: state.editor.stats.selectedStatBonuses
});


const mapDispatchToProps = dispatch => ({
    onSelectStatBonus: (bonus, index) => dispatch(selectStatBonus(bonus, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsEditor);