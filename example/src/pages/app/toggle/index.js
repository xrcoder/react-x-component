import React, {Fragment} from 'react';
import {Toggle} from 'react-x-component';

export default class extends React.Component {
    render() {
        return (
            <Toggle>
                <Toggle.Header>Toggle Header</Toggle.Header>
                <Toggle.Body>Toggle Body</Toggle.Body>
            </Toggle>
        );
    }
}
