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
            type,
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
        onSelectStatBonus(stat, index, type);
    }

    getBonusesComponents() {
        const {
            type,
            statBonuses,
            selectedStatBonuses
        } = this.props;
        const buttonGroups = [];
        const bonuses = type === 'bonus'
            ? statBonuses.chooseBonus
            : statBonuses.chooseMalus;
        const selectedBonuses = type === 'bonus'
            ? selectedStatBonuses
            : selectedStatBonuses;
        for (let i = 0; i < bonuses; i++) {
            const selectedBonus = selectedBonuses[type]
                .find(bonus => bonus.index === i);
            buttonGroups.push(
                <Button.Group key={i} size="mini">
                    <Button
                        active={selectedBonus && selectedBonus.bonus === 'M'}
                        positive={type === 'bonus' && selectedBonus && selectedBonus.bonus === 'M'}
                        negative={type === 'malus' && selectedBonus && selectedBonus.bonus === 'M'}
                        onClick={() => this.handleOnClick('M', i)}
                    >
                        M
                    </Button>
                    <Button.Or />
                    <Button
                        active={selectedBonus && selectedBonus.bonus === 'P'}
                        positive={type === 'bonus' && selectedBonus && selectedBonus.bonus === 'P'}
                        negative={type === 'malus' && selectedBonus && selectedBonus.bonus === 'P'}
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
        const { type } = this.props;
        return (
            <div className="BonusSelector">
                <Header as='h3'>Choose your character's {type === 'bonus' ? 'bonuses' : 'maluses'}: </Header>
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
    onSelectStatBonus: (bonus, index, type) => dispatch(selectStatBonus(bonus, index, type)),
    onLockSection: section => dispatch(lockSections(section)),
    onUnlockSection: section => dispatch(unlockSections(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(BonusSelector);