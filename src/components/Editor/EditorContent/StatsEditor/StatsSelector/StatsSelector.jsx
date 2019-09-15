import React from "react";
import { connect } from 'react-redux';
import {
    getMentalPointsLeftToAssign,
    getPhysicalPointsLeftToAssign,
    getAppliedBonuses,
    getMentalPool
} from '#Utilities/redux-selectors.js';
import { selectStat, updateSectionsLockState } from '#Actions/editor.js'
import { Header, Dropdown } from 'semantic-ui-react';
import './StatsSelector.scss';

const getDropdownOptions = count => {
    const options = [];
    for (let i = 1; i <= count; i++) {
        options.push({
            key: i,
            text: i,
            value: i
        });
    }
    return options;
};

const getStatsError = pointsLeftToAssign => {
    if (pointsLeftToAssign < 0) {
        return <i className="error">You have assigned {Math.abs(pointsLeftToAssign)} too many points.</i>;
    } else if (pointsLeftToAssign === 0) {
        return <i>You have no more points left to assign.</i>;
    }
    return <i>You have {pointsLeftToAssign} points left to assign.</i>;
};

class StatsSelector extends React.Component {
    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(stat, value) {
        const {
            onSelectStat,
            appliedBonuses,
            mentalPool,
            onUpdateSectionsLockState
        } = this.props;

        if (['perception', 'will'].includes(stat)) {
            const oppositeValue = Math.min(6, mentalPool + appliedBonuses.mental - value);
            if (oppositeValue > 0) {
                onSelectStat(
                    stat === 'will' ? 'perception' : 'will',
                    Math.min(6, mentalPool + appliedBonuses.mental - value)
                );
            }
        }

        onSelectStat(stat, value);
        onUpdateSectionsLockState();
    }

    render() {
        const {
            physicalPointsLeftToAssign,
            mentalPointsLeftToAssign,
            selectedStats
        } = this.props
        return (
            <div className="StatsSelector">
                <div className="Mental Stats">
                    <Header as='h3'>Divide the mental pool</Header>
                    <div className="StatsBloc">
                        <div className="Will Stat">
                            <b>Will</b>
                            <Dropdown
                                options={getDropdownOptions(6)}
                                value={selectedStats.will}
                                placeholder="-"
                                onChange={(_, { value }) => this.onHandleChange('will', value)}
                            />
                        </div>
                        <div className="Perception Stat">
                            <b>Perception</b>
                            <Dropdown
                                options={getDropdownOptions(6)}
                                value={selectedStats.perception}
                                placeholder="-"
                                onChange={(_, { value }) => this.onHandleChange('perception', value)}
                            />
                        </div>
                    </div>
                    {getStatsError(mentalPointsLeftToAssign)}
                </div>
                <div className="Physical Stats">
                    <Header as='h3'>Divide the physical pool</Header>
                    <div className="StatsBloc">
                        <div className="Power Stat">
                            <b>Power</b>
                            <Dropdown
                                options={getDropdownOptions(6)}
                                value={selectedStats.power}
                                placeholder="-"
                                onChange={(_, { value }) => this.onHandleChange('power', value)}
                            />
                        </div>
                        <div className="Forte Stat">
                            <b>Forte</b>
                            <Dropdown
                                options={getDropdownOptions(6)}
                                value={selectedStats.forte}
                                placeholder="-"
                                onChange={(_, { value }) => this.onHandleChange('forte', value)}
                            />
                        </div>
                        <div className="Agility Stat">
                            <b>Agility</b>
                            <Dropdown
                                options={getDropdownOptions(6)}
                                value={selectedStats.agility}
                                placeholder="-"
                                onChange={(_, { value }) => this.onHandleChange('agility', value)}
                            />
                        </div>
                        <div className="Speed Stat">
                            <b>Speed</b>
                            <Dropdown
                                options={getDropdownOptions(6)}
                                value={selectedStats.speed}
                                placeholder="-"
                                onChange={(_, { value }) => this.onHandleChange('speed', value)}
                            />
                        </div>
                    </div>
                    {getStatsError(physicalPointsLeftToAssign)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedStats: state.editor.stats.selectedStats,
    mentalPointsLeftToAssign: getMentalPointsLeftToAssign(state),
    physicalPointsLeftToAssign: getPhysicalPointsLeftToAssign(state),
    mentalPool: getMentalPool(state),
    appliedBonuses: getAppliedBonuses(state)
});


const mapDispatchToProps = dispatch => ({
    onSelectStat: (stat, value) => dispatch(selectStat(stat, value)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsSelector);