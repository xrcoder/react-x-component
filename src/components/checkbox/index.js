import React, { Component } from 'react';
// import './index.scss';
import PropTypes from 'prop-types';
import XIcon from '../icon';

class XCheckbox extends Component {

    static propTypes = {
        selectedValueList: PropTypes.array,
        checkboxList: PropTypes.array
    };

    constructor(props) {
        super(props)
        this.state = {
            selectedValueList: props.selectedValueList || [],
            selectedList: [],
            checkboxList: props.checkboxList
        }
    }

    componentDidMount() {
        let arr = [];
        let checkboxList = JSON.parse(JSON.stringify(this.state.checkboxList))
        let selectedValueList = JSON.parse(JSON.stringify(this.state.selectedValueList))
        checkboxList.map(item => {
            if (selectedValueList.indexOf(item.value) != -1) {
                item.selected = true
                arr.push(item)
            } else {
                item.selected = false
            }
        })

        this.setState({
            selectedList: arr,
            checkboxList: checkboxList
        })

    }

    componentWillReceiveProps(props) {
        let arr = [];
        let checkboxList = JSON.parse(JSON.stringify(props.checkboxList))
        let selectedValueList = JSON.parse(JSON.stringify(props.selectedValueList))
        checkboxList.map(item => {
            if (selectedValueList.indexOf(item.value) != -1) {
                item.selected = true
                arr.push(item)
            } else {
                item.selected = false
            }
        })

        this.setState({
            selectedList: arr,
            checkboxList: checkboxList
        })

    }

    render() {
        return (
            <div className="x-checkbox">
                {
                    this.state.checkboxList.map((item, index) => {
                        if (this.props.checked === false || this.props.checked === true) {
                            return (
                                <div key={item.label + index} className={`x-checkbox-li ${this.props.checked ? 'active-checkbox' : null} ${item.disable == true ? 'checkbox-disable' : null}`} onClick={() => {

                                    if (item.disable) {
                                        return
                                    }
                                    if (this.props.checked === false) {
                                        item.selected = true
                                        this.props.onChange([item])
                                    } else {
                                        item.selected = false
                                        this.props.onChange([item])
                                    }

                                }}>
                                    {
                                        this.props.checked == true ?
                                            <XIcon type='checkbox-selected'></XIcon> : <XIcon type='checkbox'></XIcon>
                                    }
                                    {item.label}

                                </div>
                            )
                        } else {
                            return (
                                <div key={item.label + index} className={`x-checkbox-li ${item.selected ? 'active-checkbox' : null} ${item.disable == true ? 'checkbox-disable' : null}`} onClick={() => {

                                    if (item.disable) {
                                        return
                                    }

                                    let arr = JSON.parse(JSON.stringify(this.state.selectedList))
                                    let selected = false;
                                    let selected_index;
                                    arr.length && arr.map((item_, index) => {
                                        if (item_.value == item.value && item_.label == item.label) {
                                            selected = true;
                                            selected_index = index
                                        }
                                    })

                                    // let arr = JSON.parse(JSON.stringify(this.state.selectedList))
                                    if (selected) {
                                        item.selected = false;
                                        arr.splice(selected_index, 1)
                                        this.setState({
                                            selectedList: arr
                                        })
                                    } else {
                                        item.selected = true;
                                        arr.push(item);
                                        this.setState({
                                            selectedList: arr
                                        })
                                    }

                                    this.props.onChange(arr)
                                }}>
                                    {
                                        item.selected == true ?
                                            <XIcon type='checkbox-selected'></XIcon> : <XIcon type='checkbox'></XIcon>
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

export default XCheckbox;