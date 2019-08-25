import React from "react";
import { Modal, Button, Input, Header } from 'semantic-ui-react';
import Lifepath from '#Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from '#Components/Common/Card/Skill/Skill.jsx';
import Trait from '#Components/Common/Card/Trait/Trait.jsx';
import SectionChanger from '#Components/Common/SectionChanger/SectionChanger.jsx';
import './AddModal.scss';

class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            activeSectionIndex: 0
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleFilterChange({ target }) {
        this.setState({
            filter: target.value
        });
    }

    getFilteredChoices(section) {
        const { choices } = this.props;
        const { filter } = this.state;
        const filteredChoices = choices.filter(choice =>
            choice.name.toLowerCase()
                .indexOf(filter.toLowerCase()) !== -1
        );
        if (section) {
            return filteredChoices.filter(choice => (
                choice.setting === section
            ));
        }
        return filteredChoices;
    }

    handleClose() {
        this.setState({
            filter: "",
            activeSectionIndex: 0
        });
    }

    getItemComponent(item) {
        const { type, onSelect } = this.props;
        switch (type) {
            case 'lifepath':
                return <Lifepath
                    key={`${item.setting}-${item.name}`}
                    lifepath={item}
                    onClick={() => onSelect(item)}
                />;
            case 'skill':
                return <Skill
                    key={item.name}
                    skill={item}
                    onClick={() => onSelect(item)}
                />;
            case 'trait':
                return <Trait
                    key={item.name}
                    trait={item}
                    onClick={() => onSelect(item)}
                />;
            default:
                <p>No component for item type</p>
        }
    }

    handleSectionChange(index) {
        this.setState({
            activeSectionIndex: index
        });
    }

    render() {
        const {
            header,
            sections
        } = this.props;
        const {
            filter,
            activeSectionIndex
        } = this.state;
        const choices = this.getFilteredChoices(
            sections ? sections[activeSectionIndex] : ''
        );
        const components = choices.map(choice => (
            this.getItemComponent(choice)
        ));
        return (
            <Modal
                className="AddModal"
                trigger={<Button icon="add" size="mini" positive circular />}
                size="large"
                onClose={this.handleClose}
            >
                <Modal.Header>{header}</Modal.Header>
                <Modal.Content scrolling>
                    {sections && <div className="ContentHeader">
                        <Input
                            icon='search'
                            placeholder='Search...'
                            text={filter}
                            onChange={this.handleFilterChange}
                        />
                        <Header as="h2">
                            {sections[activeSectionIndex]} Setting
                        </Header>
                    </div>}
                    <div className="choices">
                        {components.length !== 0
                            ? components
                            : <p className="NoContent">TODO: filter empty sections.</p>
                        }
                    </div>
                </Modal.Content>
                {sections && <Modal.Actions>
                    <SectionChanger
                        sections={sections}
                        activeIndex={activeSectionIndex}
                        onClick={(_, index) => this.handleSectionChange(index)}
                    />
                </Modal.Actions>}
            </Modal>
        );
    }
}

export default AddModal;