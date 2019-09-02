import React from 'react'
import Templete from '../templete'
import ApiTable from '../templete/api_table'
import { Row, Col, Tooltip, Icon, Popper, Button } from 'react-x-component'
import './index.scss'

export default () => {
    const PrimaryContent = () => {
        return (
            <Row>
                <Col md={3}>
                    <Tooltip useStyle={{ display: 'inline-block' }} content={'框的内容这是提示框的内容这是提示框的内容'}>
                        提示框在上方
                    </Tooltip>
                </Col>
                <Col md={3}>
                    <Tooltip useStyle={{ display: 'inline-block' }} direction={'down'}
                        content={'框的内容这是提示框的内容这是提示框的内容'}>
                        提示框在下方
                    </Tooltip>
                </Col>
                <Col md={3}>
                    <Tooltip useStyle={{ display: 'inline-block' }} direction={'right'}
                        content={'框的内容这是提示框的内容这是提示框的内容'}>
                        提示框在右方
                    </Tooltip>
                </Col>
                <Col md={3}>
                    <Tooltip useStyle={{ display: 'inline-block' }} direction={'right'}
                        content={'框的内容这是提示框的内容这是提示框的内容'}>
                        提示框在左方
                    </Tooltip>
                </Col>
            </Row>
        )
    }

    const primaryCode = `
    <Row>
        <Col md={3}>
            <Tooltip useStyle={{display: 'inline-block'}} content={'框的内容这是提示框的内容这是提示框的内容'}>
                提示框在上方
            </Tooltip>
        </Col>
        <Col md={3}>
            <Tooltip useStyle={{display: 'inline-block'}} direction={'down'}
                        content={'框的内容这是提示框的内容这是提示框的内容'}>
                提示框在下方
            </Tooltip>
        </Col>
        <Col md={3}>
            <Tooltip useStyle={{display: 'inline-block'}} direction={'right'}
                        content={'框的内容这是提示框的内容这是提示框的内容'}>
                提示框在右方
            </Tooltip>
        </Col>
        <Col md={3}>
            <Tooltip useStyle={{display: 'inline-block'}} direction={'right'}
                        content={'框的内容这是提示框的内容这是提示框的内容'}>
                提示框在左方
            </Tooltip>
        </Col>
    </Row>`

    const ClickContent = () => {
        return (
            <Row>
                <Col md={6}>
                    <Popper placement="left" trigger="click" content={
                        <span>框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容</span>}>
                        <Button onClick={() => {
                            console.log('hello world')
                        }}>我是按钮</Button> 
                    </Popper>
                </Col>
                <Col md={6}>
                    <Tooltip useStyle={{ display: 'inline-block' }} eventToggle="onClick"
                        content={'框的内容这是提示框的内容这是提示框的内容'}>
                        点击打开和关闭
                    </Tooltip>
                </Col>
            </Row>
        )
    }

    const ClickCode = `
    <Row>
        <Col md={6}>
            <Tooltip useStyle={{ display: 'inline-block' }} eventToggle="onClick"
                content={'框的内容这是提示框的内容这是提示框的内容'}>
                点击打开和关闭
            </Tooltip>
        </Col>
        <Col md={6}>
            <Tooltip useStyle={{ display: 'inline-block' }} eventToggle="onClick"
                content={'框的内容这是提示框的内容这是提示框的内容'}>
                点击打开和关闭
            </Tooltip>
        </Col>
    </Row>`

    const apiData = [
        ['useStyle', '自定义样式', 'Object', '', '--'],
        ['placement', '提示内容出现的位置', 'String', 'up,down,left,right', 'up'],
        ['content', '提示框的内容', 'string|ReactNode', '', '--'],
        ['eventToggle', '触发提示框的事件', 'String', 'react的事件名字', '默认hover触发'],
    ]

    return (
        <div className='doc-icon'>
            {Templete('基本使用', PrimaryContent, primaryCode)}
            {Templete('点击出现', ClickContent, ClickCode)}
            {ApiTable(apiData)}
        </div>
    )
}