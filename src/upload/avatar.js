import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Upload from './upload';
import UploadList from './upload-list';

const Avatar = (props) => {

    let {url, onChange, imgList} = props; 

    let [_imgList, setImgList] = useState(imgList);
    let [length, setLength] = useState(-1);

    useEffect(()=>{
        if (imgList.length > 0) {
            setImgList(imgList)
        }
    },[imgList])

    return (
        <div className="x-upload-list">
            <UploadList
                imgList={_imgList}
                onDeleteItem={(index) => {
                    let _list = _imgList;
                    _list.splice(index, 1);
                    setImgList(_list);
                    onChange(_list);
                    setLength(_list.length);
                }}
            />
            <Upload
                {...props}
                url = {url}
                onBeforeStart={(e, file) => {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    let _list = _imgList;
                        reader.onload =  (e) => {
                            _list.push({
                                name: file.name,
                                imgData: reader.result,
                                uid: file.uid,
                                status: 0
                            })
                            setImgList(_list)
                            setLength(_list.length)
                        }
                }}
                onFinished={(e, file) => {
                    let uploadList = _imgList;
                    let index = uploadList.findIndex( item => item.uid === file.uid )
                    uploadList[index].status = 1;
                    setTimeout(() => {
                        setImgList(uploadList);
                        onChange(uploadList);
                        setLength(1000);
                    }, 600);
                }}
            >
                <div className="x-upload-box">
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
    imgList: PropTypes.array
};

Avatar.defaultProps = {
    onChange: ()=>{},
    imgList: []
};

