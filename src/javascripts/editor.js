import React from 'react'
import CodeMirror  from 'react-codemirror';
import styles from 'codemirror/lib/codemirror.css';

var Editor = React.createClass({
	getInitialState: function() {
		return {
			code: "// Code",
		};
	},
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});
  },
  getValue: function() {
    console.log(this.state.code);
  },
	render: function() {
		var options = {
			lineNumbers: true,
		};
    return (
      <div>
      <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
      <button onClick={this.getValue}>Submit</button>
      </div>
    )
	}
});

export default Editor;