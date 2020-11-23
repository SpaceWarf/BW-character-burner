import React from "react";
import { Modal, Button } from 'semantic-ui-react';
import Lifepath from 'Components/Common/Card/Lifepath/Lifepath.jsx';
import Skill from 'Components/Common/Card/Skill/Skill.jsx';
import Trait from 'Components/Common/Card/Trait/Trait.jsx';
import './CardListModal.scss';

const CardListModal = ({ header, data, type, simple }) => {

    const getItemComponents = type => {
        return data.map(item => {
            switch (type) {
                case 'lifepath':
                    return <Lifepath
                        key={`${item.setting}-${item.name}`}
                        lifepath={item}
                    />;
                case 'skill':
                    return <Skill
                        key={item.name}
                        skill={item}
                    />;
                case 'trait':
                    return <Trait
                        key={item.name}
                        trait={item}
                    />;
                default:
                    <p>No component for item type</p>
            }
        })
    }

    return (
        <Modal
            className={`CardListModal ${simple ? "Single" : ""}`}
            trigger={<Button icon="info circle" size="mini" />}
            size="small"
            closeIcon
        >
            {header && !simple &&
                <Modal.Header>
                    {header}
                </Modal.Header>
            }
            <Modal.Content>
                {getItemComponents(type)}
            </Modal.Content>
        </Modal>
    );
};

export default CardListModal;