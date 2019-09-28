import React from "react";
import { Card } from 'semantic-ui-react';
import './Attribute.scss';

const Attribute = ({ name, value, description, QuestionModal }) => {
    return (
        <Card className="Attribute">
            <Card.Content>
                <Card.Header>
                    <p className='thirds'>{name}</p>
                    <p className='thirds center'>{value}</p>
                    <p className='thirds left'>
                        {QuestionModal && <QuestionModal />}
                    </p>
                </Card.Header>
                <Card.Description>
                    <p>{description}</p>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default Attribute;