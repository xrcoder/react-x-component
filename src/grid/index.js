import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export function Row({children, className, space, style}) {
    return (
        <div className={classnames('x-row', className)}
             style={style}
             css={{
                 marginRight: `-${space}px`,
                 marginLeft: `-${space}px`
             }}>
            {
                React.Children.map(children, (child) => {
                    if (typeof child !== 'object' || child.type.displayName !== 'Col') {
                        console.warn('Row组件的子组件必须是Col组件！')
                        return null;
                    } else {
                        return <child.type space={space} {...child.props}/>;
                    }
                })
            }
        </div>
    );
}

export function Col({children, sm, md, lg, space, className, style}) {

    let _sm = sm ? `col-sm-${sm}` : '',
        _md = md ? `col-md-${md}` : '',
        _lg = lg ? `col-lg-${lg}` : '';

    return (
        <div className={classnames(_sm, _md, _lg, className)}
             style={style}
             css={{paddingLeft: `${space}px`, paddingRight: `${space}px`}}>
            {children}
        </div>
    );
}

Row.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    space: PropTypes.number
};

Row.defaultProps = {
    className: '',
    style: null,
    space: 15
};

Col.propTypes = {
    className: PropTypes.string,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    style: PropTypes.object
}

Col.defauleProps = {
    className: '',
    sm: null,
    md: null,
    lg: null,
    style: null
}
