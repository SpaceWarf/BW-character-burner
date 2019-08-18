import React from "react";
import { Card } from 'semantic-ui-react';
import './Lifepath.scss';
import { Menu } from "semantic-ui-react";

const Lifepath = ({ lifepath }) => {
    return (
        <Menu.Item className="Lifepath">
            <Card>
                <Card.Content>
                    <Card.Header>
                        <p>{lifepath.name}</p>
                        <p>{lifepath.time} yrs</p>
                        <p>{lifepath.res}</p>
                        <p>{lifepath.stat ?
                            `+ ${lifepath.stat.bonus} ${lifepath.stat.attributes}`
                            : '—'
                        }</p>
                        <p>{lifepath.leads.join(', ')}</p>
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