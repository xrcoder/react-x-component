import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: null
    };

    render() {
        return (
            <div className={classnames('x-modal-header', this.props.className)} style={this.props.style}>
                <div className="title">{this.props.children}</div>
                <div className="close" onClick={this.props.cancel}></div>
            </div>
        );
    }
}
