import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Group from './group';

function Name(props) {
    return (
        <label {...props} className={classnames('x-form-name', props.className)}>
            {props.required &&  <span className="x-form-name-star">⁎</span>}
            {props.children}
        </label>
    );
}

Name.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    required: PropTypes.bool
}

Name.defaultProps = {
    className: '',
    style: null,
    required: false
}

export default {
    Name,
    Group
}
