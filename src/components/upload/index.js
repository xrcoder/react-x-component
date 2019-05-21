import React from 'react';
import PropTypes from 'prop-types';
import $_upload from './upload';
import XButton from '../button';
// import './index.scss';

function getUid() {
    // 获取唯一ID值
    const now = +(new Date());
    let index = 0;
    return {
        uid() {
            return `upload-${now}-${++index}`;
        }
    }
}

class XUpload extends React.Component {
    static propTypes = {
        fileType: PropTypes.string,
        url: PropTypes.string,
        onStart: PropTypes.func,
        onProgress: PropTypes.func,
        onSuccess: PropTypes.func,
        onError: PropTypes.func,
        timeout: PropTypes.number,
        name: PropTypes.string
    };

    static defaultProps = {
        fileType: '*',
        timeout: 3000,
        name: 'file'
    };

    constructor() {
        super();
        this.state = {
            getUid: getUid()
        };
        this.uploadList = {};
    }

    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            return;
        } else {
            this.uploadFiles(files);
        }
        e.target.setAttribute('type', 'text')
    }

    uploadFiles(files) {
        const postList = Array.prototype.slice.call(files);
        postList.map((item) => {
            let file = item;
            file.uid = this.state.getUid.uid();
            this.upload(file, files);
        });
    }

    upload(file, fileList) {
        const {onStart, onProgress, onSuccess, onError, data, headers} = this.props;
        const {props} = this;
        new Promise(resolve => {
            const {url} = props;
            resolve(url);
        }).then(url => {
            const {uid} = file;
            this.uploadList[uid] = $_upload({
                url,
                filename: props.name,
                file,
                data,
                headers,
                onProgress: onProgress ? e => {
                    onProgress(e, file);
                } : null,
                onSuccess: (res, xhr) => {
                    delete this.uploadList[uid];
                    onSuccess(res, file, xhr);
                },
                onError: (err, res) => {
                    delete this.uploadList[uid];
                    onError(err, file);
                }
            });
            onStart(file);
        });
    }

    handleClick() {
        /*
        * 特别说明，input上传文件的时候，有一个小问题，就是连续上传同个文件的时候，第二次会无效
        * 解决办法：每次input选择完之后，将input的type属性设置成text，然后下次点击input上传前，将input的type属性重新设置成file
        * 本代码中解决分布在 onChange和handleClick方法中
        * */
        this.refs.uploadInput.setAttribute('type', 'file')
        this.refs.uploadInput.click();
    }

    render() {
        const {children, fileType} = this.props;
        return (
            <div className="x-upload" onClick={this.handleClick.bind(this)}>
                <div className="x-upload-trigger">
                    {children ? children : <XButton icon="upload">上传文件</XButton>}
                </div>
                <input
                    type="file"
                    accept={fileType}
                    onChange={this.onChange.bind(this)}
                    ref="uploadInput"
                    className="x-upload-input"
                />
            </div>
        );
    }
}

export default XUpload;