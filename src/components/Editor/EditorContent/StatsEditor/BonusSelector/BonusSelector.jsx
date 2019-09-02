import React from "react";
import { connect } from 'react-redux';
import { selectStatBonus } from '#Actions/editor.js';
import { getStatBonuses } from '#Utilities/redux-selectors.js';
import { Header, Button } from "semantic-ui-react";
import './BonusSelector.scss';

class BonusSelector extends React.Component {
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
                <Button.Group key={i} size="mini">
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
        return (
            <div className="BonusSelector">
                <Header as='h3'>Bonuses to choose: </Header>
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
    onSelectStatBonus: (bonus, index) => dispatch(selectStatBonus(bonus, index))
});

export default connect(mapStateToProps, mapDispatchToProps)(BonusSelector);