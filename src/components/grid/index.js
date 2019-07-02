import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export function Row({children,className,style}) {

    return (
        <div className={classnames('x-row',className)} style={style}>
            {children}
        </div>
    );

}

export function Col({children, sm, md, lg, className,style}) {

    let _sm = sm ? `col-sm-${sm}` : '',
        _md = md ? `col-md-${md}` : '',
        _lg = lg ? `col-lg-${lg}` : '';

    return (
        <div className={classnames(_sm, _md, _lg, className)} style={style}>
            {children}
        </div>
    );
}

Row.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

Row.defaultProps = {
    className: '',
    style: null
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