import React from "react";
import { connect } from 'react-redux';
import { Header, Button, Image } from 'semantic-ui-react';
import {
    selectRace,
    selectBornLifepath,
    unselectBornLifepath
} from '#Actions/editor.js';
import { getBornLifepaths } from '#Utilities/selectors.js';
import { races } from '#Utilities/config/editor.config.js';
import ItemList from '#Components/Common/ItemList/ItemList.jsx';
import './LifepathEditor.scss';

const LifepathEditor = ({
    selectedRace,
    bornLifepaths,
    selectedBornLifepath,
    onSelectRace,
    onSelectBornLifepath,
    onUnselectBornLifepath
}) => {
    return (
        <div className="LifepathEditor">
            <Header className="section" as="h1">Select your race</Header>
            <div className="RaceSelector">
                {races.map(race => (
                    <Button
                        key={race.name}
                        active={selectedRace === race.name}
                        disabled={race.disabled}
                        onSelect={() => onSelectRace(race.name)}
                        basic
                    >
                        <Image
                            disabled={selectedRace !== race.name}
                            src={race.icon}
                        />
                        <p>{race.name}</p>
                    </Button>
                ))}
            </div>
            {selectedRace &&
                <div className='BornLifepath Section'>
                    <Header className="section" as="h1">Select your born lifepath</Header>
                    <ItemList
                        header="Select your born lifepath"
                        items={selectedBornLifepath}
                        type="lifepath"
                        choices={bornLifepaths}
                        maxCount={1}
                        onSelect={lifepath => onSelectBornLifepath(lifepath)}
                        onRemove={onUnselectBornLifepath}
                    />
                </div>
            }
            {selectedBornLifepath.length !== 0 &&
                <div className='Lifepath Section'>
                    <Header className="section" as="h1">Select your lifepaths</Header>
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    selectedRace: state.editor.selectedRace,
    activeSection: state.editor.activeSection,
    selectedBornLifepath: state.editor.lifepaths.selectedBornLifepath,
    bornLifepaths: getBornLifepaths(state)
});


const mapDispatchToProps = dispatch => ({
    onSelectRace: race => dispatch(selectRace(race)),
    onSelectBornLifepath: lifepath => dispatch(selectBornLifepath(lifepath)),
    onUnselectBornLifepath: () => dispatch(unselectBornLifepath())
});

export default connect(mapStateToProps, mapDispatchToProps)(LifepathEditor);