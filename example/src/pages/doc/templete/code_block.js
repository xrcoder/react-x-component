import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeBlock extends React.PureComponent {
  render() {
    const { value } = this.props;

    return (
      <SyntaxHighlighter language="language-jsx" style={vs}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;