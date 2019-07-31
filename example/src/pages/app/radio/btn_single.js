import React from 'react';
import {Radio, Box, Button} from 'react-x-component';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            disabled: true
        }
    }

    render() {
        return (
            <Box>
                <Box.Header>按钮单选</Box.Header>
                <Box.Body>
                    <Radio.Btn
                        value={this.state.status}
                        label={'男性'}
                        disabled={this.state.disabled}
                        onChange={(e, res) => {
                            this.setState({
                                status: res
                            })
                        }}/>
                </Box.Body>
                <Box.Body>
                    <span>当前状态：{JSON.stringify(this.state.status)}</span>
                </Box.Body>
                <Box.Footer>
                    <Button.Box align={'left'}>
                        <Button onClick={() => {
                            this.setState({
                                status: false
                            })
                        }}>重置</Button>
                        <Button onClick={() => {
                            this.setState({
                                disabled: !this.state.disabled
                            })
                        }}>禁用</Button>
                    </Button.Box>
                </Box.Footer>
            </Box>
        )
    }
}
