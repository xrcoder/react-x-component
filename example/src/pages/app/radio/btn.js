import React from 'react';
import {Radio, Box, Button} from 'react-x-component';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    value: 1,
                    label: '苹果'
                },
                {
                    value: 2,
                    label: '桃子'
                },
                {
                    value: 3,
                    label: '猕猴桃'
                },
                {
                    value: 4,
                    label: '牛油果'
                },
                {
                    value: 5,
                    label: '香蕉'
                }
            ],
            selected: {
                value: 5,
                label: '香蕉'
            }
        }
    }

    render() {
        return (
            <Box>
                <Box.Header>基本使用</Box.Header>
                <Box.Body>
                    <Radio.BtnGroup
                        options={this.state.data}
                        value={this.state.selected}
                        onChange={(res) => {
                            this.setState({
                                selected: res
                            })
                        }}></Radio.BtnGroup>
                    <Radio.BtnGroup
                        style={{marginTop: '10px'}}
                        options={this.state.data}
                        value={this.state.selected}
                        type={'danger'}
                        onChange={(res) => {
                            this.setState({
                                selected: res
                            })
                        }}></Radio.BtnGroup>
                </Box.Body>
                <Box.Body>
                    <span>当前选中：{JSON.stringify(this.state.selected)}</span>
                </Box.Body>
                <Box.Footer>
                    <Button.Box align={'left'}>
                        <Button onClick={() => {
                            this.setState({
                                selected: {
                                    value: 2,
                                    label: '桃子'
                                }
                            })
                        }}>重置</Button>
                        <Button onClick={() => {
                            this.setState({
                                selected: null
                            })
                        }}>清空</Button>
                    </Button.Box>
                </Box.Footer>
            </Box>
        )
    }
}
