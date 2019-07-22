import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        align: PropTypes.oneOf(['left', 'center', 'right'])
    };

    static defaultProps = {
        className: '',
        style: null,
        align: 'right'
    };

    render() {
        const {align, style, className, children} = this.props;
        return (
            <div style={style}
                 className={classnames('x-modal-footer', `x-modal-footer-${align}`, className)}
            >{children}</div>
        );
    }
}
