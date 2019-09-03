import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Header extends React.Component {
    render() {
        return (
            <div className={classnames('x-box-header', this.props.className)}
                 style={this.props.style}
            >{this.props.children}</div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className={classnames('x-box-body', this.props.className)}
                 style={this.props.style}>{this.props.children}</div>
        )
    }
}

class Footer extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: null
    };

    render() {
        const {align, style, className, children} = this.props;
        return (
            <div className={classnames('x-box-footer', className)} style={style}>
                {children}
            </div>
        )
    }
}

export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'warning']),
        nogap: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        type: 'default',
        nogap: false
    };

    static Header = Header;

    static Body = Body;

    static Footer = Footer;

    render() {
        let t = this;
        let {children, nogap, className} = t.props;
        return (
            <div className={classnames('x-box', {'x-box-nogap': nogap}, className)}>{children}</div>
        )
    }
}

