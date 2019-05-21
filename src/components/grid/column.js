import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Column({children, sm, md, lg, className}) {
    
    let _sm = sm ? `col-sm-${sm}` : '',
        _md = md ? `col-md-${md}` : '',
        _lg = lg ? `col-lg-${lg}` : '';

    return (
        <div className={classnames(_sm, _md, _lg, className)}>
            {children}
        </div>
    );
}

Column.defauleProps = {
    className: '',
    sm: '',
    md: '',
    lg: ''
}

Column.propTypes = {
    col: PropTypes.number,
    className: PropTypes.string,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number 
}


