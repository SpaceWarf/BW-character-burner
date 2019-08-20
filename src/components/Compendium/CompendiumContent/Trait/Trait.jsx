import React from "react";
import { Card } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';
import './Trait.scss';
import { Menu } from "semantic-ui-react";

const Trait = ({ trait }) => {
    return (
        <Menu.Item className="Trait">
            <Card>
                <Card.Content>
                    <Card.Header>
                        <p>{trait.name}</p>
                        <p>{trait.type}</p>
                        <p>{trait.cost ? `${trait.cost} pts` : ''}</p>
                    </Card.Header>
                    {trait.description && <Card.Description>
                        <p>{trait.description}</p>
                    </Card.Description>}
                </Card.Content>
            </Card>
        </Menu.Item>
    );
};

export default Trait;