import React from "react";
import { connect } from 'react-redux';
import { Header, Dropdown, Button, Image } from 'semantic-ui-react';
import {
    selectRace,
    selectLifepathCount,
    updateSectionsLockState
} from '#Actions/editor.js';
import { races, lifepathCounts } from '#Utilities/config/editor.config.js';
import LifepathList from './LifepathList/LifepathList.jsx';
import './LifepathEditor.scss';

const LifepathEditor = ({
    selectedRace,
    lifepathCount,
    onSelectRace,
    onSelectLifepathCount,
    onUpdateSectionsLockState
}) => {

    const handleSelectLifepathCount = count => {
        onSelectLifepathCount(count);
        onUpdateSectionsLockState();
    };

    return (
        <div className="LifepathEditor">
            <Header className="section" as="h1">Select your character stock</Header>
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
                <div className='Lifepath Section'>
                    <Header className="section" as="h1">Select your character's lifepaths</Header>
                    <div className="content">
                        <div className="count">
                            <Header as="h3">
                                Your character will have
                                <Dropdown
                                    placeholder="0"
                                    options={lifepathCounts}
                                    value={lifepathCount}
                                    onChange={(_, { value }) => handleSelectLifepathCount(value)}
                                    inline
                                />
                                lifepaths
                            </Header>
                            {lifepathCount &&
                                <i className="hint">
                                    {lifepathCounts
                                        .find(count => count.value === lifepathCount).hint
                                    }
                                </i>
                            }
                        </div >
                        {lifepathCount && <LifepathList />}
                    </div >
                </div>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    selectedRace: state.editor.selectedRace,
    lifepathCount: state.editor.lifepaths.count,
});


const mapDispatchToProps = dispatch => ({
    onSelectRace: race => dispatch(selectRace(race)),
    onSelectLifepathCount: count => dispatch(selectLifepathCount(count)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(LifepathEditor);