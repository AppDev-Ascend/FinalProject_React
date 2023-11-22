import { useState } from 'react';
import { marked } from 'marked';

const CustomMarkdownEditor = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      style={{ width: '100%', height: '200px' }}
    />
  );
};

const TextEditor = () => {

    const [markdown, setMarkdown] = useState(
        `# Hello, world!

        This is a Markdown-formatted text.
    
        * This is a list item.
        * This is another list item.
    
        [This is a link](https://example.com).`
    );
    return (
        <div>
          <CustomMarkdownEditor value={markdown} onChange={setMarkdown} />
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        </div>
    );
}

export default TextEditor