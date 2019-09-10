import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function (props) {
    return (
        <SyntaxHighlighter language="javascript" style={prism}>
            {props.children}
        </SyntaxHighlighter>
    )
}
