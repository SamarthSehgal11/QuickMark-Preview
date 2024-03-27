import React, { useState } from 'react';
import { marked } from 'marked'; 
import './styles.css'; 

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleInsert = (insertText) => {
    setMarkdown((prevMarkdown) => {
      const { selectionStart, selectionEnd } = document.querySelector('.markdown-textarea'); 
      return (
        prevMarkdown.substring(0, selectionStart) +
        insertText +
        prevMarkdown.substring(selectionEnd)
      );
    });
  };

  return (
    <div>
      <div className="toolbar">
        <button onClick={() => handleInsert('**bold text**')}>Bold</button>
        <button onClick={() => handleInsert('_italic text_')}>Italic</button>
        <button onClick={() => handleInsert('# Heading 1')}>Heading 1</button>
        <button onClick={() => handleInsert('![Alt text](image-url)')}>Image</button>
        {/* Add more buttons for other Markdown elements */}
      </div>
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="# Sample Markdown Input\n\nThis is a *bold* text.\n\nThis is an italic text.\n\n## Heading 2\n\n- Item 1\n- Item 2\n- Item 3\n\n![Markdown Logo](https://markdown-here.com/img/icon256.png)\n\n[Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/)"
        className="markdown-textarea" 
      />
      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownPreviewer;