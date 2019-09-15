import React from "react";
import { Button } from 'semantic-ui-react'
import './PointCounter.scss';

const PointCounter = ({
    value,
    min,
    max,
    canIncrease,
    onIncrease,
    onDecrease
}) => {
    return (
        <div className="PointCounter">
            <Button
                icon="minus"
                disabled={value === min}
                onClick={onDecrease}
                circular
            />
            <p>{value}</p>
            <Button
                icon="add"
                disabled={!canIncrease || value === max}
                onClick={onIncrease}
                circular
            />
        </div>
    );
};

export default PointCounter;