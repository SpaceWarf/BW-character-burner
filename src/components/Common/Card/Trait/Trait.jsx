import React from "react";
import { Card, Icon, Menu } from 'semantic-ui-react';
import CustomCard from '../Card.jsx';
import '../Card.scss';

const Trait = ({ trait, centered, linkable, onClick }) => {
    return (
        <CustomCard
            item={trait}
            centered={centered}
            onClick={onClick}
        >
            <Card.Content>
                <Card.Header className={trait.description ? 'with-description' : ''}>
                    {linkable && <Icon
                        name='linkify'
                        onClick={() => window.location.href = `#${trait.name.replace(/\s/g, '')}`}
                        link
                    />}
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
        </CustomCard>
    );
};

export default Trait;