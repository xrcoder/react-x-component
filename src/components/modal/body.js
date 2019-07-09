import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {
    static propTypes = {
        propTypes: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    render() {
        return (
            <div className={classnames('x-modal-body', this.props.className)}>{this.props.children}</div>
        );
    }
}
