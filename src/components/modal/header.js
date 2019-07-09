import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';

export default class extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        msg: PropTypes.string
    };

    static defaultProps = {
        className: '',
        msg: ''
    };

    render() {
        console.log(this.props)
        return (
            <div className={classnames('x-modal-header', this.props.className)}>
                <span className="title">{this.props.children}</span>
                <Icon type="close-a" className="close-btn" onClick={()=>{
                    this.props.cancel(this.props.msg)
                }}/>
            </div>
        );
    }
}
