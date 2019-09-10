import ReactMarkdown from 'react-markdown';

export default function ({content}) {
    return (
        <ReactMarkdown source={content}/>
    )
}
