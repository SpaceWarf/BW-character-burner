import React from "react";
import { Card } from 'semantic-ui-react';
import PointCounter from '#Components/Common/PointCounter/PointCounter.jsx';
import './StatCard.scss';

const StatCard = ({ stat, value, onChange }) => {
    return (
        <Card className="StatCard">
            <Card.Content>
                <Card.Header>
                    <p>{stat}</p>
                    <PointCounter
                        value={value}
                        min={1}
                        max={6}
                        onIncrease={() => onChange(value + 1)}
                        onDecrease={() => onChange(value - 1)}
                        canIncrease
                    />
                </Card.Header>
            </Card.Content>
        </Card>
    );
};

export default StatCard;