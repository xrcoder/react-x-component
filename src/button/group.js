import React from 'react';
import classnames from 'classnames';

function ButtonGroup(props) {
    const {children, style, lax, className} = props;
    return (
        <div style={style} className={classnames('x-btn-group', className)}>
            {
                React.Children.map(children, (child) => {
                    if (lax) {
                        return <child.type {...child.props}/>;
                    }

                    if (typeof child !== 'object' || child.type.displayName !== 'Button') {
                        console.warn('ButtonGroup组件的子组件必须是Button组件！')
                        return null;
                    } else {
                        return <child.type {...child.props}/>;
                    }
                })
            }
        </div>
    )
}

export default ButtonGroup;
