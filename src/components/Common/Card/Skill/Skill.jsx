import React from "react";
import { Card, Icon, Menu } from 'semantic-ui-react';
import CustomCard from '../Card.jsx';
import '../Card.scss';

const Skill = ({ skill, centered, linkable, onClick }) => {
    return (
        <CustomCard
            item={skill}
            centered={centered}
            onClick={onClick}
        >
            <Card.Content>
                <Card.Header className={!skill.isWiseSkill ? 'with-description' : ''}>
                    {linkable && <Icon
                        name='linkify'
                        onClick={() => window.location.href = `#${skill.name.replace(/\s/g, '')}`}
                        link
                    />}
                    <div className='header-content'>
                        <p className='halfs'>{skill.name}</p>
                        {skill.skillType && <p className='halfs centered'>{skill.skillType}</p>}
                    </div>
                    <p className='left content'>{(skill.roots || []).join(', ')}</p>
                </Card.Header>
                {!skill.isWiseSkill && <Card.Description>
                    {skill.description &&
                        <p>{skill.description}</p>
                    }
                    {skill.FoRKs &&
                        <p><b>FoRKs</b>: {skill.FoRKs.join(', ')}</p>
                    }
                    {skill.tools &&
                        <p><b>Tools</b>: Yes.
                            {skill.tools.expendable &&
                                ' Expendable.'
                            }
                            {skill.tools.type &&
                                ` ${skill.tools.type}.`
                            }</p>
                    }
                </Card.Description>}
            </Card.Content>
        </CustomCard>
    );
};

export default Skill;