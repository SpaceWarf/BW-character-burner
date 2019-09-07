import React from "react";
import { connect } from 'react-redux';
import { getMentalPool, getPhysicalPool, getStatBonuses, getAppliedBonuses } from '#Utilities/redux-selectors.js';
import { Header } from "semantic-ui-react";
import './StatPools.scss';

const StatPools = ({ statBonuses, physicalPool, mentalPool, appliedBonuses }) => {
    return (
        <div className="StatPools">
            <div className="Pools">
                <div className="Mental Pool">
                    <Header as='h3'>
                        Mental Pool: {`${mentalPool} ${appliedBonuses.mental >= 0 ? '+' : '-'} ${Math.abs(appliedBonuses.mental)}`}
                    </Header>
                    <p>({mentalPool - statBonuses.mental} {statBonuses.mental + appliedBonuses.mental >= 0 ? '+' : '-'} {Math.abs(statBonuses.mental + appliedBonuses.mental)})</p>
                </div>
                <div className="Physical Pool">
                    <Header as='h3'>
                        Physical Pool: {`${physicalPool} ${appliedBonuses.physical >= 0 ? '+' : '-'} ${Math.abs(appliedBonuses.physical)}`}
                    </Header>
                    <p>({physicalPool - statBonuses.physical} {statBonuses.physical + appliedBonuses.physical >= 0 ? '+' : '-'} {Math.abs(statBonuses.physical + appliedBonuses.physical)})</p>
                </div>
            </div>
            <i className="hint">
                Your base stat pools are determined according to the chart on the right.
            </i>
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