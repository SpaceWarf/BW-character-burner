import React from "react";
import { Card, Icon } from 'semantic-ui-react';
import '../Card.scss';
import { Menu } from "semantic-ui-react";

const Lifepath = ({ lifepath, centered, linkable, onClick }) => {
    return (
        <Menu.Item className="Card Lifepath" id={lifepath.name.replace(/\s/g, '')}>
            <Card className={centered ? 'center' : ''} onClick={onClick}>
                <Card.Content>
                    <Card.Header className='with-description'>
                        {linkable && <Icon
                            name='linkify'
                            onClick={() => window.location.href = `#${lifepath.name.replace(/\s/g, '')}`}
                            link
                        />}
                        <div className='header-content'>
                            <p className='thirds'>{lifepath.name}</p>
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
            </Card>
        </Menu.Item>
    );
};

export default Lifepath;