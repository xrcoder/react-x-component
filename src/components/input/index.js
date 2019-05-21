import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import XIcon from '../icon';

class XInput extends React.Component {
    constructor() {
        super();
        this.value = '';
    }

    static propTypes = {
        isError: PropTypes.bool,
        defaultValue: PropTypes.string,
        size: PropTypes.string,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        onChange: PropTypes.func,
        onEnter: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func
    }

    static defaultProps = {
        isError: false,
        defaultValue: '',
        size: 'md',
        placeholder: '请输入',
        onChange: () => {
        },
        onEnter: () => {
        },
        onFocus: () => {
        },
        onBlur: () => {
        }
    }

    render() {
        const {isError, defaultValue, size, placeholder, className, onChange, onEnter, onFocus, onBlur, disabled, icon, search, searchBtn, ...otherProps} = this.props;
        return (
            <div className={classnames('x-input-container', className)}>
                <input
                    {...otherProps}
                    className={classnames('x-input', `${size}`, {disabled: disabled}, {danger: isError})}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={(e) => {
                        this.value = e.target.value;
                        onChange(e.target.value, e);
                    }}
                    onFocus={() => {
                        onFocus();
                    }}
                    onBlur={() => {
                        onBlur();
                    }}
                    onKeyDown={(e) => {
                        let keyCode = e.keyCode;
                        if (keyCode === 13) {
                            onEnter(e.target.value);
                        }
                    }}
                />
                {
                    search ? <div className="search-btn" onClick={() => {
                        onEnter(this.value);
                    }
                    }>
                        {searchBtn ? searchBtn : <XIcon onClick={() => {
                            onEnter(this.value);
                        }
                        } type="search"/>}
                    </div> : icon && <XIcon type={icon}/>
                }
            </div>
        );
    }
}

export default XInput;