import React from "react";
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { property } from '#Resources/Resources/mannish_resources.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import ResourceCard from '../ResourceCard/ResourceCard.jsx';
import './PropertyEditor.scss';

class PropertyEditor extends React.Component {
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
            category: "property",
            name: item.name,
            price: item.price,
            note
        });
        this.setState({ active: "" });
    }

    render() {
        const { resourcePointsLeft } = this.props;
        const { active } = this.state;

        return (
            <div className="PropertyEditor">
                <div className="Description">{property.description}</div>
                <div className="Editor">
                    {property.types.map(item => (
                        <ResourceCard
                            item={item}
                            active={active === item.name}
                            disabled={resourcePointsLeft < item.price}
                            onClick={() => this.setState({ active: active === item.name ? "" : item.name })}
                            onConfirm={note => this.handleConfirm(item, note)}
                            onCancel={() => this.setState({ active: " " })}
                        />
                    ))}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PropertyEditor);