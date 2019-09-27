import React from "react";
import { connect } from 'react-redux';
import { Modal, Button, Header } from 'semantic-ui-react';
import ModalQuestion from '../ModalQuestion/ModalQuestion.jsx';
import { answerSteelQuestions } from '#Actions/editor.js';
import { getSteelScoreBonusFromAnswers } from '#Utilities/data-selectors.js';
import './SteelModal.scss';

class SteelModal extends React.Component {
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
        const { steelAnswers } = this.props;
        const { answers } = this.state;
        const populatedAnswers = { ...answers };
        Object.keys(steelAnswers).forEach(answer => {
            if (populatedAnswers[answer] === undefined) {
                populatedAnswers[answer] = steelAnswers[answer];
            }
        });
        return populatedAnswers;
    }

    handleConfirm() {
        const { onAnswerSteelQuestions } = this.props;
        const { answers } = this.state;
        onAnswerSteelQuestions(answers);
        this.handleClose();
    }

    handleClose() {
        this.setState({
            open: false,
            answers: {}
        });
    }

    render() {
        const { open } = this.state;
        const populatedAnswers = this.getPopulatedAnswers();
        const appliedBonus = getSteelScoreBonusFromAnswers(populatedAnswers);
        const scoreString = appliedBonus >= 0
            ? `${3 + appliedBonus} (3 + ${appliedBonus})`
            : `${3 + appliedBonus} (3 - ${Math.abs(appliedBonus)})`;
        return (
            <Modal
                trigger={<Button onClick={() => this.setState({ open: true })} icon="question" size="mini" circular />}
                open={open}
                onClose={this.handleClose}
                className={"SteelModal"}
            >
                <Modal.Header>Steel Questions</Modal.Header>
                <Modal.Content>
                    <ModalQuestion
                        question="Has the character taken a conscript, soldier, bandit, squire or knight type lifepath?"
                        hint="Add 1 to Steel"
                        checked={populatedAnswers.wasSoldier}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('wasSoldier', checked)}
                    />
                    <ModalQuestion
                        question="Has the character ever been severely wounded?"
                        hint="If the previous questions's answer is Yes, add 1 to Steel. If not, substract 1 from Steel."
                        checked={populatedAnswers.wasWounded}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('wasWounded', checked)}
                    />
                    <ModalQuestion
                        question="Has the character ever murdered or killed with his own hands more than once?"
                        hint="Add 1 to Steel"
                        checked={populatedAnswers.hasMurdered}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('hasMurdered', checked)}
                    />
                    <ModalQuestion
                        question="Has the character ever been tortured, enslaved or beaten terribly over time?"
                        hint="If his Will is 5 or higher, add 1 to Steel. If his Will is 3 or less, substract 1 from Steel. If his Will is 4, there is no change."
                        checked={populatedAnswers.wasTortured}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('wasTortured', checked)}
                    />
                    <ModalQuestion
                        question="Has the character led a sheltered life, free from violence and pain?"
                        hint="Substract 1 from Steel"
                        checked={populatedAnswers.wasSheltered}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('wasSheltered', checked)}
                    />
                    <ModalQuestion
                        question="Has the character been raised in a competitive, but non-violent, culture (sports, debates, strategy games, courting, etc.)?"
                        hint="Add 1 to Steel"
                        checked={populatedAnswers.isCompetitive}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('isCompetitive', checked)}
                    />
                    <ModalQuestion
                        question="Has the character given birth to a child?"
                        hint="Add 1 to Steel"
                        checked={populatedAnswers.gaveBirth}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('gaveBirth', checked)}
                    />
                    <ModalQuestion
                        question="Is the character Gifter of Faithful or an equivalent?"
                        hint="Add 1 to Steel"
                        checked={populatedAnswers.isGifted}
                        onChange={(_, { checked }) => this.handleAnswerQuestion('isGifted', checked)}
                    />
                    {/** TODO: add stats bonuses */}
                </Modal.Content>
                <Modal.Actions>
                    <Header as="h2">Steel score: {scoreString}</Header>
                    <div>
                        <Button
                            onClick={this.handleClose}
                        >Cancel</Button>
                        <Button
                            onClick={this.handleConfirm}
                            positive
                        >Confirm</Button>
                    </div>
                </Modal.Actions>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    steelAnswers: state.editor.attributes.steelAnswers
});


const mapDispatchToProps = dispatch => ({
    onAnswerSteelQuestions: answers => dispatch(answerSteelQuestions(answers))
});

export default connect(mapStateToProps, mapDispatchToProps)(SteelModal);
