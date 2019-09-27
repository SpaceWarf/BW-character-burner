import React from "react";
import { connect } from 'react-redux';
import { Modal, Button, Header } from 'semantic-ui-react';
import ModalQuestion from '../ModalQuestion/ModalQuestion.jsx';
import { answerHealthQuestions } from '#Actions/editor.js';
import { getBaseHealthScore } from '#Utilities/redux-selectors.js';
import { getHealthScoreBonusFromAnswers } from '#Utilities/data-selectors.js';
import './HealthModal.scss';

class HealthModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            answers: {}
        };
        this.handleAnswerQuestion = this.handleAnswerQuestion.bind(this);
        this.getPopulatedAnswers = this.getPopulatedAnswers.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleAnswerQuestion(question, checked) {
        const { answers } = this.state;
        const updatedAnswers = { ...answers };
        updatedAnswers[question] = checked;
        this.setState({
            answers: updatedAnswers
        });
    };

    getPopulatedAnswers() {
        const { healthAnswers } = this.props;
        const { answers } = this.state;
        const populatedAnswers = { ...answers };
        Object.keys(healthAnswers).forEach(answer => {
            if (populatedAnswers[answer] === undefined) {
                populatedAnswers[answer] = healthAnswers[answer];
            }
        });
        return populatedAnswers;
    }

    handleConfirm() {
        const { onAnswerHealthQuestions } = this.props;
        const { answers } = this.state;
        onAnswerHealthQuestions(answers);
        this.handleClose();
    }

    handleClose() {
        this.setState({
            open: false,
            answers: {}
        });
    }

    render() {
        const { baseHealthScore } = this.props;
        const { open } = this.state;
        const populatedAnswers = this.getPopulatedAnswers();
        const appliedBonus = getHealthScoreBonusFromAnswers(populatedAnswers);
        const scoreString = appliedBonus >= 0
            ? `${baseHealthScore + appliedBonus} (${baseHealthScore} + ${appliedBonus})`
            : `${baseHealthScore + appliedBonus} (${baseHealthScore} - ${Math.abs(appliedBonus)})`;
        return (
            <Modal
                trigger={<Button onClick={() => this.setState({ open: true })} icon="question" size="mini" circular />}
                open={open}
                onClose={this.handleClose}
                className={"HealthModal"}
            >
                <Modal.Header>Health Questions</Modal.Header>
                <Modal.Content>
                    <ModalQuestion
                        question="Does the character live in squalor and filth?"
                        hint="Substract 1 from the starting Health"
                        checked={populatedAnswers.liveInFilth}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('liveInFilth', checked)}
                    />
                    <ModalQuestion
                        question="Is the character frail or sickly?"
                        hint="Substract 1 from the starting Health"
                        checked={populatedAnswers.isFrail}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('isFrail', checked)}
                    />
                    <ModalQuestion
                        question="Was the character severely wounded in the past?"
                        hint="Substract 1 from the starting Health"
                        checked={populatedAnswers.isSeverelyWounded}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('isSeverelyWounded', checked)}
                    />
                    <ModalQuestion
                        question="Has the character been tortured or enslaved?"
                        hint="Substract 1 from the starting Health"
                        checked={populatedAnswers.wasTortured}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('wasTortured', checked)}
                    />
                    <ModalQuestion
                        question="Is the character a Dwarf, Elf or Orc?"
                        hint="Add 1 from the starting Health due to their mystical/immortal nature"
                        checked={populatedAnswers.isNotMan}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('isNotMan', checked)}
                    />
                    <ModalQuestion
                        question="Is the character athletic and active?"
                        hint="Add 1 from the starting Health"
                        checked={populatedAnswers.isAthletic}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('isAthletic', checked)}
                    />
                    <ModalQuestion
                        question={`Does the character live in a really clean and happy place (like the hills from The Sound of Music)?`}
                        hint="Add 1 from the starting Health"
                        checked={populatedAnswers.liveInCleanPlace}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('liveInCleanPlace', checked)}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Header as="h2">Health score: {scoreString}</Header>
                    <div>
                        <Button
                            onClick={this.handleConfirm}
                            positive
                        >Confirm</Button>
                        <Button
                            onClick={this.handleClose}
                            negative
                        >Cancel</Button>
                    </div>
                </Modal.Actions>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    baseHealthScore: getBaseHealthScore(state),
    healthAnswers: state.editor.attributes.healthAnswers
});


const mapDispatchToProps = dispatch => ({
    onAnswerHealthQuestions: answers => dispatch(answerHealthQuestions(answers))
});

export default connect(mapStateToProps, mapDispatchToProps)(HealthModal);
