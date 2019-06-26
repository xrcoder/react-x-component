import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        type: PropTypes.oneOf(['default', 'primary', 'warning']),
        size: PropTypes.oneOf(['lg', 'md', 'sm']),
        disabled: PropTypes.bool,// 是否禁用
        inverse: PropTypes.bool,// 是否反色
        onClick: PropTypes.func,
        style: PropTypes.object
    };

    static defaultProps = {
        type: 'default',
        size: 'md',
        inverse: false,
        disabled: false,
        style: null
    };

    render() {
        const {className, style, onClick, disabled} = this.props;
        let btnClass = classnames({
            'x-btn': true,// default
            'x-btn-primary': this.props.type === 'primary',
            'x-btn-warning': this.props.type === 'warning',
            'x-btn-lg': this.props.size === 'lg',
            'x-btn-sm': this.props.size === 'sm',
            'x-btn-disable': this.props.disabled,
            'x-btn-inverse': this.props.inverse
        }, className);
        return (
            <button
                style={style}
                className={btnClass}
                onClick={(e) => {
                    if (disabled) {
                        return;
                    }
                    onClick && onClick(e);
                }}
            >
                {this.props.children}
            </button>
        );
    }

}
