import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSelect from 'react-select'

function Select(props) {
    const {className, disabled, isMulti, size, isSearchable, isClearable, isRtl, options, value, noOptionsMessage, placeholder, onChange} = props;
    return (
        <ReactSelect
            className={classnames('x-select', size ? `x-select-${size}` : null, className)}
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
            isRtl={isRtl}
        />
    )
}

Select.propTypes = {
    className: PropTypes.string,
    noOptionsMessage: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.string
}

Select.defaultProps = {
    className: '',
    noOptionsMessage: () => '结果不存在',
    placeholder: '请选择要输入的内容',
    size: ''
}

export default Select;
