import React from "react";
import { connect } from 'react-redux';
import { selectStatBonus, updateSectionsLockState } from 'Actions/editor.js';
import { getStatBonuses } from 'Utilities/redux-selectors.js';
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
            onUpdateSectionsLockState
        } = this.props;
        onSelectStatBonus(stat, index, type);
        onUpdateSectionsLockState();
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
                <Header as='h3'>Select the pool {type === 'bonus' ? 'bonuses' : 'maluses'}: </Header>
                <div className="Bonuses">
                    {this.getBonusesComponents()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    statBonuses: getStatBonuses(state),
    selectedStatBonuses: state.editor.stats.selectedStatBonuses
});


const mapDispatchToProps = dispatch => ({
    onSelectStatBonus: (bonus, index, type) => dispatch(selectStatBonus(bonus, index, type)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(BonusSelector);