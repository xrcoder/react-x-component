import React, { Component } from 'react';
// import './index.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { XIcon } from '../icon';

class XButtonGroup extends Component {
    constructor(props) {
        super(props),
        this.state={
            selectedValue:props.selectedValue
        }
    }
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'warning']),
        size: PropTypes.oneOf(['lg', 'md', 'sm'])
    };

    static defaultProps = {
        type: 'default',
        size: 'md'
    };

    getIcon() {
        return this.props.icon ? <XIcon type={`${this.props.icon}`}></XIcon> : null
    }
    getLoadingIcon() {
        return <XIcon type={'refresh'}></XIcon>
    }

    render() {
        let btnClass = classnames({
            'x-btn': true,
            'x-btn-primary': this.props.type === 'primary',
            'x-btn-warning': this.props.type === 'warning',
            'x-btn-lg': this.props.size === 'lg',
            'x-btn-sm': this.props.size === 'sm',
            'x-btn-disable': this.props.disabled,
            'x-btn-loading': this.props.loading
        });
        return (
            <ul className="x-buttonGroup">
                {
                    this.props.data.map(item=>{
                        return (
                            <li className={`x-buttonGroup-li ${item.value==this.state.selectedValue?'x-buttonGroup-li-active':null}`} onClick={()=>{
                                this.setState({
                                    selectedValue:item.value
                                })
                                this.props.onChange(item);
                            }}>{item.label}</li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default XButtonGroup;