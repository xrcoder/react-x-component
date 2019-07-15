import React, {Fragment} from 'react';
import {Toggle} from 'react-x-component';

export default class extends React.Component {
    render() {
        return (
            <div className="doc-wrap toggle">
                <Toggle>
                    <Toggle.Header>Toggle Header</Toggle.Header>
                    <Toggle.Body>Toggle Body</Toggle.Body>
                </Toggle>
            </div>
        );
    }
}
