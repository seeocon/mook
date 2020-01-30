
import React, { Component } from 'react';
import CodeMirror from '@skidding/react-codemirror';

import "./editor.module.css";

require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/base16-dark.css');
require('codemirror/addon/scroll/simplescrollbars.js')
require('./editor.module.css');

class Editor extends Component {
  constructor(props) {
    super(props);

    this.updateCode = this.updateCode.bind(this);
  }

	updateCode(e) {
    this.props.onChange(e);
	}

  render() {
    var options = {
      mode: 'markdown',
      theme: 'base16-dark',
      lineNumbers: true,
      scrollbarStyle: "overlay"
    }
    return (
      <CodeMirror
        lineNumbers={true}
        value={this.props.value} onChange={this.updateCode}
        options={options} height="100%"
        />
    );
  }
}

export default Editor;
