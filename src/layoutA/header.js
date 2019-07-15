import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class extends React.Component {
    render() {
        return (
            <header className={classnames('x-a-header', this.props.className)}
                    style={this.props.style}>
                {this.props.children}
            </header>
        );
    }
}
