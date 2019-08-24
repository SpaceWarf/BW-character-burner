import React from "react";
import { connect } from 'react-redux';
import LifepathEditor from './LifepathEditor/LifepathEditor.jsx';
import './EditorContent.scss';

const EditorContent = ({ activeSection }) => {
    return (
        <div className="EditorContent">
            {activeSection === 'Lifepaths' && <LifepathEditor />}
        </div>
    );
};

const mapStateToProps = state => ({
    activeSection: state.editor.activeSection,
});


const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorContent);