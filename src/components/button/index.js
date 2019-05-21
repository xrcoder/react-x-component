import React, { Component } from 'react';
// import './index.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import XIcon from '../icon';

class XButton extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'warning']),
        size: PropTypes.oneOf(['lg', 'md', 'sm'])
    };

    static defaultProps = {
        type: 'default',
        size: 'md'
    };

    getIcon() {
        return this.props.icon ? <XIcon type={`${this.props.icon}`}></XIcon> : null
    }
    getLoadingIcon() {
        return <XIcon type={'refresh'}></XIcon>
    }

    render() {
        let btnClass = classnames({
            'x-btn': true,
            'x-btn-primary': this.props.type === 'primary',
            'x-btn-warning': this.props.type === 'warning',
            'x-btn-lg': this.props.size === 'lg',
            'x-btn-sm': this.props.size === 'sm',
            'x-btn-disable': this.props.disabled,
            'x-btn-loading': this.props.loading
        });
        return (
            this.props.loading == true ? <button {...this.props} className={btnClass}>{this.getLoadingIcon()}{this.props.children}</button> :
                <button {...this.props} className={btnClass}>{this.getIcon()}{this.props.children}</button>
        )
    }

}

export default XButton;