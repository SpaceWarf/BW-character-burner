import React from "react";
import { connect } from 'react-redux';
import {
    getMentalPointsLeftToAssign,
    getPhysicalPointsLeftToAssign,
    getAppliedBonuses,
    getMentalPool
} from '#Utilities/redux-selectors.js';
import { selectStat, updateSectionsLockState } from '#Actions/editor.js'
import { Header } from 'semantic-ui-react';
import StatCard from './StatCard/StatCard.jsx';
import './StatsSelector.scss';


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
                    <div className="BlockHeader">
                        <Header as='h3'>Mental Stats</Header>
                        {getStatsError(mentalPointsLeftToAssign)}
                    </div>
                    <div className="StatsBloc">
                        <StatCard
                            stat="Will"
                            value={selectedStats.will || 0}
                            onChange={value => this.onHandleChange('will', value)}
                        />
                        <StatCard
                            stat="Perception"
                            value={selectedStats.perception || 0}
                            onChange={value => this.onHandleChange('perception', value)}
                        />
                    </div>
                </div>
                <div className="Physical Stats">
                    <div className="BlockHeader">
                        <Header as='h3'>Physical Stats</Header>
                        {getStatsError(physicalPointsLeftToAssign)}
                    </div>
                    <div className="StatsBloc">
                        <StatCard
                            stat="Power"
                            value={selectedStats.power || 0}
                            onChange={value => this.onHandleChange('power', value)}
                        />
                        <StatCard
                            stat="Forte"
                            value={selectedStats.forte || 0}
                            onChange={value => this.onHandleChange('forte', value)}
                        />
                        <StatCard
                            stat="Agility"
                            value={selectedStats.agility || 0}
                            onChange={value => this.onHandleChange('agility', value)}
                        />
                        <StatCard
                            stat="Speed"
                            value={selectedStats.speed || 0}
                            onChange={value => this.onHandleChange('speed', value)}
                        />
                    </div>
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