import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSelect from 'react-select'

function Select(props) {
    const {className, disabled, isMulti, size, isSearchable, isClearable, menuIsOpen, isRtl, options, value, noOptionsMessage, placeholder, menuPlacement, components, onChange, noBorder} = props;
    return (
        <ReactSelect
            className={classnames('x-select', size ? `x-select-${size}` : null, className, noBorder ? `x-select-no-border`: null)}
            classNamePrefix="x-select"
            isSearchable={isSearchable}
            components={components}
            isDisabled={disabled}
            isMulti={isMulti}
            isClearable={isClearable}
            value={value}
            placeholder={placeholder}
            noOptionsMessage={noOptionsMessage}
            options={options}
            onChange={onChange}
            isRtl={isRtl}
            menuIsOpen={menuIsOpen}
            menuPlacement={menuPlacement}
        />
    )
}

Select.propTypes = {
    className: PropTypes.string,
    noOptionsMessage: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    noBorder: PropTypes.bool
}

Select.defaultProps = {
    className: '',
    noOptionsMessage: () => '结果不存在',
    placeholder: '请选择要输入的内容',
    size: '',
    noBorder: false
}

export default Select;
