import React from "react";
import { Card, Icon } from 'semantic-ui-react';
import CustomCard from '../Card.jsx';
import '../Card.scss';

const Lifepath = ({ lifepath, centered, linkable, showSetting, positive, onClick }) => {
    return (
        <CustomCard
            item={lifepath}
            centered={centered}
            onClick={onClick}
            positive={positive}
        >
            <Card.Content>
                <Card.Header className='with-description'>
                    {linkable && <Icon
                        name='linkify'
                        onClick={() => window.location.href = `#${lifepath.name.replace(/\s/g, '')}`}
                        link
                    />}
                    <div className='header-content'>
                        <p className='fourths'>{lifepath.name}</p>
                        {showSetting &&
                            <p className='fifths centered'>{lifepath.setting}</p>}
                        <p className='fifths centered'>{lifepath.time} yrs</p>
                        <p className='fifths centered'>{lifepath.res}</p>
                        <p className='fifths centered'>{lifepath.stat ?
                            `${lifepath.stat.bonus >= 0 ? '+' : '-'} ${Math.abs(lifepath.stat.bonus)} ${lifepath.stat.attributes}`
                            : '—'
                        }</p>
                    </div>
                    <p className='left content'>{lifepath.leads.join(', ')}</p>
                </Card.Header>
                <Card.Description>
                    {lifepath.skills.generalPoints &&
                        <p><b>General Skills</b>: {lifepath.skills.generalPoints} pts</p>
                    }
                    {lifepath.skills.points &&
                        <p><b>Skills</b>: {lifepath.skills.points} pts
                        {lifepath.skills.from ?
                                ` — ${lifepath.skills.from.join(', ')}` : ''
                            }
                        </p>
                    }
                    {lifepath.traits.points &&
                        <p><b>Traits</b>: {lifepath.traits.points} pts
                        {lifepath.traits.from ?
                                ` — ${lifepath.traits.from.join(', ')}` : ''
                            }
                        </p>
                    }
                </Card.Description>
            </Card.Content>
        </CustomCard>
    );
};

export default Lifepath;