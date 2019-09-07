import React from "react";
import { connect } from 'react-redux';
import {
    getMentalPointsLeftToAssign,
    getPhysicalPointsLeftToAssign,
    getMentalPool,
    getAppliedBonuses
} from '#Utilities/redux-selectors.js';
import {
    selectStat,
    lockSections,
    unlockSections
} from '#Actions/editor.js'
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
            physicalPointsLeftToAssign,
            mentalPointsLeftToAssign,
            selectedStats,
            mentalPool,
            onSelectStat,
            onLockSection,
            onUnlockSection,
            appliedBonuses
        } = this.props;
        let shouldUnlockNextSection = false;

        if (['perception', 'will'].includes(stat)) {
            if (stat === 'perception') {
                onSelectStat('will', Math.min(6, mentalPool + appliedBonuses.mental - value));
            } else if (stat === 'will') {
                onSelectStat('perception', Math.min(6, mentalPool + appliedBonuses.mental - value));
            }
            shouldUnlockNextSection = value + Math.min(6, mentalPool - value) === mentalPool
                && physicalPointsLeftToAssign === 0;
        } else {
            const addedPoints = value - (selectedStats[stat] || 0);
            const pointsLeftToAssign = physicalPointsLeftToAssign + mentalPointsLeftToAssign;
            shouldUnlockNextSection = pointsLeftToAssign - addedPoints === 0;
        }
        if (shouldUnlockNextSection) {
            onUnlockSection(['Skills']);
        } else {
            onLockSection(['Skills']);
        }
        onSelectStat(stat, value);
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
    onLockSection: section => dispatch(lockSections(section)),
    onUnlockSection: section => dispatch(unlockSections(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(StatsSelector);