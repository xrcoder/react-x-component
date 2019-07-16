import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Header extends React.Component {
    render() {
        return (
            <div className={classnames("x-toggle-header", this.props.className)}
                 style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className={classnames("x-toggle-body", this.props.className)}
                 style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

class Toggle extends React.Component {
    static Header = Header;
    static Body = Body;

    render() {
        return (
            <div className="x-toggle-wrapper">
                {this.props.children}
            </div>
        );
    }
};

export default Toggle;
