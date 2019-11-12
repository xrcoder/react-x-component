import React from 'react';
import {DatePicker, DateRangePicker, TimePicker, Row, Col, Box, Table, Button} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import dateMd from './date.md';

import datepickerEx from './examples/datepicker.x';
import daterangepickerEx from './examples/daterangepicker.x';
import timepickerEx from './examples/timepicker.x';
import datetimepickerEx from './examples/datetimepicker.x';
import datetimerangepickerEx from './examples/datetimerangepicker.x';

export default class extends React.Component {
    daterangepicker2 = null;

    constructor(props) {
        super(props);
        this.state = {
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            value5: null
        }
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>时间选择器</Box.Header>
                        <Box.Body><Markdown content={dateMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>TimePicker-时间选择器</Box.Header>
                        <Box.Body>
                            <TimePicker 
                                value={this.state.value3}
                                placeholder={'请选择时间'}
                                selectableRange="00:30:00 - 23:00:00"
                                format={'HH:mm'}
                                onChange={(time) => {
                                    this.setState({
                                        value3: time
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{timepickerEx}</Prism>
                        </Box.Footer>
                    </Box>
                    
                    <Box>
                        <Box.Header>DatePicker-日期选择器</Box.Header>
                        <Box.Body>
                            <DatePicker 
                                value={this.state.value1}
                                placeholder="请选择日期"
                                onChange={(date) => {
                                    this.setState({
                                        value1: date
                                    })
                                }}
                                disabledDate={(date) => {
                                    return date.getTime() < Date.now() - 8.64e7;    //8.64e7 一天时间的毫秒数
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{datepickerEx}</Prism>
                        </Box.Footer>
                    </Box>

                    <Box>
                        <Box.Header>DatePicker-日期时间选择器</Box.Header>
                        <Box.Body>
                            <DatePicker 
                                value={this.state.value4}
                                isShowTime={true}
                                placeholder={'请选择'}
                                format={'yyyy-MM-DD HH:mm:ss'}
                                onChange={(time) => {
                                    this.setState({
                                        value4: time
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{datetimepickerEx}</Prism>
                        </Box.Footer>
                    </Box>

                    <Box>
                        <Box.Header>DateRangePicker-日期范围选择器</Box.Header>
                        <Box.Body>
                            <DateRangePicker 
                                value={this.state.value2}
                                onChange={(date) => {
                                    this.setState({
                                        value2: date
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{daterangepickerEx}</Prism>
                        </Box.Footer>
                    </Box>
                    
                    <Box>
                        <Box.Header>DateRangePicker-日期时间范围选择器</Box.Header>
                        <Box.Body>
                            <DateRangePicker
                                value={this.state.value5}
                                format={'yyyy-MM-DD HH:mm'}
                                isShowTime={true}
                                onChange={(date) => {
                                    this.setState({
                                        value5: date
                                    })
                                }}
                                ref={e=>this.daterangepicker2 = e}
                                shortcuts={[{
                                    text: '一周',
                                    onClick: ()=> {
                                      const end = new Date();
                                      const start = new Date();
                                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        
                                      this.setState({value5: [start, end]})
                                      this.daterangepicker2.togglePickerVisible()
                                    }
                                }, {
                                    text: '一个月',
                                    onClick: ()=> {
                                      const end = new Date();
                                      const start = new Date();
                                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        
                                      this.setState({value5: [start, end]})
                                      this.daterangepicker2.togglePickerVisible()
                                    }
                                }, {
                                    text: '三个月',
                                    onClick: ()=> {
                                      const end = new Date();
                                      const start = new Date();
                                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                      this.setState({value5: [start, end]})
                                      this.daterangepicker2.togglePickerVisible()
                                    }
                                }]}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{datetimerangepickerEx}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>TimePicker Attributes</Box.Header>
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
                                        <Td>value</Td>
                                        <Td>Date</Td>
                                        <Td>-</Td>
                                        <Td>当前选中的时间</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>selectableRange</Td>
                                        <Td>string/string[]</Td>
                                        <Td>-</Td>
                                        <Td>可选时间段，如['09:30:00 - 12:00:00', '14:00:00 - 19:00:00']</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>placeholder</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>占位文案</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>isReadOnly</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否制度</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>isDisabled</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否禁用</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onFocus</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onBlur</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onChange</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>func:(value)=>()</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>DatePicker Attributes</Box.Header>
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
                                        <Td>value</Td>
                                        <Td>Date</Td>
                                        <Td>-</Td>
                                        <Td>当前选中的日期时间</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>placeholder</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>占位文案</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>disabledDate</Td>
                                        <Td>(Date)=>boolean</Td>
                                        <Td>-</Td>
                                        <Td>禁用日期范围</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>isReadOnly</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否只读</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>isDisabled</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否禁用</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>isShowTime</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否显示时间选项</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>shortcuts</Td>
                                        <Td>{'{text: string, onClick: () => {}}[]'}</Td>
                                        <Td>-</Td>
                                        <Td>快捷选项</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>DateRangePicker Attributes</Box.Header>
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
                                        <Td>同DatePicker</Td>
                                        <Td>同DatePicker</Td>
                                        <Td>同DatePicker</Td>
                                        <Td>同DatePicker</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>rangeSeparator</Td>
                                        <Td>string</Td>
                                        <Td>'-'</Td>
                                        <Td>选择范围分隔符</Td>
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
