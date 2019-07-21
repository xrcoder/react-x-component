import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function selectStyles(searchControl) {

    const control = function (provided) {
        return {
            ...provided,
            margin: 8,
            display: searchControl ? 'flex' : 'none'
        }
    };

    const menu = function () {
        return null;
    };

    return {control, menu}
}

function useToggleOpen(v) {
    const [isOpen, setIsOpen] = useState(v);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return {isOpen, toggleOpen}
}

function DropdownBlanket(props) {
    return (
        <div style={{position: 'fixed', bottom: 0, left: 0, top: 0, right: 0, zIndex: 1}} {...props}/>
    )
}

function DropdownContainer({children, className, isOpen, onClose}) {
    return (
        <div className={classnames('x-dropdown', className)}>
            {children[0]}
            {isOpen ? children[1] : null}
            {isOpen ? <DropdownBlanket onClick={onClose}/> : null}
        </div>
    )
}

function DropdownSelectTarget({placeholder, data, isOpen, onClick}) {

    let styles = isOpen ? {zIndex: 2} : null;

    return (
        <div className={classnames('x-select-target', {'x-select-target-focus': isOpen})}
             style={styles}
             onClick={onClick}>
            {
                data ? data.label : <span className="x-placeholder">{placeholder}</span>
            }
        </div>
    )
}

function SingleSelect(props) {

    const {className, options, value, placeholder, searchControl, onChange} = props;
    const openStatus = useToggleOpen(false);
    const [selectValue, setSelectValue] = useState(value);

    useEffect(() => {
        setSelectValue(value);
    }, [value]);

    return (
        <DropdownContainer isOpen={openStatus.isOpen} className={className} onClose={openStatus.toggleOpen}>
            <DropdownSelectTarget
                placeholder={placeholder}
                data={selectValue}
                isOpen={openStatus.isOpen}
                onClick={openStatus.toggleOpen}
            />
            <Select
                className="x-select-main"
                classNamePrefix="x-select"
                menuIsOpen
                value={selectValue}
                styles={selectStyles(searchControl)}
                options={options}
                onChange={(v) => {
                    setSelectValue(v);
                    onChange(v);
                    openStatus.toggleOpen();
                }}
            />
        </DropdownContainer>
    )
}

SingleSelect.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.object,
    searchControl: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

SingleSelect.defaultProps = {
    className: '',
    options: [],
    value: null,
    searchControl: false,
    placeholder: '请选择要输入的内容',
    onChange: function () {
    }
}

export default SingleSelect;
