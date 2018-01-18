import React from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/xcode';

class ACE extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {code: ''};
    this.onClick = this.onClick.bind(this);
  }

  onChange(value) {
    console.log(value);
  }

  onClick() {
    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue());
  }

  render() {
    return (
    <div>
    <AceEditor
    mode="java"
    theme="xcode"
    onChange={this.onChange}
    name="UNIQUE_ID_OF_DIV"
    value={this.state.code}
    editorProps={{$blockScrolling: true}}
    ref={instance => { this.ace = instance; }}
    />
    <button onClick={this.onClick}></button>
    </div>
    );
  }
}

export default ACE;