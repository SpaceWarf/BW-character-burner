import React from "react";
import { Card, Header } from 'semantic-ui-react';
import './PoolCard.scss';

const PoolCard = ({ header, pool, bonus }) => {
    return (
        <Card className="Pool">
            <Card.Content>
                <Card.Header>
                    <Header as='h3'>
                        {header}
                    </Header>
                    <p>{`${pool + bonus} (${pool} + ${bonus})`}</p>
                </Card.Header>
            </Card.Content>
        </Card>
    );
};

export default PoolCard;