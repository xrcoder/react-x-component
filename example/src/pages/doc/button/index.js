import React from 'react'
import Templete from '../templete'
import ApiTable from '../templete/api_table'
import { Button,Icon, ButtonGroup, ButtonIcon, Input } from 'react-x-component'
import './index.scss'


export default () => {
    const PrimaryContent = () => {
        return (
            <div className='doc-btn-type'>
                <Button>default</Button>
                <Button type='primary'>primary</Button>
                <Button type='primary' inverse={true}>primary</Button>
                <Button type='danger'>danger</Button>
                <Button type='danger' inverse={true}>danger</Button>
            </div>
        )
    }

    const primaryCode = `
    <div className='doc-btn-type'>
        <Button>default</Button>
        <Button type='primary'>primary</Button>
        <Button type='primary' inverse={true}>primary</Button>
        <Button type='danger'>danger</Button>
        <Button type='danger' inverse={true}>danger</Button>
    </div>`

    const SizeContent = () => {
        return (
            <div className='doc-btn-type'>
                <Button size='lg'>large</Button>
                <Button>medium</Button>
                <Button size='sm'>small</Button>
            </div>
        )
    }

    const SizeCode = `
        <div className='doc-btn-type'>
            <Button size='lg'>large</Button>
            <Button>medium</Button>
            <Button size='sm'>small</Button>
        </div>`

    const IconContent = () => {
        return (
            <div className='doc-btn-type'>
                <ButtonIcon icon='plus'>新增</ButtonIcon>
                <ButtonIcon icon='user'>用户</ButtonIcon>
            </div>
        )
    }

    const IconCode = `
    <div className='doc-btn-type'>
        <ButtonIcon icon='plus'>新增</ButtonIcon>
        <ButtonIcon icon='user'>用户</ButtonIcon>
    </div>`

    const DisableContent = () => {
        return (
            <div className='doc-btn-type'>
                <Button disabled={true}>禁用</Button>
                <ButtonIcon icon='plus' disabled={true}>带Icon禁用</ButtonIcon>
            </div>
        )
    }

    const DisableCode = `
    <div className='doc-btn-type'>
        <Button disabled={true}>禁用</Button>
        <ButtonIcon icon='plus' disabled={true}>带Icon禁用</ButtonIcon>
    </div>`

    const GroupContent = () => {
        return (
            <ButtonGroup>
                <Button type='primary' inverse={true}>常态按钮</Button>
                <Button type='primary'>常态按钮</Button>
                <Button type='primary'>常态按钮</Button>
            </ButtonGroup>
        )
    }

    const GroupCode = `
    <ButtonGroup>
        <Button type='primary' inverse={true}>常态按钮</Button>
        <Button type='primary'>常态按钮</Button>
        <Button type='primary'>常态按钮</Button>
    </ButtonGroup>`

    const LinkContent = () => {
        return (
            <div className='doc-btn-type'>
                <Button.Link type='primary' to='/app/component/button'>跳转</Button.Link>
            </div>
        )
    }

    const LinkCode = `
    <div className='doc-btn-type'>
        <Button.Link type='primary' to='/app/component/button'>跳转</Button.Link>
    </div>`

    const TextContent = () => {
        return (
            <div className='doc-btn-type'>
                <Button type='text'>常态按钮</Button>
                <Button.Link type='text' to='/app/component/button'>跳转按钮</Button.Link>
            </div>
        )
    }

    const TextCode = `
    <div className='doc-btn-type'>
        <Button type='text'>常态按钮</Button>
        <Button.Link type='text' to='/app/component/button'>跳转按钮</Button.Link>
    </div>`

    const PositionContent = () => {
        return (
            <div className='doc-btn-type'>
                <Button.Box align={'left'}>
                    <ButtonIcon icon={'plus'} type='primary' inverse={true}>加号</ButtonIcon>
                    <ButtonIcon icon={'user'} type='primary' inverse={true}>用户</ButtonIcon>
                </Button.Box>
                <Button.Box align={'center'}>
                    <ButtonIcon icon={'plus'} type='primary' inverse={true}>加号</ButtonIcon>
                    <ButtonIcon icon={'user'} type='primary' inverse={true}>用户</ButtonIcon>
                </Button.Box>
                <Button.Box align={'right'}>
                    <ButtonIcon icon={'plus'} type='primary' inverse={true}>加号</ButtonIcon>
                    <ButtonIcon icon={'user'} type='primary' inverse={true}>用户</ButtonIcon>
                </Button.Box>
            </div>
        )
    }

    const PositionCode = `
    <div className='doc-btn-type'>
        <Button.Box align={'left'}>
            <ButtonIcon icon={'plus'} type='primary' inverse={true}>加号</ButtonIcon>
            <ButtonIcon icon={'user'} type='primary' inverse={true}>用户</ButtonIcon>
        </Button.Box>
        <Button.Box align={'center'}>
            <ButtonIcon icon={'plus'} type='primary' inverse={true}>加号</ButtonIcon>
            <ButtonIcon icon={'user'} type='primary' inverse={true}>用户</ButtonIcon>
        </Button.Box>
        <Button.Box align={'left'}>
            <ButtonIcon icon={'plus'} type='primary' inverse={true}>加号</ButtonIcon>
            <ButtonIcon icon={'user'} type='primary' inverse={true}>用户</ButtonIcon>
        </Button.Box>
    </div>`

    const ComposeContent = () => {
        return (
            <>
                <Input.Search><Icon name={'search'} /></Input.Search>
                <Button.Box style={{ display: 'inline-flex', marginLeft: '20px' }}>
                    <Button type='primary' inverse={true}>重置</Button>
                    <Button type='primary' inverse={true}>查询</Button>
                </Button.Box>
            </>
        )
    }

    const ComposeCode = `
    <>
        <Input.Search><Icon name={'search'}/></Input.Search>
        <Button.Box style={{display: 'inline-flex', marginLeft: '20px'}}>
            <Button type='primary' inverse={true}>重置</Button>
            <Button type='primary' inverse={true}>查询</Button>
        </Button.Box>
    </>`

    const apiData = [
        ['disabled', '按钮是否禁用', 'Boolean', 'true,false', 'false'],
        ['icon', '按钮所带的icon', 'String', 'icon对应的值', '--'],
        ['inverse', '反转按钮样式', 'Boolean', 'true,false', 'false'],
        ['type', '不同类型的按钮', 'String', 'primary,danger,text', '--'],
        ['size', '不同大小的按钮', 'String', 'sm,lg', '--']
    ]

    return (
        <div className='doc-btn'>
            {Templete('基本类型按钮', PrimaryContent, primaryCode)}
            {Templete('不同大小按钮', SizeContent, SizeCode)}
            {Templete('带Icon按钮', IconContent, IconCode)}
            {Templete('禁用按钮', DisableContent, DisableCode)}
            {Templete('按钮组', GroupContent, GroupCode)}
            {Templete('链接按钮', LinkContent, LinkCode)}
            {Templete('纯文本按钮', TextContent, TextCode)}
            {Templete('按钮定位器', PositionContent, PositionCode)}
            {Templete('按钮组合', ComposeContent, ComposeCode)}
            {ApiTable(apiData)}
        </div>
    )
}
