import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class extends React.Component {
    render() {
        return (
            <aside className={classnames('x-b-sidebar', this.props.className)} style={this.props.style}>
                {this.props.children}
            </aside>
        );
    }
}