import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import ItemList from '#Components/Common/ItemList/ItemList.jsx';
import {
    selectBornLifepath,
    unselectBornLifepath,
    addLifepath,
    removeLifepath,
    lockSections,
    unlockSections
} from '#Actions/editor.js';
import { getLifepathSettings } from '#Utilities/data-selectors.js';
import {
    getBornLifepaths,
    getLifepaths
} from '#Utilities/redux-selectors.js';
import './LifepathList.scss';

class LifepathList extends React.Component {

    constructor(props) {
        super(props);

        this.handleAddLifepath = this.handleAddLifepath.bind(this);
        this.handleRemoveLifepath = this.handleRemoveLifepath.bind(this);
        this.handleSelectBornLifepath = this.handleSelectBornLifepath.bind(this);
        this.handleUnselectBornLifepath = this.handleUnselectBornLifepath.bind(this);
    }

    filterBornLifepath() {
        const {
            bornLifepaths,
            selectedLifepaths
        } = this.props;
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
    }

    filterLifepathsForPreviousLifepath(previousLifepath, lifepaths) {
        if (previousLifepath) {
            const setting = previousLifepath.lifepath.setting;
            const leads = previousLifepath.lifepath.leads;
            return lifepaths.filter(lifepath => (
                lifepath.setting === setting
                || leads.includes(lifepath.setting)
            ));
        }
        return lifepaths;
    }

    filterLifepathsForNextLifepath(nextLifepath, lifepaths) {
        if (nextLifepath) {
            const setting = nextLifepath.lifepath.setting;
            return lifepaths.filter(lifepath => (
                setting === lifepath.setting
                || lifepath.leads.includes(setting)
            ));
        }
        return lifepaths;
    }

    getRestrictedLifepaths(index) {
        const {
            selectedLifepaths,
            lifepaths
        } = this.props;

        let filteredLifepaths = lifepaths.filter(lifepath => (
            !lifepath.isBornLifepath
        ));
        const previousLifepath = selectedLifepaths
            .find(lifepath => lifepath.index === index - 1);
        const nextLifepath = selectedLifepaths
            .find(lifepath => lifepath.index === index + 1);

        filteredLifepaths = this.filterLifepathsForPreviousLifepath(previousLifepath, filteredLifepaths);
        filteredLifepaths = this.filterLifepathsForNextLifepath(nextLifepath, filteredLifepaths);

        return filteredLifepaths;
    }

    handleSelectBornLifepath(lifepath) {
        const {
            lifepathCount,
            selectedLifepaths,
            onSelectBornLifepath,
            onUnlockSection
        } = this.props;

        if (lifepathCount === selectedLifepaths.length + 1) {
            onUnlockSection(['Stats']);
        }
        onSelectBornLifepath(lifepath);
    }

    handleUnselectBornLifepath() {
        const {
            lifepathCount,
            selectedLifepaths,
            onUnselectBornLifepath,
            onLockSection
        } = this.props;

        if (lifepathCount === selectedLifepaths.length) {
            onLockSection(['Stats', 'Skills']);
        }
        onUnselectBornLifepath();
    }

    handleAddLifepath(lifepath, index) {
        const {
            lifepathCount,
            selectedLifepaths,
            onAddLifepath,
            onUnlockSection
        } = this.props;

        if (lifepathCount === selectedLifepaths.length + 1) {
            onUnlockSection(['Stats']);
        }
        onAddLifepath(lifepath, index);
    }

    handleRemoveLifepath(index) {
        const {
            lifepathCount,
            selectedLifepaths,
            onRemoveLifepath,
            onLockSection
        } = this.props;

        if (lifepathCount === selectedLifepaths.length) {
            onLockSection(['Stats', 'Skills']);
        }
        onRemoveLifepath(index);
    }

    getList() {
        const {
            lifepathCount,
            selectedBornLifepath,
            selectedLifepaths
        } = this.props;
        const items = [];

        for (let i = 0; i < lifepathCount; i++) {
            items.push(
                <React.Fragment key={`lifepath-${i}`}>
                    <Header as="h4" className="LifepathHeader">
                        {i === 0 ? 'Born lifepath' : `Lifepath ${i + 1}`}
                    </Header>
                    {i === 0
                        ? <ItemList
                            header="Select your character's born lifepath"
                            type="lifepath"
                            choices={this.filterBornLifepath()}
                            items={selectedBornLifepath}
                            maxCount={1}
                            onSelect={lifepath => this.handleSelectBornLifepath(lifepath)}
                            onRemove={() => this.handleUnselectBornLifepath()}
                        />
                        : <ItemList
                            header="Select a lifepath"
                            type="lifepath"
                            choices={this.getRestrictedLifepaths(i)}
                            items={selectedLifepaths
                                .filter(lifepath => lifepath.index === i)
                                .map(lifepath => lifepath.lifepath)
                            }
                            maxCount={1}
                            sections={getLifepathSettings()}
                            onSelect={lifepath => this.handleAddLifepath(lifepath, i)}
                            onRemove={() => this.handleRemoveLifepath(i)}
                        />
                    }
                </React.Fragment>
            )
        }
        return items;
    }

    render() {
        return (
            <div className="LifepathList">
                {this.getList()}
            </div>
        );
    }
}

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
    onLockSection: section => dispatch(lockSections(section)),
    onUnlockSection: section => dispatch(unlockSections(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(LifepathList);