import React from "react";
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { buyResource } from '#Actions/editor.js';
import { simple } from '#Resources/Resources/mannish_resources.js';
import { getResourcePointsLeft } from '#Utilities/redux-selectors.js';
import CardInput from './CardInput/CardInput.jsx';
import './SimpleEditor.scss';

class SimpleEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleClick(name) {
        const { active } = this.state;

        this.setState({
            active: active === name ? "" : name
        });
    }

    handleConfirm(item, note) {
        const { onBuyResource } = this.props;

        onBuyResource({
            type: "simple",
            name: item.name,
            price: item.price,
            note
        });
        this.setState({
            active: ""
        });
    }

    handleCancel() {
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
                    <Card
                        key={item.name}
                        className={resourcePointsLeft < item.price ? "disabled" : ""}
                        onClick={resourcePointsLeft < item.price ? null : () => this.handleClick(item.name)}
                    >
                        <Card.Content>
                            <Card.Header>
                                <p>{item.name}</p>
                                <p>{item.price} rps</p>
                            </Card.Header>
                            {active === item.name
                                ? <CardInput onConfirm={note => this.handleConfirm(item, note)} onCancel={this.handleCancel} />
                                : <Card.Description>{item.description}</Card.Description>
                            }
                        </Card.Content>
                    </Card>
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