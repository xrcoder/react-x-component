import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class extends React.Component {
    render() {
        return (
            <footer className={classnames('x-b-footer', this.props.className)} style={this.props.style}>
                {this.props.children}
            </footer>
        );
    }
}