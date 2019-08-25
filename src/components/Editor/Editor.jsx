import React from "react";
import EditorSidebar from './EditorSidebar/EditorSidebar.jsx';
import EditorContent from './EditorContent/EditorContent.jsx';
import EditorFooter from './EditorFooter/EditorFooter.jsx'
import './Editor.scss';

const Editor = () => {
    return (
        <div className="Editor">
            <EditorSidebar />
            <div className="MainSection">
                <EditorContent />
                <EditorFooter />
            </div>
        </div>
    );
};

export default Editor;