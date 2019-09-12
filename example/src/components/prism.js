import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function (props) {
    return (
        <SyntaxHighlighter language="javascript" showLineNumbers style={okaidia}>
            {props.children}
        </SyntaxHighlighter>
    )
}
