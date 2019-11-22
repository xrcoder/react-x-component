import React from 'react';
import { Box, Row, Col, Table, Form, Input, Icon, Button, Select } from 'react-x-component';
import { Prism, Markdown } from 'components';
const { Tr, Td, Th } = Table;

import normalInput from './examples/normalInput.x';
import disabledInput from './examples/disabledInput.x';
import clearInput from './examples/clearInput.x';
import errorInput from './examples/errorInput.x';
import searchInput from './examples/searchInput.x';
import customInput from './examples/customInput.x';
import selectInput from './examples/selectInput.x';
import phoneInput from './examples/phoneInput.x';
import passwordInput from './examples/passwordInput.x';
import textareaForm from './examples/textareaForm.x';

import FormMd from './form.md';
import './doc.scss';

const stateOptions = [
    { value: '1', label: '身份证' },
    { value: '2', label: '护照' },
    { value: '3', label: '军官证' },
    { value: '4', label: '户口本' }
];


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demo: '',
            disabled: false,
            singleValue: { value: '1', label: '身份证' },
            phone: '',
            password: ''
        }
    }
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Form</Box.Header>
                        <Box.Body><Markdown content={FormMd} /></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>表单项-基本输入框</Box.Header>
                        <Box.Body>
                            <Form.Group className="form-doc">
                                <Form.Name>基本输入框：</Form.Name>
                                <Input
                                    value={this.state.demo}
                                    onChange={(value) => {
                                        this.setState({
                                            demo: value
                                        });
                                    }} />
                            </Form.Group>
                            <Prism>{normalInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>表单项-基本输入框（禁用）</Box.Header>
                        <Box.Body>
                            <Form.Group className="form-doc">
                                <Form.Name>禁用态的输入框：</Form.Name>
                                <Input
                                    disabled={true}
                                    value={'aaa'}
                                />
                            </Form.Group>
                            <Prism>{disabledInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>表单项-带清空按钮</Box.Header>
                        <Box.Body>
                            <Form.Group className="form-doc">
                                <Form.Name>带清空按钮的输入框：</Form.Name>
                                <Input.Clear
                                    value={this.state.demo}
                                    onClear={(e) => {
                                        console.log('clear');
                                    }}
                                    onChange={(res) => {
                                        this.setState({
                                            demo: res
                                        });
                                    }}
                                />
                            </Form.Group>
                            <Prism>{clearInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>表单项-可展示错误信息</Box.Header>
                        <Box.Body>
                            <Form.Group className="form-doc" errorMsg={'这里展示错误信息'}>
                                <Form.Name>可显示错误信息的输入框：</Form.Name>
                                <Input
                                    placeholder={'请输入姓名'}
                                    onChange={(value) => {
                                        console.log(value);
                                    }}
                                />
                            </Form.Group>
                            <Prism>{errorInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>复合输入框-搜索框</Box.Header>
                        <Box.Body>
                            <Form.Group>
                                <Input.Search
                                    className="form-doc"
                                    clear
                                    onEnter={(res) => {
                                        console.log('点击回车的回调函数');
                                    }}
                                    onChange={(res) => {
                                        console.log('值改变的回调函数');
                                    }}
                                    onSearch={(res) => {
                                        console.log('点击搜索的回调函数');
                                    }}
                                >
                                    <Icon name={'search'} />
                                </Input.Search>
                            </Form.Group>
                            <Prism>{searchInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>复合输入框-自定义附加内容</Box.Header>
                        <Box.Body>
                            <Form.Group>
                                <Input.Addon
                                    className="form-doc"
                                    value='自定义附加内容'
                                    onEnter={(res) => {
                                        console.log('点击回车的回调函数');
                                    }}
                                    onChange={(res, e) => {
                                        console.log('值改变的回调函数');
                                    }}
                                    render={() => {
                                        return (
                                            <Button
                                                onClick={() => {
                                                }}>自定义</Button>
                                        )
                                    }}
                                />
                            </Form.Group>
                            <Prism>{customInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>高级输入框-选择输入框</Box.Header>
                        <Box.Body>
                            <Form.Group>
                                <Form.Name>带类型单选的输入框</Form.Name>
                                <Input.Group
                                    className="form-doc"
                                >
                                    <Select.Single
                                        value={this.state.singleValue}
                                        options={stateOptions}
                                        onChange={(value) => {
                                            this.setState({
                                                singleValue: value
                                            });
                                        }} />
                                    <Input
                                        value={this.state.demo}
                                        onChange={(res) => {
                                            this.setState({
                                                demo: res
                                            });
                                        }} />
                                </Input.Group>
                            </Form.Group>
                            <Prism>{selectInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>高级输入框-手机号输入框</Box.Header>
                        <Box.Body>
                            <Form.Group>
                                <Form.Name>手机号输入框(带报错提示)：</Form.Name>
                                <Input.Phone
                                    className="form-doc"
                                    placeholder="请输入手机号"
                                    value={this.state.phone}
                                    maxLength={11}
                                    onChange={(res) => {
                                        this.setState({
                                            phone: res
                                        });
                                    }}
                                />
                            </Form.Group>
                            <Prism>{phoneInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>高级输入框-密码输入框</Box.Header>
                        <Box.Body>
                            <Form.Group>
                                <Form.Name>密码输入框(带报错提示)：</Form.Name>
                                <Input.Passwd
                                    placeholder="请输入1-20位的数字"
                                    value={this.state.password}
                                    reg={/^[0-9]{0,20}$/}
                                    maxLength={20}
                                    onChange={(res) => {
                                        this.setState({
                                            password: res
                                        });
                                    }}
                                />
                            </Form.Group>
                            <Prism>{passwordInput}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>文本域</Box.Header>
                        <Box.Body>
                            <Form.Group>
                                <Form.Name>文本域：</Form.Name>
                                <Input.Textarea onChange={(res) => {
                                    console.log(res);
                                }} />
                            </Form.Group>
                            <Prism>{textareaForm}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Form.Group Attributes</Box.Header>
                        <Box.Body>
                            <Table>
                                <Table.Head>
                                    <Th>参数</Th>
                                    <Th>类型</Th>
                                    <Th>默认值</Th>
                                    <Th>说明</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>''</Td>
                                        <Td>自定义class</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>style</Td>
                                        <Td>object</Td>
                                        <Td>null</Td>
                                        <Td>自定义样式</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>errorMsg</Td>
                                        <Td>string</Td>
                                        <Td>''</Td>
                                        <Td>form表单错误提示信息</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Form.Name Attributes</Box.Header>
                        <Box.Body>
                            <Table>
                                <Table.Head>
                                    <Th>参数</Th>
                                    <Th>类型</Th>
                                    <Th>默认值</Th>
                                    <Th>说明</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>''</Td>
                                        <Td>自定义class</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>style</Td>
                                        <Td>object</Td>
                                        <Td>null</Td>
                                        <Td>自定义样式</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>required</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否展示必填项*符号</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Input Attributes</Box.Header>
                        <Box.Body>
                            <Table>
                                <Table.Head>
                                    <Th>参数</Th>
                                    <Th>类型</Th>
                                    <Th>默认值</Th>
                                    <Th>说明</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>type</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>类型</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>value</Td>
                                        <Td>string, number</Td>
                                        <Td>-</Td>
                                        <Td>绑定值</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>maxLength</Td>
                                        <Td>number</Td>
                                        <Td>-</Td>
                                        <Td>最大输入长度</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>minLength</Td>
                                        <Td>number</Td>
                                        <Td>-</Td>
                                        <Td>最小输入长度</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>placeholder</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>输入框占位符</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>disabled</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>输入框禁用状态</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>自定义class</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>style</Td>
                                        <Td>object</Td>
                                        <Td>-</Td>
                                        <Td>自定义行内样式</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onFocus</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>获取焦点的回调函数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onChange</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>输入框值变化的回调函数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onBlur</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>失去焦点的回调函数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onEnter</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>当获取焦点时，按下回车的回调函数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onClick</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>点击输入框时的回调函数</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
