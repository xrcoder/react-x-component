// import './index.scss';
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
    render() {
        return (
            <div className={classnames('x-box-footer', this.props.className)} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}


export default class extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(['default', 'primary', 'danger', 'info', 'warning']),
    };

    static defaultProps = {
        className: '',
        type: 'default'
    };

    static Header = Header;

    static Body = Body;

    static Footer = Footer;

    render() {
        return (
            <div className={classnames('x-box', this.props.className)}>
                {this.props.children}
            </div>
        )
    }
}

