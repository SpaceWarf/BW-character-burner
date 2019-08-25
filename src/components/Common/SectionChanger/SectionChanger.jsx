import React from "react";
import { Button, Icon } from 'semantic-ui-react';
import './SectionChanger.scss';

const SectionChanger = ({ sections, activeIndex, lockedSections = [], onClick, inverted }) => {
    const previousSection = sections[activeIndex - 1];
    const nextSection = sections[activeIndex + 1]
    return (
        <div className="container">
            <div className="box">
                {previousSection
                    ? <Button
                        onClick={() => onClick(previousSection, activeIndex - 1)}
                        inverted={inverted}
                    >
                        <Icon name="angle left" />
                        {previousSection}
                    </Button>
                    : <div />
                }
            </div>
            <div className="box">
                <p>{activeIndex + 1} / {sections.length}</p>
            </div>
            <div className="box">
                {nextSection
                    ? <Button
                        disabled={lockedSections.includes(nextSection)}
                        onClick={() => onClick(nextSection, activeIndex + 1)}
                        inverted={inverted}
                    >
                        {nextSection}
                        <Icon name="angle right" />
                    </Button>
                    : <div />
                }
            </div>
        </div>
    );
};

export default SectionChanger;