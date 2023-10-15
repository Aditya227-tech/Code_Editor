import React, { Component } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css"; // Update this import
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import ReactDOM from "react-dom";
import CodeEditor from "./CodeEditor.js"; // Import your CodeEditor component

const root = document.getElementById("root");
ReactDOM.render(<CodeEditor />, root);
