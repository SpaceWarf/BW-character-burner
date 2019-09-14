import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import CardList from '#Components/Common/CardList/CardList.jsx';
import {
    selectBornLifepath,
    unselectBornLifepath,
    addLifepath,
    removeLifepath,
    updateSectionsLockState
} from '#Actions/editor.js';
import { getLifepathSettings } from '#Utilities/data-selectors.js';
import {
    getBornLifepaths,
    getLifepaths
} from '#Utilities/redux-selectors.js';
import './LifepathList.scss';

const LifepathList = ({
    lifepathCount,
    selectedBornLifepath,
    selectedLifepaths,
    bornLifepaths,
    lifepaths,
    onSelectBornLifepath,
    onUnselectBornLifepath,
    onAddLifepath,
    onRemoveLifepath,
    onUpdateSectionsLockState
}) => {

    const filterBornLifepath = () => {
        const nextLifepath = selectedLifepaths.find(lifepath => (
            lifepath.index === 1
        ));

        if (nextLifepath) {
            return bornLifepaths.filter(lifepath => (
                lifepath.setting === nextLifepath.lifepath.setting
                || lifepath.leads.includes(nextLifepath.lifepath.setting)
            ));
        }
        return bornLifepaths;
    };

    const filterLifepathsForPreviousLifepath = (previousLifepath, lifepaths) => {
        if (previousLifepath) {
            const setting = previousLifepath.lifepath.setting;
            const leads = previousLifepath.lifepath.leads;
            return lifepaths.filter(lifepath => (
                lifepath.setting === setting
                || leads.includes(lifepath.setting)
            ));
        }
        return lifepaths;
    };

    const filterLifepathsForNextLifepath = (nextLifepath, lifepaths) => {
        if (nextLifepath) {
            const setting = nextLifepath.lifepath.setting;
            return lifepaths.filter(lifepath => (
                setting === lifepath.setting
                || lifepath.leads.includes(setting)
            ));
        }
        return lifepaths;
    };

    const getRestrictedLifepaths = index => {
        let filteredLifepaths = lifepaths.filter(lifepath => (
            !lifepath.isBornLifepath
        ));
        const previousLifepath = selectedLifepaths
            .find(lifepath => lifepath.index === index - 1);
        const nextLifepath = selectedLifepaths
            .find(lifepath => lifepath.index === index + 1);

        filteredLifepaths = filterLifepathsForPreviousLifepath(previousLifepath, filteredLifepaths);
        filteredLifepaths = filterLifepathsForNextLifepath(nextLifepath, filteredLifepaths);

        return filteredLifepaths;
    };

    const handleSelectBornLifepath = lifepath => {
        onSelectBornLifepath(lifepath).then(_ => {
            onUpdateSectionsLockState();
        });
    }

    const handleUnselectBornLifepath = () => {
        onUnselectBornLifepath().then(_ => {
            onUpdateSectionsLockState();
        });
    }

    const handleAddLifepath = (lifepath, index) => {
        onAddLifepath(lifepath, index).then(_ => {
            onUpdateSectionsLockState();
        });
    }

    const handleRemoveLifepath = (index) => {
        onRemoveLifepath(index).then(_ => {
            onUpdateSectionsLockState();
        });
    }

    const getList = () => {
        const items = [];
        for (let i = 0; i < lifepathCount; i++) {
            items.push(
                <React.Fragment key={`lifepath-${i}`}>
                    <Header as="h4" className="LifepathHeader">
                        {i === 0 ? 'Born lifepath' : `Lifepath ${i + 1}`}
                    </Header>
                    {i === 0
                        ? <CardList
                            header="Select your character's born lifepath"
                            type="lifepath"
                            choices={filterBornLifepath()}
                            items={selectedBornLifepath}
                            maxCount={1}
                            onSelect={lifepath => handleSelectBornLifepath(lifepath)}
                            onRemove={() => handleUnselectBornLifepath()}
                        />
                        : <CardList
                            header="Select a lifepath"
                            type="lifepath"
                            choices={getRestrictedLifepaths(i)}
                            items={selectedLifepaths
                                .filter(lifepath => lifepath.index === i)
                                .map(lifepath => lifepath.lifepath)
                            }
                            maxCount={1}
                            sections={getLifepathSettings()}
                            onSelect={lifepath => handleAddLifepath(lifepath, i)}
                            onRemove={() => handleRemoveLifepath(i)}
                        />
                    }
                </React.Fragment>
            )
        }
        return items;
    };

    return (
        <div className="LifepathList">
            {getList()}
        </div>
    );
};

const mapStateToProps = state => ({
    lifepathCount: state.editor.lifepaths.count,
    bornLifepaths: getBornLifepaths(state),
    lifepaths: getLifepaths(state),
    selectedBornLifepath: state.editor.lifepaths.selectedBornLifepath,
    selectedLifepaths: state.editor.lifepaths.selectedLifepaths
});


const mapDispatchToProps = dispatch => ({
    onSelectBornLifepath: lifepath => dispatch(selectBornLifepath(lifepath)),
    onUnselectBornLifepath: () => dispatch(unselectBornLifepath()),
    onAddLifepath: (lifepath, index) => dispatch(addLifepath(lifepath, index)),
    onRemoveLifepath: index => dispatch(removeLifepath(index)),
    onUpdateSectionsLockState: () => dispatch(updateSectionsLockState())
});

export default connect(mapStateToProps, mapDispatchToProps)(LifepathList);