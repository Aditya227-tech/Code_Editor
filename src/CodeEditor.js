import React, { Component } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlCode: "<h1>Hello, World!</h1>",
      cssCode: "body { background-color: lightblue; }",
      jsCode: 'console.log("Hello, World!");'
    };
  }

  handleCodeChange = (editor, data, code) => {
    this.setState({ [editor]: code });
  };

  render() {
    const { htmlCode, cssCode, jsCode } = this.state;

    return (
      <div>
        <div className="editor-container">
          <div>
            <h3>HTML</h3>
            <CodeMirror
              value={htmlCode}
              options={{
                mode: "xml",
                theme: "material",
                lineNumbers: true
              }}
              onChange={(editor, data, code) =>
                this.handleCodeChange("htmlCode", code)
              }
            />
          </div>
          <div>
            <h3>CSS</h3>
            <CodeMirror
              value={cssCode}
              options={{
                mode: "css",
                theme: "material",
                lineNumbers: true
              }}
              onChange={(editor, data, code) =>
                this.handleCodeChange("cssCode", code)
              }
            />
          </div>
          <div>
            <h3>JavaScript</h3>
            <CodeMirror
              value={jsCode}
              options={{
                mode: "javascript",
                theme: "material",
                lineNumbers: true
              }}
              onChange={(editor, data, code) =>
                this.handleCodeChange("jsCode", code)
              }
            />
          </div>
        </div>
        <div className="output-container">
          <iframe title="HTML Output" srcDoc={htmlCode} />
          <iframe title="CSS Output" srcDoc={`<style>${cssCode}</style>`} />
          <iframe
            title="JavaScript Output"
            srcDoc={`<script>${jsCode}</script>`}
          />
        </div>
      </div>
    );
  }
}

export default CodeEditor;
