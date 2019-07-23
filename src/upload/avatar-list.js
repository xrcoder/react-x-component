import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import UploadList from './upload-list';
import Avatar from './avatar';

const AvatarList = (props) => {

    let { url, onChange, imgList, maxLength, onError, onDeleteItem } = props;

    let [_imgList, setImgList] = useState(imgList);

    let list = _imgList;

    useEffect(() => {
        if (imgList.length >= 0) {
            setImgList(imgList)
        }
    }, [imgList])

    return (
        <div className="x-upload-list">
            <UploadList
                imgList={list}
                onDeleteItem={(index) => {
                    let _list = _imgList;
                    _list.splice(index, 1);
                    setImgList(_list);
                    onDeleteItem(_list);
                }}       
            />
            {
                _imgList.length < maxLength ?
                    <Avatar
                        {...props}
                        url={url}
                        onBeforeStart={(file, e) => {
                            let _list = _imgList;
                            file.status = 0;
                            list = _imgList;
                            _imgList.push(file);
                            setImgList(_imgList);
                        }}
                        onChange={(r,file, e) => {
                            let uploadList = _imgList;
                            let index = uploadList.findIndex(item => item.uid === file.uid)
                            uploadList[index].status = 1;
                            setTimeout(() => {
                                list = _imgList;
                                setImgList(uploadList);
                                onChange(r,uploadList, e);
                            }, 600);
                        }}
                        onError={(file,e)=>{
                            props.onError(file,e);
                        }}
                    >
                    </Avatar> : null
            }
        </div>
    )
}

export default AvatarList;

AvatarList.propTypes = {
    onChange: PropTypes.func,
    imgList: PropTypes.array,
    maxLength: PropTypes.number,
    onError: PropTypes.func,
    onDeleteItem: PropTypes.func
};

AvatarList.defaultProps = {
    onChange: () => { },
    imgList: [],
    maxLength: 1,
    onError: () => { },
    onDeleteItem: ()=>{}
};

