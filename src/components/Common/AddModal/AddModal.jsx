import React from "react";
import { Modal, Button, Input } from 'semantic-ui-react';
import Lifepath from '#Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from '#Components/Common/Card/Skill/Skill.jsx';
import Trait from '#Components/Common/Card/Trait/Trait.jsx';
import './AddModal.scss';

class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ""
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange({ target }) {
        this.setState({
            filter: target.value
        });
    }

    getFilteredChoices() {
        const { choices } = this.props;
        const { filter } = this.state;
        return choices.filter(choice =>
            choice.name.toLowerCase()
                .indexOf(filter.toLowerCase()) !== -1
        );
    }

    getItemComponent(item, onClick) {
        const {
            type
        } = this.props;
        switch (type) {
            case 'lifepath':
                return <Lifepath
                    key={`${item.setting}-${item.name}`}
                    lifepath={item}
                    onClick={() => onClick(item)}
                />;
            case 'skill':
                return <Skill
                    key={item.name}
                    skill={item}
                    onClick={() => onClick(item)}
                />;
            case 'trait':
                return <Trait
                    key={item.name}
                    trait={item}
                    onClick={() => onClick(item)}
                />;
            default:
                <p>No component for item type</p>
        }
    }

    render() {
        const {
            header,
            onSelect
        } = this.props;
        const { filter } = this.state;
        return (
            <Modal
                trigger={<Button icon="add" size="mini" positive circular />}
                size="large"
            >
                <Modal.Header>{header}</Modal.Header>
                <Modal.Content scrolling>
                    <Input
                        icon='search'
                        placeholder='Search...'
                        text={filter}
                        onChange={this.handleFilterChange}
                    />
                    <div className="choices">
                        {this.getFilteredChoices().map(choice => (
                            this.getItemComponent(choice, onSelect)
                        ))}
                    </div>
                </Modal.Content>
            </Modal>
        );
    }
}

export default AddModal;