import React, { useState } from 'react'
import Templete from '../templete'
import ApiTable from '../templete/api_table'
import { Form, Input, Icon, Button, Select, Row, Col } from 'react-x-component'
import './index.scss'

export default () => {

    const InputContent = () => {
        let [value, setValue] = useState('')
        return (
            <Input
                value={value}
                onChange={(value) => {
                    setValue(value)
                }} />
        )
    }

    const InputCode = `
    <Input 
        value={value}
        onChange={(value) => {
            setValue(value)
        }} />`



    const BasicContent = () => {
        return (
            <>
                <Form.Group>
                    <Form.Name>基本:</Form.Name>
                    <Input
                        maxLength={11}
                        onChange={(value) => {
                            console.log(value)
                        }} />
                </Form.Group>
                <Form.Group>
                    <Form.Name>清空：</Form.Name>
                    <Input.Clear
                        onClear={(e) => {
                            console.log('clear');
                        }}
                        onChange={(res) => {
                            console.log(res)
                        }} />
                </Form.Group>
                <Form.Group errorMsg={'信息有误'}>
                    <Form.Name>警告：</Form.Name>
                    <Input placeholder={'请输入姓名'} onChange={(value) => {
                        console.log(value);
                    }} />
                </Form.Group>
                <Form.Group>
                    <Form.Name>禁用：</Form.Name>
                    <Input disabled={true} />
                </Form.Group>
                <Button.Box>
                    <Button>清空</Button>
                    <Button>禁用</Button>
                </Button.Box>
            </>
        )
    }

    const BasicCode = `
    <>
        <Form.Group>
            <Form.Name>基本:</Form.Name>
            <Input
                maxLength={11}
                onChange={(value) => {
                    console.log(value)
                }} />
        </Form.Group>
        <Form.Group>
            <Form.Name>清空：</Form.Name>
            <Input.Clear
                onClear={(e) => {
                    console.log('clear');
                }}
                onChange={(res) => {
                    console.log(res)
                }} />
        </Form.Group>
        <Form.Group errorMsg={'信息有误'}>
            <Form.Name>警告：</Form.Name>
            <Input placeholder={'请输入姓名'} onChange={(value) => {
                console.log(value);
            }} />
        </Form.Group>
        <Form.Group>
            <Form.Name>禁用：</Form.Name>
            <Input disabled={true} />
        </Form.Group>
        <Button.Box>
            <Button>清空</Button>
            <Button>禁用</Button>
        </Button.Box>
    </>`

    const ExtendsContent = () => {
        return (
            <>
                <Form.Group>
                    <Form.Name>搜索(组合)：</Form.Name>
                    <Input.Addon
                        value='测试'
                        maxLength={11}
                        onEnter={(res) => {
                            console.log(res);
                        }}
                        onChange={(res, e) => {
                            console.log(res);
                        }}
                        render={() => {
                            return (
                                <Button>搜索</Button>
                            )
                        }} />
                </Form.Group>
                <Form.Group>
                    <Input.Addon render={() => {
                        return <Button>确认</Button>
                    }} />
                </Form.Group>
                <Form.Group>
                    <Form.Name>搜索(单例)：</Form.Name>
                    <Input.Search onEnter={(res) => {
                        console.log(res);
                    }} onChange={(res) => {
                        console.log(res);
                    }} onSearch={(e) => {
                        console.log(e);
                    }}><Icon name={'search'} /></Input.Search>
                </Form.Group>
            </>
        )
    }

    const ExtendsCode = `
    <>
        <Form.Group>
            <Form.Name>搜索(组合)：</Form.Name>
            <Input.Addon
                value='测试'
                maxLength={11}
                onEnter={(res) => {
                    console.log(res);
                }}
                onChange={(res, e) => {
                    console.log(res);
                }}
                render={() => {
                    return (
                        <Button>搜索</Button>
                    )
                }} />
        </Form.Group>
        <Form.Group>
            <Input.Addon render={() => {
                return <Button>确认</Button>
            }} />
        </Form.Group>
        <Form.Group>
            <Form.Name>搜索(单例)：</Form.Name>
            <Input.Search onEnter={(res) => {
                console.log(res);
            }} onChange={(res) => {
                console.log(res);
            }} onSearch={(e) => {
                console.log(e);
            }}><Icon name={'search'} /></Input.Search>
        </Form.Group>
    </>`

    const TextareaContent = () => {
        return (
            <>
                <Form.Group>
                    <Input.Textarea onChange={(res) => {
                        console.log(res);
                    }} />
                </Form.Group>
            </>
        )
    }

    const TextareaCode = `
    <>
        <Form.Group>
            <Input.Textarea onChange={(res) => {
                console.log(res);
            }}/>
        </Form.Group>
    </>`

    const PlusContent = () => {
        let [psd, setPsd] = useState('')
        let [phone, setPhone] = useState('')
        return (
            <>
                <Form.Group>
                    <Form.Name>密码类型输入框带报警提示：</Form.Name>
                    <Input.Passwd
                        placeholder="请输入1-20位的数字"
                        value={psd} reg={/^[0-9]{0,20}$/}
                        maxLength={20}
                        onChange={(res) => {
                            setPsd(res)
                        }} />
                </Form.Group>
                <Form.Group>
                    <Form.Name>手机号输入框：</Form.Name>
                    <Input.Phone
                        placeholder="请输入手机号"
                        value={phone}
                        maxLength={11}
                        onChange={(res) => {
                            setPhone(res)
                        }} />
                </Form.Group>
            </>
        )
    }

    const PlusCode = `
    <>
        <Form.Group>
            <Form.Name>密码类型输入框带报警提示：</Form.Name>
            <Input.Passwd
                placeholder="请输入1-20位的数字"
                value={psd} reg={/^[0-9]{0,20}$/}
                maxLength={20}
                onChange={(res) => {
                    setPsd(res)
                }} />
        </Form.Group>
        <Form.Group>
            <Form.Name>手机号输入框：</Form.Name>
            <Input.Phone
                placeholder="请输入手机号"
                value={phone}
                maxLength={11}
                onChange={(res) => {
                    setPhone(res)
                }} />
        </Form.Group>
    </>`

    const SelectContent = () => {
        const stateOptions = [
            { value: '1', label: '身份证' },
            { value: '2', label: '护照' },
            { value: '3', label: '军官证' },
            { value: '4', label: '户口本' }
        ]
        let [singleValue, setSingleValue] = useState({ value: '1', label: '身份证' })
        let [psd, setPsd] = useState('')
        return (
            <>
                <Input.Group>
                    <Select.Single
                        value={singleValue}
                        options={stateOptions}
                        onChange={(value) => {
                            setSingleValue(value)
                        }} />
                    <Input
                        value={psd}
                        onChange={(res) => {
                            setPsd(res)
                        }} />
                </Input.Group>
                <Form.Group>
                    <Form.Name>证件号码</Form.Name>
                    <Input.Group>
                        <Select.Single
                            value={singleValue}
                            options={stateOptions}
                            onChange={(value) => {
                                setSingleValue(value)
                            }} />
                        <Input
                            value={psd}
                            onChange={(res) => {
                                setPsd(res)
                            }} />
                    </Input.Group>
                </Form.Group>
            </>
        )
    }

    const SelectCode = `
    <>
        <Form.Group>
            <Form.Name>证件号码</Form.Name>
            <Input.Group>
                <Select.Single
                    value={singleValue}
                    options={stateOptions}
                    onChange={(value) => {
                        setSingleValue(value)
                    }} />
                <Input
                    value={psd}
                    onChange={(res) => {
                        setPsd(res)
                    }} />
            </Input.Group>
        </Form.Group>
        <Input.Group>
            <Select.Single
                value={singleValue}
                options={stateOptions}
                onChange={(value) => {
                    setSingleValue(value)
                }} />
            <Input
                value={psd}
                onChange={(res) => {
                    setPsd(res)
                }} />
        </Input.Group>
    </>`

    const ColumnFormContent = () => {
        return (
            <Row>
                <Col md={12}>
                    <Form.Group errorMsg={'密码格式有误'}>
                        <Form.Name>邮件</Form.Name>
                        <Input />
                    </Form.Group>
                    <Form.Group>
                        <Form.Name>账号</Form.Name>
                        <Input />
                    </Form.Group>
                    <Form.Group>
                        <Form.Name>密码</Form.Name>
                        <Input.Clear type={'password'} onChange={(res) => {
                            console.log(res);
                        }} onEnter={(res) => {
                            console.log(res)
                        }} />
                    </Form.Group>
                </Col>
            </Row>
        )
    }

    const ColumnFormCode = `
    <Row>
        <Col md={12}>
            <Form.Group errorMsg={'密码格式有误'}>
                <Form.Name>邮件</Form.Name>
                <Input />
            </Form.Group>
            <Form.Group>
                <Form.Name>账号</Form.Name>
                <Input />
            </Form.Group>
            <Form.Group>
                <Form.Name>密码</Form.Name>
                <Input.Clear type={'password'} onChange={(res) => {
                    console.log(res);
                }} onEnter={(res) => {
                    console.log(res)
                }} />
            </Form.Group>
        </Col>
    </Row>`

    const RowFormContent = () => {
        return (
            <Row>
                <Col md={12}>
                    <Form.Group horizontal required errorMsg={false}>
                        <Form.Name required>访客姓名</Form.Name>
                        <Input />
                    </Form.Group>
                    <Form.Group horizontal required>
                        <Form.Name>证件号码</Form.Name>
                        <Input />
                    </Form.Group>
                    <Form.Group horizontal required>
                        <Form.Name>身份证号</Form.Name>
                        <Input.Clear />
                    </Form.Group>
                </Col>
            </Row>
        )
    }

    const RowFormCode = `
    <Row>
        <Col md={12}>
            <Form.Group horizontal required errorMsg={false}>
                <Form.Name required>访客姓名</Form.Name>
                <Input />
            </Form.Group>
            <Form.Group horizontal required>
                <Form.Name>证件号码</Form.Name>
                <Input/>
            </Form.Group>
            <Form.Group horizontal required>
                <Form.Name>身份证号</Form.Name>
                <Input.Clear />
            </Form.Group>
        </Col>
    </Row>`

    const apiData = [
        ['className', '自定义样式', 'String', '', '--'],
        ['name', 'fontasome中对应icon的值', 'String', '', '--'],
    ]

    return (
        <div className='doc-form'>
            {Templete('输入框', InputContent, InputCode)}
            {Templete('基本输入框', BasicContent, BasicCode)}
            {Templete('扩展输入框', ExtendsContent, ExtendsCode)}
            {Templete('文本域', TextareaContent, TextareaCode)}
            {Templete('高级输入框', PlusContent, PlusCode)}
            {Templete('选择输入框', SelectContent, SelectCode)}
            {Templete('垂直表单', ColumnFormContent, ColumnFormCode)}
            {Templete('水平表单', RowFormContent, RowFormCode)}
            {/* {ApiTable(apiData)} */}
        </div>
    )
}