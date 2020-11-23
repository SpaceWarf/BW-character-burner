import React from "react";
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import SectionChanger from 'Components/Common/SectionChanger/SectionChanger.jsx';
import { setActiveSection } from 'Actions/editor.js';
import { sections } from 'Utilities/config/editor.config.js';
import './EditorFooter.scss';

const EditorFooter = ({ activeSection, lockedSections, onSetActiveSection }) => {
    const activeIndex = sections.indexOf(activeSection);
    return (
        <Menu
            className="EditorFooter"
            attached="bottom"
            inverted
        >
            <SectionChanger
                sections={sections}
                activeIndex={activeIndex}
                lockedSections={lockedSections}
                onClick={onSetActiveSection}
                inverted
            />
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
