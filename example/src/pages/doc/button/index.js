import React, { Fragment } from 'react'
import Templete from '../templete'
import { Button, Row, Col, Box, Icon, ButtonGroup, ButtonIcon, Input } from 'react-x-component'
import ReactMarkdown from 'react-markdown'
import codeBlock from '../templete/code-block'
import './index.scss'


export default () => {
    const ComContent = () => {
        return (
            <div className="doc-btn-type">
                <Button>default</Button>
                <Button type="primary">primary</Button>
                <Button type="primary" inverse={true}>primary</Button>
                <Button type="danger">danger</Button>
                <Button type="danger" inverse={true}>danger</Button>
            </div>
        )
    }
    const CodeContent = () => {

        const source = `
        <div className="doc-btn-type">
            <Button>default</Button>
            <Button type="primary">primary</Button>
            <Button type="primary" inverse={true}>primary</Button>
            <Button type="danger">danger</Button>
            <Button type="danger" inverse={true}>danger</Button>
        </div>`

        return (
            <div>
                <ReactMarkdown
                    className="markdown-body"
                    skipHtml={true}
                    escapeHtml={true}
                    source={source}
                    escapeHtml={false}
                    renderers={{
                        code: codeBlock,
                    }}
                />
            </div>
        )
    }
    return (
        <div className="doc-btn">
            <h3>基本类型按钮</h3>
            <br/>
            {Templete(ComContent, CodeContent)}
            <h3>Button</h3>
            {Templete(ComContent, CodeContent)}
        </div>
    )
}
