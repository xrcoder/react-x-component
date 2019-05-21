import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {
    static propTypes = {
        classnames: PropTypes.string
    };

    static defaultProps = {
        classnames: ''
    };

    render() {
        return (
            <div className={classnames('x-modal-footer', this.props.className)}>{this.props.children}</div>
        );
    }
}
