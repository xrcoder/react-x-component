import react, { useState } from 'react'
import './index.scss'
import ReactMarkdown from 'react-markdown'
import codeBlock from './code_block'

const CodeContent = (props) => {
    return (
            <ReactMarkdown
                className='markdown-body'
                skipHtml={true}
                escapeHtml={true}
                source={props.source}
                renderers={{
                    code: codeBlock,
                }}
            />
    )
}

export default (headerText,ComContent, source) => {
    let [show, setShow] = useState(false)
    return (
        <div className="doc-templete">
            <h4>{headerText}</h4>
            <div className="component-content">
                <ComContent />
            </div>

            <div className={`code-content ${show ? 'content-show-true' : 'content-show-false'}`}>
                <CodeContent source={source}/>
            </div>
            <div className='templete-footer' onClick={() => {
                setShow(!show)
            }}>
                {
                    show ? '隐藏代码' : '显示代码'
                }
            </div>
        </div>
    )
}