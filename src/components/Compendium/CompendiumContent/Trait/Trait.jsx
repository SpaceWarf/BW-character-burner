import React from "react";
import { Card, Icon } from 'semantic-ui-react';
import './Trait.scss';
import { Menu } from "semantic-ui-react";

const Trait = ({ trait }) => {
    return (
        <Menu.Item className="Card Trait" id={trait.name.replace(/\s/g, '')}>
            <Card>
                <Card.Content>
                    <Card.Header className={trait.description ? 'with-description' : ''}>
                        <Icon
                            name='linkify'
                            onClick={() => window.location.href = `#${trait.name.replace(/\s/g, '')}`}
                            link
                        />
                        <div className='header-content'>
                            <p className='halfs'>{trait.name}</p>
                            <p className='halfs centered'>{trait.type}</p>
                        </div>
                        <p className='left content'>{trait.cost ? `${trait.cost} pts` : ''}</p>
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