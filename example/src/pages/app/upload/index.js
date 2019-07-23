import React, { useRef, useState, Fragment } from 'react';
import './index.scss';
import { Box, Row, Col, Button, Upload, Icon } from 'react-x-component';

export default () => {

    const [diyImgList, setDiyImgList] = useState([
        {
            uid: '-1',
            imgData: require('../../../assets/imgpreview_1.jpg'),
            name: 'img-02.jpg',
        }
    ]);
    const [thirdImgList, setThirdImg] = useState([
        {
            uid: '-1',
            imgData: require('../../../assets/imgpreview_1.jpg'),
            name: 'img-01.jpg',
        }
    ]);

    return (
        <Fragment>
            <Box>
                <Box.Header>Upload头像上传</Box.Header>
                <Box.Body>
                    <Row>
                        <Col md={12}>
                            <Upload.AvatarList
                                url="http://10.199.0.216:3000/api/upload"
                                className=""
                                style={{}}
                                imgList={thirdImgList}
                                onChange={(res,imgList, e) => {
                                    let _arr = [];
                                    imgList.map(item=>{
                                        _arr.push(item)
                                    })
                                    setThirdImg(_arr)
                                }}
                                onDeleteItem={()=>{
                                    setThirdImg([])
                                }}
                            />
                        </Col>
                    </Row>
                </Box.Body>
            </Box>
            <Box>
                <Box.Header>自定义按钮上传</Box.Header>
                <Box.Body>
                    <Row>
                        <Col md={12}>
                            <Upload.UploadList
                                imgList={diyImgList}
                                onDeleteItem={(index) => {
                                    let _arr = [];
                                    diyImgList.splice(index, 1);
                                    
                                    diyImgList.map(item=>{
                                        _arr.push(item)
                                    })
                                    setDiyImgList(_arr);
                                }}
                            />
                            <Upload
                                url="http://10.199.0.216:3000/api/upload"
                                onBeforeStart={(file, e) => {
                                    let _arr = [];
                                    //status:0,loading效果
                                    file.status = 0;
                                    diyImgList.push(file);
                                    diyImgList.map(item=>{
                                        _arr.push(item)
                                    })
                                    setDiyImgList(_arr);
                                }}
                                onFinished={(r,file, e) => {
                                    let _arr = [];
                                    let index = diyImgList.findIndex(item => item.uid === file.uid)
                                    diyImgList[index].status = 1;
                                    diyImgList.map(item=>{
                                        _arr.push(item)
                                    })
                                    setTimeout(() => {
                                        setDiyImgList(_arr)
                                    }, 600);
                                }}            
                            >
                                <Button><Icon name="upload" />点击上传</Button>
                            </Upload>
                        </Col>
                    </Row>
                </Box.Body>
            </Box>
        </Fragment>
    )
}