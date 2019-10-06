import React from "react";
import { Card, Header } from 'semantic-ui-react';
import './PoolCard.scss';

const PoolCard = ({ header, pool, bonus }) => {
    const totalBonus = bonus.applied + bonus.stat;
    const bonusString = totalBonus >= 0 ? `+ ${totalBonus}` : `- ${Math.abs(totalBonus)}`;
    return (
        <Card className="Pool">
            <Card.Content>
                <Card.Header>
                    <Header as='h3'>
                        {header}
                    </Header>
                    <p>{`${pool + bonus.applied} (${pool - bonus.stat} ${bonusString})`}</p>
                </Card.Header>
            </Card.Content>
        </Card>
    );
};

export default PoolCard;