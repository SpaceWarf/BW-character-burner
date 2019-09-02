import React from "react";
import { connect } from 'react-redux';
import { getMentalPool, getPhysicalPool, getStatBonuses } from '#Utilities/redux-selectors.js';
import { Header } from "semantic-ui-react";
import './StatPools.scss';

const StatPools = ({ statBonuses, physicalPool, mentalPool, selectedStatBonuses }) => {
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
        <div className="StatPools">
            <div className="Pools">
                <div className="Mental Pool">
                    <Header as='h3'>
                        Mental Pool: {mentalPool + appliedBonuses.mental}
                    </Header>
                    <p>({mentalPool - statBonuses.mental} + {statBonuses.mental + appliedBonuses.mental})</p>
                </div>
                <div className="Physical Pool">
                    <Header as='h3'>
                        Physical Pool: {physicalPool + appliedBonuses.physical}
                    </Header>
                    <p>({physicalPool - statBonuses.physical} + {statBonuses.physical + appliedBonuses.physical})</p>
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
    selectedStatBonuses: state.editor.stats.selectedStatBonuses
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(StatPools);