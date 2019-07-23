import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Close from '../close';

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
                <Close className="x-modal-close" onClick={this.props.cancel}/>
            </div>
        );
    }
}
