import React from "react";
import { connect } from 'react-redux';
import {
    selectStatBonus,
    lockSections,
    unlockSections
} from '#Actions/editor.js';
import {
    getStatBonuses,
    getMentalPointsLeftToAssign,
    getPhysicalPointsLeftToAssign
} from '#Utilities/redux-selectors.js';
import { Header, Button } from "semantic-ui-react";
import './BonusSelector.scss';

class BonusSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(stat, index) {
        const {
            onSelectStatBonus,
            physicalPointsLeftToAssign,
            mentalPointsLeftToAssign,
            onUnlockSection,
            onLockSection
        } = this.props;
        if (
            stat === 'P' && physicalPointsLeftToAssign === -1
            || stat === 'M' && mentalPointsLeftToAssign === -1
        ) {
            onUnlockSection(['Skills']);
        } else {
            onLockSection(['Skills']);
        }
        onSelectStatBonus(stat, index);
    }

    getBonusesComponents() {
        const {
            statBonuses,
            selectedStatBonuses
        } = this.props;
        const buttonGroups = [];
        for (let i = 0; i < statBonuses.choose; i++) {
            const selectedStatBonus = selectedStatBonuses
                .find(bonus => bonus.index === i);
            buttonGroups.push(
                <Button.Group key={i} size="mini">
                    <Button
                        active={selectedStatBonus && selectedStatBonus.bonus === 'M'}
                        positive={selectedStatBonus && selectedStatBonus.bonus === 'M'}
                        onClick={() => this.handleOnClick('M', i)}
                    >
                        M
                    </Button>
                    <Button.Or />
                    <Button
                        active={selectedStatBonus && selectedStatBonus.bonus === 'P'}
                        positive={selectedStatBonus && selectedStatBonus.bonus === 'P'}
                        onClick={() => this.handleOnClick('P', i)}
                    >
                        P
                    </Button>
                </Button.Group>
            )
        }
        return buttonGroups;
    };

    render() {
        return (
            <div className="BonusSelector">
                <Header as='h3'>Choose your character's bonuses: </Header>
                <div className="Bonuses">
                    {this.getBonusesComponents()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    statBonuses: getStatBonuses(state),
    selectedStatBonuses: state.editor.stats.selectedStatBonuses,
    mentalPointsLeftToAssign: getMentalPointsLeftToAssign(state),
    physicalPointsLeftToAssign: getPhysicalPointsLeftToAssign(state)
});


const mapDispatchToProps = dispatch => ({
    onSelectStatBonus: (bonus, index) => dispatch(selectStatBonus(bonus, index)),
    onLockSection: section => dispatch(lockSections(section)),
    onUnlockSection: section => dispatch(unlockSections(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(BonusSelector);