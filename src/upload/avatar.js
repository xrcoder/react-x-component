import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Upload from './upload';

const Avatar = (props) => {

    let { url, onChange, className, style } = props;

    let ImgObj = {};

    return (
        <div className="x-upload-list">
            <Upload
                {...props}
                url={url}
                onBeforeStart={(file, e) => {
                    props.onBeforeStart(file, e)
                }}
                onFinished={(file, e) => {
                    setTimeout(() => {
                        props.onChange(file, e);
                    }, 600);
                }}
                onProgress={(file, e) => {
                    props.onProgress(file, e)
                }}
            >
                <div className={classnames('x-upload-box', className)} style={style}>
                    <div className="bg-img"></div>
                    <div>拖拽或点击上传人像</div>
                </div>
            </Upload>
        </div>
    )
}

export default Avatar;

Avatar.propTypes = {
    onChange: PropTypes.func,
    imgList: PropTypes.array,
    onProgress: PropTypes.func
};

Avatar.defaultProps = {
    onChange: () => { },
    imgList: [],
    onProgress: () => { }
};

