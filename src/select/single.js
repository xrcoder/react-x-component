import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSelect from 'react-select'

function Select({className, disabled, isMulti, isSearchable, isClearable, options, value, noOptionsMessage, placeholder, onChange}) {
    return (
        <ReactSelect
            className={classnames('x-select', className)}
            classNamePrefix="x-select"
            isSearchable={isSearchable}
            isDisabled={disabled}
            isMulti={isMulti}
            isClearable={isClearable}
            value={value}
            placeholder={placeholder}
            noOptionsMessage={noOptionsMessage}
            options={options}
            onChange={onChange}
        />
    )
}

Select.propTypes = {
    className: PropTypes.string,
    noOptionsMessage: PropTypes.func,
    placeholder: PropTypes.string
}

Select.defaultProps = {
    className: '',
    noOptionsMessage: () => '结果不存在',
    placeholder: '请选择要输入的内容'
}

export default Select;

