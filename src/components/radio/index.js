import React, { Component } from 'react';
import PropTypes from 'prop-types';
import XIcon from '../icon';

class XRadio extends Component {

    static propTypes = {
        radioList: PropTypes.array
    };

    constructor(props) {
        super(props)
        this.state = {
            activeRadioValue: props.activeRadioValue || props.radioList[0].value
        }
    }

    render() {
        return (
            <div className={localStorage.getItem('direction')=='right'?'x-radio-i18n':'x-radio'}>
                {
                    this.props.radioList.map((item, index) => {
                        if (this.props.checked === false || this.props.checked === true) {
                            return (
                                <div key={item.label + index} className={`x-radio-li ${this.props.checked === true ? 'active-radio' : null} ${item.disable == true ? 'radio-disable' : null}`} onClick={() => {
                                    if (item.disable == true) {
                                        return;
                                    }
                                    if (this.props.cancel == true) {
                                        if (this.props.checked === false) {
                                            this.props.onChange(item)
                                        } else {
                                            this.props.onChange({ value: -1, label: item.label })
                                        }
                                    } else {
                                        this.props.onChange(item)
                                    }
                                }}>
                                    {
                                        this.props.checked === true ?
                                            <XIcon type='radio-selected'></XIcon> : <XIcon type='radio'></XIcon>
                                    }
                                    {item.label}

                                </div>
                            )
                        } else {
                            return (
                                <div key={item.label + index} className={`x-radio-li ${item.value == this.state.activeRadioValue ? 'active-radio' : null} ${item.disable == true ? 'radio-disable' : null}`} onClick={() => {
                                    if (item.disable == true) {
                                        return;
                                    }
                                    if (this.props.cancel == true) {
                                        if (item.value == this.state.activeRadioValue) {
                                            this.setState({
                                                activeRadioValue: -1
                                            })
                                        } else {
                                            this.setState({
                                                activeRadioValue: item.value
                                            })
                                        }
                                    } else {
                                        this.setState({
                                            activeRadioValue: item.value
                                        })
                                    }

                                    this.props.onChange(item)
                                }}>
                                    {
                                        this.state.activeRadioValue == item.value ?
                                            <XIcon type='radio-selected'></XIcon> : <XIcon type='radio'></XIcon>
                                    }
                                    {item.label}

                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default XRadio;