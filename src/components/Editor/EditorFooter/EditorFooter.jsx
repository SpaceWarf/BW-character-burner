import React from "react";
import { connect } from 'react-redux';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { setActiveSection } from '#Actions/editor.js';
import { sections } from '#Utilities/config/editor.config.js';
import './EditorFooter.scss';

const EditorFooter = ({ activeSection, lockedSections, onSetActiveSection }) => {
    const activeIndex = sections.indexOf(activeSection);
    const previousSection = sections[activeIndex - 1];
    const nextSection = sections[activeIndex + 1]
    return (
        <Menu
            className="EditorFooter"
            attached="bottom"
            inverted
        >
            <div className="container">
                <div className="box">
                    {previousSection
                        ? <Button
                            onClick={() => onSetActiveSection(previousSection)}
                            inverted
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
                            onClick={() => onSetActiveSection(nextSection)}
                            inverted
                        >
                            {nextSection}
                            <Icon name="angle right" />
                        </Button>
                        : <div />
                    }
                </div>
            </div>
        </Menu>
    );
};

const mapStateToProps = state => ({
    activeSection: state.editor.activeSection,
    lockedSections: state.editor.lockedSections
});


const mapDispatchToProps = dispatch => ({
    onSetActiveSection: section => dispatch(setActiveSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorFooter);
