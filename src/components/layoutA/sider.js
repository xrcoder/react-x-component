import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class extends React.Component {
    render() {
        return (
            <aside className={classnames('x-a-sidebar', this.props.className)} style={this.props.style}>
                <div className="x-a-logo">{this.props.logo}</div>
                <div className="x-a-sidebar-content">{this.props.children}</div>
            </aside>
        );
    }
}