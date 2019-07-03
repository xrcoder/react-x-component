import React from 'react';
import PropTypes from 'prop-types';

class XTooltip extends React.Component {

    static propTypes = {
        position: PropTypes.oneOf(['top', 'left', 'right','bottom'])
    };

    static defaultProps = {
        position:'right'
    };

    constructor(props) {
        super(props);
        this.state = {
            position: this.props.position || 'right',
            content: this.props.content
        }
    }

    render() {
        return (
            <span className={`${localStorage.getItem('direction')=='right'?'x-tooltip-i18n':'x-tooltip'} ${this.props.className}`}>
                <span className="top">{this.props.children}</span>
                <span className={`box box-${this.props.position}`}>{this.props.content}</span>
            </span>
        );
    }
}

export default XTooltip;