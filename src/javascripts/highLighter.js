import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

class Highlighter extends React.Component {
  render() {
    let codeString = 
    `(num) => num + 1;\nlet x = x + 1;`;
    return <SyntaxHighlighter language='javascript' style={docco} showLineNumbers={true} wrapLines>{codeString}</SyntaxHighlighter>;  
  }
}

export default Highlighter;