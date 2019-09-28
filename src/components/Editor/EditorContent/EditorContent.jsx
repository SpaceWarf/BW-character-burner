import React from "react";
import { connect } from 'react-redux';
import LifepathEditor from './LifepathEditor/LifepathEditor.jsx';
import StatsEditor from './StatsEditor/StatsEditor.jsx';
import SkillsEditor from './SkillsEditor/SkillsEditor.jsx';
import TraitsEditor from './TraitsEditor/TraitsEditor.jsx';
import ResourcesEditor from './ResourcesEditor/ResourcesEditor.jsx';
import AttributesEditor from './AttributesEditor/AttributesEditor.jsx';
import './EditorContent.scss';

const EditorContent = ({ activeSection }) => {
    return (
        <div className="EditorContent">
            {activeSection === 'Lifepaths' && <LifepathEditor />}
            {activeSection === 'Stats' && <StatsEditor />}
            {activeSection === 'Skills' && <SkillsEditor />}
            {activeSection === 'Traits' && <TraitsEditor />}
            {activeSection === 'Resources' && <ResourcesEditor />}
            {activeSection === 'Attributes' && <AttributesEditor />}
        </div>
    );
};

const mapStateToProps = state => ({
    activeSection: state.editor.activeSection,
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorContent);