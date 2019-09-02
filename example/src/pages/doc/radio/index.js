import React, { useState } from 'react'
import Templete from '../templete'
import { Box, Icon, Radio } from 'react-x-component'
import ApiTable from '../templete/api_table'

export default () => {
    const PrimaryContent = () => {
        const options = [
            {
                value: 1,
                label: '苹果',
                disabled: true
            },
            {
                value: 2,
                label: '桃子'
            },
            {
                value: 3,
                label: '猕猴桃',
                disabled: true
            },
            {
                value: 4,
                label: '牛油果'
            },
            {
                value: 5,
                label: '香蕉'
            }
        ]
        const [selected, setSelected] = useState({ value: 5, label: '香蕉' })
        return (
            <Radio options={options} value={selected} onChange={(res,e) => {
                console.log(res,e,890)
                setSelected(res)
            }}></Radio>
        )
    }

    const primaryCode = `
    const PrimaryContent = () => {
        const options = [
            {
                value: 1,
                label: '苹果',
                disabled: true
            },
            {
                value: 2,
                label: '桃子'
            },
            {
                value: 3,
                label: '猕猴桃',
                disabled: true
            },
            {
                value: 4,
                label: '牛油果'
            },
            {
                value: 5,
                label: '香蕉'
            }
        ]
        const [selected, setSelected] = useState({ value: 5, label: '香蕉' })
        return (
            <Radio options={options} value={selected} onChange={(res) => {
                setSelected(res)
            }}></Radio>
        )
    }`

    const SingleContent = () => {
        let [status, setStatus] = useState(false)
        return (
            <Radio.Item
                value={status}
                label={'男性'}
                onChange={(e, res) => {
                    console.log(res,678)
                    setStatus(res)
                }} />
        )
    }

    const SingleCode = `
    const SingleContent = () => {
        let [status, setStatus] = useState(false)
        return (
            <Radio.Item
                value={status}
                label={'男性'}
                onChange={(e, res) => {
                    setStatus(res)
                }} />
        )
    }`

    const apiData = [
        ['options', `单选的选项，每一项必须是对象，且是{value:'value',label:'label'}的形式`, 'Array', '', '--'],
        ['value', '选中的对象', 'Object', '', '--'],
        ['disabled', '选项对象的属性，该项是否可选中', 'Boolean', 'true,false', 'false'],
        ['onChange', '选项发生改变的回调,有两个参数，第一个参数是选中的对象，第二个是e', 'Function', '--', '--'],
    ]

    return (
        <div className='doc-icon'>
            {Templete('基本使用', PrimaryContent, primaryCode)}
            {Templete('单独使用', SingleContent, SingleCode)}
            {ApiTable(apiData)}
        </div>
    )
}