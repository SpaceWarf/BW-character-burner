import React from "react";
import { Modal, Button } from 'semantic-ui-react';
import Lifepath from '#Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from '#Components/Common/Card/Skill/Skill.jsx';
import Trait from '#Components/Common/Card/Trait/Trait.jsx';
import './CardModal.scss';

const CardModal = ({ data, type }) => {

    const getItemComponents = type => {
        switch (type) {
            case 'lifepath':
                return <Lifepath
                    key={`${data.setting}-${data.name}`}
                    lifepath={data}
                />;
            case 'skill':
                return <Skill
                    key={data.name}
                    skill={data}
                />;
            case 'trait':
                return <Trait
                    key={data.name}
                    trait={data}
                />;
            default:
                <p>No component for item type</p>
        }
    }

    return (
        <Modal
            className="CardModal"
            trigger={<Button icon="info circle" size="mini" />}
            size="large"
        >
            <Modal.Content>
                {getItemComponents(type)}
            </Modal.Content>
        </Modal>
    );
};

export default CardModal;