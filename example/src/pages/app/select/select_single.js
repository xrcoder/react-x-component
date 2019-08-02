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
                    <DropdownSelect></DropdownSelect>
                </Box.Body>
            </Box>
        );
    }
}

