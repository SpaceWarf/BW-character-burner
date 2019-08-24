import React from "react";
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import ItemList from '#Components/Common/ItemList/ItemList.jsx';
import {
    selectBornLifepath,
    unselectBornLifepath,
    addLifepath,
    removeLifepath
} from '#Actions/editor.js';
import { getBornLifepaths } from '#Utilities/selectors.js';
import './LifepathList.scss';

class LifepathList extends React.Component {

    getList() {
        const {
            lifepathCount,
            bornLifepaths,
            selectedBornLifepath,
            selectedLifepaths,
            onSelectBornLifepath,
            onUnselectBornLifepath,
            onAddLifepath,
            onRemoveLifepath
        } = this.props;
        const items = [];

        for (let i = 0; i < lifepathCount; i++) {
            items.push(
                <React.Fragment key={`lifepath-${i}`}>
                    <Header as="h4">
                        {i === 0 ? 'Born lifepath' : `Lifepath ${i + 1}`}
                    </Header>
                    {i === 0
                        ? <ItemList
                            header="Select your character's born lifepath"
                            type="lifepath"
                            choices={bornLifepaths}
                            items={selectedBornLifepath}
                            maxCount={1}
                            onSelect={lifepath => onSelectBornLifepath(lifepath)}
                            onRemove={() => onUnselectBornLifepath()}
                        />
                        : <ItemList
                            header="Select a lifepath"
                            type="lifepath"
                            choices={[]}
                            items={selectedLifepaths
                                .find(lifepath => lifepath.index === i) || []
                            }
                            maxCount={1}
                            onSelect={lifepath => onAddLifepath(lifepath, i)}
                            onRemove={() => onRemoveLifepath(i)}
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
    selectedBornLifepath: state.editor.lifepaths.selectedBornLifepath,
    selectedLifepaths: state.editor.lifepaths.selectedLifepaths
});


const mapDispatchToProps = dispatch => ({
    onSelectBornLifepath: lifepath => dispatch(selectBornLifepath(lifepath)),
    onUnselectBornLifepath: () => dispatch(unselectBornLifepath()),
    onAddLifepath: (lifepath, index) => dispatch(addLifepath(lifepath, index)),
    onRemoveLifepath: index => dispatch(removeLifepath(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(LifepathList);