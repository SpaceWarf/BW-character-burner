import React from "react";
import { connect } from 'react-redux';
import { Table, Label, Button, Checkbox } from 'semantic-ui-react';
import {
    getLifepathTraits,
    getTraitPoints,
    getTraitPointsLeft
} from '#Utilities/redux-selectors.js';
import { buyTrait, removeTrait, updateSectionsLockState } from '#Actions/editor.js';
import CardListModal from '#Components/Common/CardListModal/CardListModal.jsx';
import './TraitRow.scss';

const TraitRow = ({
    trait,
    required,
    general,
    traitPointsLeft,
    boughtTraits,
    onBuyTrait,
    onRemoveTrait,
    onUpdateSectionsLockState
}) => {
    const isChecked = boughtTraits
        .find(boughtTrait => boughtTrait.name === trait.name) !== undefined;

    const handleBuyTrait = () => {
        onBuyTrait(trait);
        onUpdateSectionsLockState();
    };

    const handleRemoveTrait = () => {
        onRemoveTrait(trait);
        onUpdateSectionsLockState();
    };

    return (
        <Table.Row
            key={`${trait.name}`}
            className="SkillRow"
        >
            <Table.Cell>
                {required
                    ? <Label ribbon>{trait.name}</Label>
                    : trait.name
                }
            </Table.Cell>
            <Table.Cell textAlign="center" disabled={!trait.cost}>{trait.cost || "—"}</Table.Cell>
            <Table.Cell textAlign="center" disabled={!trait.type}>{trait.type || "—"}</Table.Cell>
            <Table.Cell textAlign="center">
                <Checkbox
                    checked={required || isChecked}
                    disabled={
                        required
                        || (traitPointsLeft === 0 && !isChecked)
                        || (traitPointsLeft < trait.cost && !isChecked)
                    }
                    onChange={() => handleBuyTrait()}
                />
            </Table.Cell>
            <Table.Cell textAlign="center">
                <CardListModal data={[trait]} type="trait" simple />
                <Button
                    className={general ? "" : "hidden"}
                    icon="delete"
                    size="mini"
                    onClick={() => handleRemoveTrait()}
                />
            </Table.Cell>
        </Table.Row>
    );
};

const mapStateToProps = state => ({
    lifepathTraits: getLifepathTraits(state),
    traitPoints: getTraitPoints(state),
    traitPointsLeft: getTraitPointsLeft(state),
    boughtTraits: state.editor.traits.boughtTraits
});


const mapDispatchToProps = dispatch => ({
    onBuyTrait: trait => dispatch(buyTrait(trait)),
    onRemoveTrait: trait => dispatch(removeTrait(trait)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(TraitRow);