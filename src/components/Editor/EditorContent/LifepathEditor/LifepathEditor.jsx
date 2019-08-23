import React from "react";
import { connect } from 'react-redux';
import { Header, Button, Image } from 'semantic-ui-react';
import { selectRace } from '#Actions/editor.js';
import { getBornLifepaths } from '#Utilities/selectors.js';
import { races } from '#Utilities/config/editor.config.js';
import './LifepathEditor.scss';

const LifepathEditor = ({ selectedRace, bornLifepaths, onSelectRace }) => {
    return (
        <div className="LifepathEditor">
            <Header className="section" as="h1">Select your race</Header>
            <div className="RaceSelector">
                {races.map(race => (
                    <Button
                        key={race.name}
                        active={selectedRace === race.name}
                        disabled={race.disabled}
                        onClick={() => onSelectRace(race.name)}
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
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    selectedRace: state.editor.selectedRace,
    activeSection: state.editor.activeSection,
    bornLifepaths: getBornLifepaths(state)
});


const mapDispatchToProps = dispatch => ({
    onSelectRace: race => dispatch(selectRace(race))
});

export default connect(mapStateToProps, mapDispatchToProps)(LifepathEditor);