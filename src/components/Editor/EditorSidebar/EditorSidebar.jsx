import React from "react";
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { setActiveSection } from '#Actions/editor.js';
import CollapsableSidebar from '#Components/Common/CollapsableSidebar/CollapsableSidebar.jsx';
import EditorSidebarSummary from './EditorSidebarSummary/EditorSidebarSummary.jsx';
import { sections } from '#Utilities/config/editor.config.js';
import './EditorSidebar.scss';

const EditorSidebar = ({ activeSection, lockedSections, onSetActiveSection }) => {
    return (
        <CollapsableSidebar className="EditorSidebar">
            <div className="content">
                {sections.map((section, index) => (
                    <Menu.Item
                        key={section}
                        active={section === activeSection}
                        disabled={lockedSections.includes(section)}
                        onClick={() => onSetActiveSection(section)}
                    >
                        {index + 1}. {section}
                    </Menu.Item>
                ))}
            </div>
            <EditorSidebarSummary />
        </CollapsableSidebar>
    );
};

const mapStateToProps = state => ({
    activeSection: state.editor.activeSection,
    lockedSections: state.editor.lockedSections
});


const mapDispatchToProps = dispatch => ({
    onSetActiveSection: section => dispatch(setActiveSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorSidebar);
