import React from 'react'
import Templete from '../templete'
import { Box, Icon } from 'react-x-component'

export default () => {
    const PrimaryContent = () => {
        return (
            <Box>
                <Box.Header>基础使用（标题）</Box.Header>
                <Box.Body>
                    <p>box的内容</p>
                    <p>box的内容</p>
                </Box.Body>
                <Box.Footer>盒子Footer（尾部）</Box.Footer>
            </Box>
        )
    }

    const primaryCode = `
    <Box>
        <Box.Header>基础使用（标题）</Box.Header>
        <Box.Body>
            <p>box的内容</p>
            <p>box的内容</p>
        </Box.Body>
        <Box.Footer>盒子Footer（尾部）</Box.Footer>
    </Box>`

    const ClassContent = () => {
        return (
            <Box>
                <Box.Header><Icon name={'user-o'} />带图标Icon的标题</Box.Header>
                <Box.Body>这是一个盒子</Box.Body>
                <Box.Footer>盒子Footer（尾部）</Box.Footer>
            </Box>
        )
    }

    const ClassCode = `
    <Box>
        <Box.Header><Icon name={'user-o'} />带图标Icon的标题</Box.Header>
        <Box.Body>这是一个盒子</Box.Body>
        <Box.Footer>盒子Footer（尾部）</Box.Footer>
    </Box>`

    return (
        <div className='doc-icon'>
            {Templete('基本使用', PrimaryContent, primaryCode)}
            {Templete('带icon的header', ClassContent, ClassCode)}
        </div>
    )
}