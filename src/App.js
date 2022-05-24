import { React, useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  marked.setOptions({ breaks: true });

  const [text, setText] = useState(`

  # h1 Title
  ## h2 Title

  [link](https://www.example.com)

  \`const code = () => console.log("This is a code")\`

  \`\`\`
  { This is a code block }
  \`\`\`

  1. This is a
  2. Ordered
  3. List

  > | this is a blockquote

  **this is a bold text**
    
  ![img](https://www.luiztools.com.br/wp-content/uploads/2020/06/reactJS.png)
  `);

  return (
    <div className="App">
      <h3 className="title">Input Markdown</h3>
      <textarea
        id="editor"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <h3 className="title">Previewer</h3>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default App;
