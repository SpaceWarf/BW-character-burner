import React from "react";
import EditorSidebar from './EditorSidebar/EditorSidebar.jsx';
import EditorContent from './EditorContent/EditorContent.jsx';
import './Editor.scss';

const Editor = () => {
    return (
        <div className="Editor">
            <EditorSidebar />
            <EditorContent />
        </div>
    );
};

export default Editor;