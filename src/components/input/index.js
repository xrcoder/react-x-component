import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import XIcon from '../icon';
import intl from 'react-intl-universal';
// import loadLocales from '../locales/loadlocales';

class XInput extends React.Component {
    static propTypes = {
        isError: PropTypes.bool,
        size: PropTypes.string,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        onChange: PropTypes.func,
        onEnter: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        locale: PropTypes.string
    }

    static defaultProps = {
        isError: false,
        size: 'md',
        placeholder: '',
        locale: 'zh_CN',
        onChange: () => {
        },
        onEnter: () => {
        },
        onFocus: () => {
        },
        onBlur: () => {
        }
    }

    state = {
        initDone:false
    }

    componentWillMount() {
        if(window.localStorage.getItem('isStoragelocale')){
            this.setState({initDone: window.localStorage.getItem('initDone')});
        }else{
            loadLocales(this.props.locale).then(()=>{
                this.setState({initDone: true});
            });
        }
    }

    render() {
        const {isError, size, placeholder, className, onChange, onEnter, onFocus, onBlur, disabled, icon, search, searchBtn, ...otherProps} = this.props;
        return (
            this.state.initDone !== false && 
            <div className={classnames('x-input-container', className)}>
                <input
                    {...otherProps}
                    className={classnames('x-input', `${size}`, {disabled: disabled}, {danger: isError})}
                    disabled={disabled}
                    placeholder={placeholder || intl.get('KOF_REACT_X_COMPONENT_GLOBAL_INPUTPLACEHOLDER').d(`请输入`)}
                    onChange={(e) => {
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