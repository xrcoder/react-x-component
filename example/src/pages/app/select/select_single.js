import React from 'react';
import {Box, DropdownSelect, Button, Form} from 'react-x-component';

import {stateOptions} from './data';

export default class extends React.Component {

    constructor() {
        super()
        this.state = {
            value: {value: 'AL', label: 'Alabama'}
        }
    }

    render() {

        return (
            <Box>
                <Box.Header>单选</Box.Header>
                <Box.Body>
                    <Form.Group horizontal>
                        <Form.Name required>美国地区</Form.Name>
                        <DropdownSelect.Single
                            options={stateOptions}
                            value={this.state.value}
                            onChange={(value) => {
                                this.setState({
                                    value: value
                                })
                            }}/>
                    </Form.Group>
                </Box.Body>
                <Box.Footer className={'clearfix'}>
                    <Button style={{float: 'right'}} onClick={() => {
                        this.setState({
                            value: null
                        });
                    }}>清空</Button>
                </Box.Footer>
            </Box>
        );
    }
}

