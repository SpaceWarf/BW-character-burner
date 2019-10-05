import React from "react";
import { Modal, Button, Input, Header, Dropdown } from 'semantic-ui-react';
import Lifepath from '#Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from '#Components/Common/Card/Skill/Skill.jsx';
import Trait from '#Components/Common/Card/Trait/Trait.jsx';
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

    getSectionChoices(choices, section) {
        if (section) {
            return choices.filter(choice => (
                choice.setting === section
            ));
        }
        return choices;
    }

    getFilteredChoices(choices) {
        const { filter } = this.state;
        return choices.filter(choice =>
            choice.name.toLowerCase()
                .indexOf(filter.toLowerCase()) !== -1
        );
    }

    handleClose() {
        this.setState({
            filter: "",
            activeSectionIndex: 0
        });
    }

    getItemComponents(choices) {
        const { type, onSelect } = this.props;

        const components = choices.map(choice => {
            switch (type) {
                case 'lifepath':
                    return <Lifepath
                        key={`${choice.setting}-${choice.name}`}
                        lifepath={choice}
                        onClick={() => onSelect(choice)}
                    />;
                case 'skill':
                    return <Skill
                        key={choice.name}
                        skill={choice}
                        onClick={() => onSelect(choice)}
                    />;
                case 'trait':
                    return <Trait
                        key={choice.name}
                        trait={choice}
                        onClick={() => onSelect(choice)}
                    />;
                default:
                    <p>No component for item type</p>
            }
        });

        return components.length > 0
            ? components
            : <p className="NoContent">No items matching the filter.</p>
    }

    handleSectionChange(index) {
        this.setState({
            activeSectionIndex: index
        });
    }

    render() {
        const {
            header,
            sections,
            choices
        } = this.props;
        const {
            filter,
            activeSectionIndex
        } = this.state;

        const filledSections = sections
            ? sections.filter(section => (
                this.getSectionChoices(choices, section).length > 0
            ))
            : [];
        const activeSection = sections ? filledSections[activeSectionIndex] : '';
        const sectionChoices = this.getSectionChoices(choices, activeSection);
        const filteredChoices = this.getFilteredChoices(sectionChoices);
        const components = this.getItemComponents(filteredChoices);

        return (
            <Modal
                className="AddModal"
                trigger={
                    <div className="AddModalButton">
                        <Button
                            icon="add"
                            size="mini"
                            positive
                            circular
                        />
                    </div>
                }
                size="large"
                onClose={this.handleClose}
            >
                <Modal.Header>{header}</Modal.Header>
                <Modal.Content scrolling>
                    <div className="ContentHeader">
                        {sections
                            ? <div className='SettingsDropdown'>
                                <Header as='h3'>Setting: </Header>
                                <Dropdown
                                    options={
                                        filledSections.map((section, index) => ({
                                            key: section,
                                            text: section,
                                            value: index
                                        }))
                                    }
                                    value={activeSectionIndex}
                                    onChange={(_, { value }) => this.handleSectionChange(value)}
                                    selection
                                    search
                                />
                            </div>
                            : <div />
                        }
                        <Input
                            icon='search'
                            placeholder='Search...'
                            text={filter}
                            onChange={this.handleFilterChange}
                        />
                    </div>
                    <div className="choices">
                        {components}
                    </div>
                </Modal.Content>
            </Modal>
        );
    }
}

export default AddModal;