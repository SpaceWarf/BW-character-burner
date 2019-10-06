import React from "react";
import { connect } from 'react-redux';
import {
    getMentalPool,
    getPhysicalPool,
    getStatBonuses,
    getAppliedBonuses
} from '#Utilities/redux-selectors.js';
import { Header } from "semantic-ui-react";
import PoolCard from './PoolCard/PoolCard.jsx';
import './StatPools.scss';

const StatPools = ({ statBonuses, physicalPool, mentalPool, appliedBonuses }) => {
    return (
        <div className="StatPools">
            <div className="BlockHeader">
                <Header as="h3">Stat Pools</Header>
                <i className="hint">
                    Base stat pools are determined according to the chart on the right.
                </i>
            </div>
            <div className="Pools">
                <PoolCard
                    header="Mental"
                    pool={mentalPool}
                    bonus={{ applied: appliedBonuses.mental, stat: statBonuses.mental }}
                />
                <PoolCard
                    header="Physical"
                    pool={physicalPool}
                    bonus={{ applied: appliedBonuses.physical, stat: statBonuses.physical }}
                />
            </div>
        </div>
    );
};


const mapStateToProps = state => ({
    mentalPool: getMentalPool(state),
    physicalPool: getPhysicalPool(state),
    statBonuses: getStatBonuses(state),
    appliedBonuses: getAppliedBonuses(state)
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(StatPools);