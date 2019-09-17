import React from "react";
import { Modal, Button } from 'semantic-ui-react';
import ModalQuestion from '../ModalQuestion/ModalQuestion.jsx';
import './HealthModal.scss';

const HealthModal = ({ }) => {
    return (
        <Modal
            trigger={<Button icon="question" size="mini" circular />}
        >
            <Modal.Header>Health Questions</Modal.Header>
            <Modal.Content>
                <ModalQuestion
                    question="Does the character live in squalor and filth?"
                    hint="Substract 1 from the starting Health"
                    checked={false}
                    onChange={() => { }}
                />
                <ModalQuestion
                    question="Is the character frail or sickly?"
                    hint="Substract 1 from the starting Health"
                    checked={false}
                    onChange={() => { }}
                />
                <ModalQuestion
                    question="Was the character severely wounded in the past?"
                    hint="Substract 1 from the starting Health"
                    checked={false}
                    onChange={() => { }}
                />
                <ModalQuestion
                    question="Has the character been tortured or enslaved?"
                    hint="Substract 1 from the starting Health"
                    checked={false}
                    onChange={() => { }}
                />
                <ModalQuestion
                    question="Is the character a Dwarf, Elf or Orc?"
                    hint="Add 1 from the starting Health"
                    checked={false}
                    onChange={() => { }}
                />
                <ModalQuestion
                    question="Is the character athletic and active?"
                    hint="Add 1 from the starting Health"
                    checked={false}
                    onChange={() => { }}
                />
                <ModalQuestion
                    question={`Does the character live in a really clean and happy place\n(like the hills from The Sound of Music)?`}
                    hint="Add 1 from the starting Health"
                    checked={false}
                    onChange={() => { }}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button positive>Confirm</Button>
                <Button negative>Cancel</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default HealthModal;