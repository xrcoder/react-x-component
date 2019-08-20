import React from 'react'
import Templete from '../templete'
import ApiTable from '../templete/api_table'
import { Icon } from 'react-x-component'
import './index.scss'

export default () => {
    const PrimaryContent = () => {
        return (
            <>
                <Icon name='plus' />
                <Icon name='adjust' />
            </>
        )
    }

    const primaryCode = `
    <>
        <Icon name='plus' />
        <Icon name='adjust' />
    </>`

    const ClassContent = () => {
        return (
            <>
                <Icon name='plus' />
                <Icon name='adjust' className='red-color' />
            </>
        )
    }

    const ClassCode = `
    <>
        <Icon name='plus' />
        <Icon name='adjust' className='red-color' />
    </>`

    const apiData = [
        ['className', '自定义样式', 'String', '', '--'],
        ['name', 'fontasome中对应icon的值', 'String', '', '--'],
    ]

    return (
        <div className='doc-icon'>
            {Templete('基本使用', PrimaryContent, primaryCode)}
            {Templete('自定义className', ClassContent, ClassCode)}
            {ApiTable(apiData)}
        </div>
    )
}