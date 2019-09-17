import React from "react";
import { Header, Checkbox } from 'semantic-ui-react';
import './ModalQuestion.scss';

const ModalQuestion = ({ question, hint, checked, onChange }) => {
    return (
        <div className="ModalQuestion">
            <div className="Question">
                <Header as="h3">{question}</Header>
                <i>{hint}</i>
            </div>
            <Checkbox checked={checked} />
        </div>
    );
};

export default ModalQuestion;