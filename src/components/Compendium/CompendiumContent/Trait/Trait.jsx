import React from "react";
import { Card, Icon } from 'semantic-ui-react';
import './Trait.scss';
import { Menu } from "semantic-ui-react";

const Trait = ({ trait }) => {
    return (
        <Menu.Item className="Trait" id={trait.name.replace(/\s/g, '')}>
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Icon
                            name='linkify'
                            onClick={() => window.location.href = `#${trait.name.replace(/\s/g, '')}`}
                            link
                        />
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