import React from 'react';
import classnames from 'classnames';

export default (props) => {

    const {error, children, className} = props;

    return (
        <div className={classnames('x-input-group', className)}>
            {
                React.Children.map(children, (child) => {
                    return <child.type {...child.props} error={error}/>
                })
            }
        </div>
    )
}
