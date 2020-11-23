import React from "react";
import { connect } from 'react-redux';
import { Header, Table } from 'semantic-ui-react';
import {
    getLifepathTraits,
    getTraitPoints,
    getTraitPointsLeft
} from 'Utilities/redux-selectors.js';
import { getDataSetForSection } from 'Utilities/data-selectors.js';
import { buyTrait, addTrait, updateSectionsLockState } from 'Actions/editor.js';
import TraitRow from './TraitRow/TraitRow.jsx';
import AddModal from 'Components/Common/AddModal/AddModal.jsx';
import './TraitsTable.scss';

const TraitsTable = ({
    lifepathTraits,
    traitPoints,
    traitPointsLeft,
    addedTraits,
    onAddTrait,
    onBuyTrait,
    onUpdateSectionsLockState
}) => {

    const getAddModalChoices = () => {
        const dataSet = getDataSetForSection("traits");
        const allTraitsInTable = [
            ...lifepathTraits.required,
            ...lifepathTraits.optional,
            ...addedTraits
        ];
        return dataSet
            .filter(trait => (
                !allTraitsInTable
                    .find(traitInTable => traitInTable.name === trait.name)
                && trait.cost <= traitPointsLeft
            ));
    };

    const handleAddTrait = trait => {
        onAddTrait(trait);
        onBuyTrait(trait);
        onUpdateSectionsLockState();
    };

    return (
        <div className="TraitsTable">
            <div className="Points">
                <Header as="h3">
                    Trait points left: {traitPointsLeft} / {traitPoints}
                </Header>
            </div>
            <Table striped celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={3}>Trait</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">Cost</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">Type</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">Buy</Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {lifepathTraits.required.map(trait => (
                        <TraitRow key={trait.name} trait={trait} required />
                    ))}
                    {lifepathTraits.optional.map(trait => (
                        <TraitRow key={trait.name} trait={trait} />
                    ))}
                    {addedTraits.map(trait => (
                        <TraitRow key={trait.name} trait={trait} general />
                    ))}
                </Table.Body>
            </Table>
            {traitPointsLeft > 0 &&
                <div className="AddRow">
                    <AddModal
                        header={"Select a trait"}
                        type={"trait"}
                        choices={getAddModalChoices()}
                        onSelect={trait => handleAddTrait(trait)}
                    />
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    lifepathTraits: getLifepathTraits(state),
    traitPoints: getTraitPoints(state),
    traitPointsLeft: getTraitPointsLeft(state),
    addedTraits: state.editor.traits.addedTraits
});


const mapDispatchToProps = dispatch => ({
    onBuyTrait: trait => dispatch(buyTrait(trait)),
    onAddTrait: trait => dispatch(addTrait(trait)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(TraitsTable);