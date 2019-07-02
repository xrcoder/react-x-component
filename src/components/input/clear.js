import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';

import Input from './input';
import Group from './group';

export default class extends React.Component {

    constructor() {
        super()
        this.state = {
            isShow: false
        }
    }

    render() {
        return (
            <Group className={classnames(this.props.className)}>
                <Input {...this.props} onFocus={() => {
                    this.setState({
                        isShow: true
                    })
                }} onBlur={() => {
                    this.setState({
                        isShow: false
                    })
                }}/>
                {
                    this.state.isShow && <Icon className={'clear-btn'} name={'times-circle'} onClick={() => {

                    }}/>
                }
            </Group>
        )
    }
}