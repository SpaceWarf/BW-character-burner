import React from "react";
import { Card } from 'semantic-ui-react';
import CustomInput from 'Components/Common/CustomInput/CustomInput.jsx';
import './ResourceCard.scss';

const ResourceCard = ({ item, active, disabled, onClick, onConfirm, onCancel }) => {
    return (
        <Card
            key={item.name}
            className={disabled ? "ResourceCard disabled" : "ResourceCard"}
            onClick={disabled ? null : () => onClick(item.name)}
        >
            <Card.Content>
                <Card.Header>
                    <p>{item.name}</p>
                    <p>{item.price} rps</p>
                </Card.Header>
                {active
                    ? <CustomInput placeholder="Notes..." onConfirm={note => onConfirm(note)} onCancel={onCancel} />
                    : <Card.Description>{item.description}</Card.Description>
                }
            </Card.Content>
        </Card>
    );
};

export default ResourceCard;