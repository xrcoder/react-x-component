import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Request from './request';

function getUid() {
    // 获取唯一ID值 文件标示
    const now = +(new Date())
    let index = 0
    return `upload-${now}-${++index}`
}

const Upload = ({className, multiple, timeout, name, children, fileType, url, onBeforeStart, onProgress, onFinished,onError,data, headers}) => {

    const [uid, setUid] = useState(getUid());
    const [uploadList,setUploadList] = useState({});

    const uploadInput = useRef(null);

    let selectFile = (e) => {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) {
            return
        } else {
            uploadFiles(files,e);
        }
        e.target.setAttribute('type', 'text');
    }

    let uploadFiles = (files,e) => {
        const postList = Array.prototype.slice.call(files)
        postList.map((item) => {
            let file = item
            file.uid = getUid()
            onBeforeStart(e,files[0]);
            upload(file, files)
        })
    }

    let upload = (file, fileList) => {
        new Promise(resolve => {
            resolve(url)
        }).then(url => {
            const { uid } = file
            uploadList[uid] = new Request({
                url,
                filename: name,
                file,
                data,
                headers,
                timeout
            });
            uploadList[uid].onProgress((e)=>{
                onProgress(e, file);
            }).onSuccess((e)=>{
                onFinished(e, file);
            })
            uploadList[uid].onError((e)=>{
                onError(e, file);
            })
        })
    }

    let handleClick = () => {
        /*
        * 修复连续上传同个文件的时候，第二次会无效
        * 解决办法：每次input选择完之后，将input的type属性设置成text，然后下次点击input上传前，将input的type属性重新设置成file
        * 本代码中解决分布在 selectFile和handleClick方法中
        * */
        uploadInput.current.setAttribute('type', 'file')
        uploadInput.current.click()
    }

    return (
        <div className={classnames('x-upload',className)} onClick={()=>{handleClick()}}>
            <div className="x-upload-trigger">
                {children}
            </div>
            <input
                type="file"
                accept={fileType}
                onChange={(e)=>{selectFile(e)}}
                ref={uploadInput}
                className="x-upload-input"
                multiple={multiple}
            />
        </div>
    )

}

export default Upload;

Upload.propTypes = {
    fileType: PropTypes.string,
    url: PropTypes.string,
    onAbort: PropTypes.func,
    onBeforeStart: PropTypes.func,
    onProgress: PropTypes.func,
    onFinished: PropTypes.func,
    onError: PropTypes.func,
    timeout: PropTypes.number,
    className: PropTypes.string,
    name: PropTypes.string,
}

Upload.defaultProps = {
    fileType: '*',
    timeout: 3000,
    name: 'file',
    onBeforeStart: ()=>{},
    onProgress: ()=>{},
    onError: ()=>{},
    onFinished:()=>{}
}
