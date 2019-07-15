import React, {Component} from 'react';
import classnames from 'classnames';

export default class extends Component {
    render() {
        const {className, style, onClick, disabled} = this.props;
        let btnClass = classnames({
            'x-btn': true,
            'x-btn-primary': this.props.type === 'primary',
            'x-btn-danger': this.props.type === 'danger',
            'x-btn-lg': this.props.size === 'lg',
            'x-btn-sm': this.props.size === 'sm',
            'x-btn-inverse': this.props.inverse
        }, className);
        return (
            <button style={style} className={btnClass} disabled={disabled} onClick={(e) => {
                onClick && onClick(e);
            }}>{this.props.children}</button>
        );
    }
}
