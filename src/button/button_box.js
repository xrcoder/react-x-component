import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {getFuncName} from '../util';

function ButtonBox(props) {
    const {style, align, className, children} = props;
    const typeArr = ['Button', 'ButtonGroup', 'ButtonIcon', 'ButtonLink'];
    return (
        <div style={style} className={classnames('x-btn-box', `x-btn-box-${align}`, className)}>
            {
                React.Children.map(children, (child) => {
                    if (typeof child !== 'object' || !typeArr.includes(getFuncName(child.type))) {
                        console.warn('Button.Box组件的子组件必须是Button类型组件！')
                        return null;
                    } else {
                        return <child.type {...child.props}/>;
                    }
                })
            }
        </div>
    )
}

ButtonBox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.oneOf(['left', 'center', 'right'])
};

ButtonBox.defaultProps = {
    className: '',
    style: null,
    align: 'right'
};

export default ButtonBox;
