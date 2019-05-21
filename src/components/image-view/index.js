/**
 * name:
 * desc:
 * date: 2018/12/29
 * author: kelvin
 */
// import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import View from './view';

class XImageView extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        src: PropTypes.string,
        size: PropTypes.string
    }

    static defaultProps = {
        className: '',
        src: '',
        size: 'md'
    }

    render() {
        const {className, src, size, domRef, ...otherProps} = this.props;
        return <img {...otherProps} src={src} alt="" className={classnames('x-image-view', className, size)}
                    ref={domRef ? domRef : ''}
                    onClick={() => {
                        View(src).then(() => {
                        }, () => {
                        })
                    }}
        />
    }
}

export default XImageView;