import React from "react";
import { connect } from 'react-redux';
import {
    Header,
    Button,
    Image,
    Card
} from 'semantic-ui-react';
import {
    selectRace,
    selectLifepathCount,
    updateSectionsLockState
} from '#Actions/editor.js';
import { races, lifepathCounts } from '#Utilities/config/editor.config.js';
import PointCounter from '#Components/Common/PointCounter/PointCounter.jsx';
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
            <Header className="section" as="h1">Select your character's stock</Header>
            <div className="content">
                <p>
                    <b>Stocks</b> each have their unique culture, with a variety of settings and lifepaths.
                    They grant access to particular traits, skills and cultural artifacts which will mold your
                    character.
                </p>
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
            </div>
            {selectedRace &&
                <div className='Lifepath Section'>
                    <Header className="section" as="h1">Select your character's lifepaths</Header>
                    <div className="content">
                        <p>
                            <b>Lifepaths</b> are short slices of the life of your character. They teach skills, bestow traits, toughen your character
                            and can make them richer or poorer. Ultimately your character is the sum of their lifepaths and choosing whether those
                            experiences have been prosperous and fruitful, miserable and painful, or a mix of both is up to you.
                        </p>
                        <div className="count">
                            <Card className="LifepathCountCard">
                                <Card.Content>
                                    <Card.Header>
                                        <p>Lifepath Count</p>
                                        <PointCounter
                                            value={lifepathCount}
                                            min={2}
                                            max={8}
                                            onIncrease={() => handleSelectLifepathCount(lifepathCount + 1)}
                                            onDecrease={() => handleSelectLifepathCount(lifepathCount - 1)}
                                            canIncrease
                                        />
                                    </Card.Header>
                                    {lifepathCount && <Card.Description>
                                        <i className="hint">
                                            {lifepathCounts
                                                .find(count => count.value === lifepathCount).hint
                                            }
                                        </i>
                                    </Card.Description>}
                                </Card.Content>
                            </Card>
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