import React from "react";
import { connect } from 'react-redux';
import { buyResource } from '#Actions/editor.js';
import { simple } from '#Resources/resources/mannish_resources.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import ResourceCard from '../ResourceCard/ResourceCard.jsx';
import './SimpleEditor.scss';

class SimpleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        }
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm(item, note) {
        const { onBuyResource } = this.props;

        onBuyResource({
            category: "simple",
            name: item.name,
            price: item.price,
            note
        });
        this.setState({
            active: ""
        });
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const { active } = this.state;

        return (
            <div className="SimpleEditor">
                {simple.map(item => (
                    <ResourceCard
                        item={item}
                        active={item.name === active}
                        disabled={resourcePointsLeft < item.price}
                        onClick={() => this.setState({ active: active === item.name ? "" : item.name })}
                        onConfirm={note => this.handleConfirm(item, note)}
                        onCancel={() => this.setState({ active: "" })}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resourcePointsLeft: getResourcePointsLeft(state)
});


const mapDispatchToProps = dispatch => ({
    onBuyResource: resource => dispatch(buyResource(resource))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleEditor);