import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };

    static defaultProps = {
        className: '',
        style: null
    };

    render() {
        const {style, className, children} = this.props;
        return (
            <div style={style}
                 className={classnames('x-modal-footer', className)}
            >{children}</div>
        );
    }
}
