import React from 'react';
import {Upload, Button, Icon, Row, Col, Box, Table} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import UploadMd from './upload.md';

import basicUpload from './examples/basic.x';
import avatarUpload from './examples/avatar.x';

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Upload</Box.Header>
                        <Box.Body><Markdown content={UploadMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>基本用法</Box.Header>
                        <Box.Body>
                            <Upload
                                url="http://10.199.0.216:3000/api/upload"
                                fileType="application/zip"
                                canDrag={true}
                                onBeforeStart={(file, e) => {
                                    console.log('上传前的拦截')
                                    return true
                                }}
                                onProgress={() => {
                                    console.log('上传中')
                                }}
                                onError={() => {
                                    console.log('上传失败')
                                }}
                                onFinished={(r,file, e) => {
                                    console.log('上传完成')
                                }}            
                            >
                                <Button><Icon name="upload" />点击或拖拽上传</Button>
                            </Upload>
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicUpload}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>头像上传</Box.Header>
                        <Box.Body>
                            <Upload.Avatar
                                url="http://10.199.0.216:3000/api/upload"
                                fileType="image/*"
                            />
                        </Box.Body>
                        <Box.Footer>
                                <Prism>{avatarUpload}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Upload Attributes</Box.Header>
                        <Box.Body>
                            <Table>
                                <Table.Head>
                                    <Th>参数</Th>
                                    <Th>类型</Th>
                                    <Th>默认值</Th>
                                    <Th>说明</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>url</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>文件上传请求地址</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>fileType</Td>
                                        <Td>string</Td>
                                        <Td>*</Td>
                                        <Td>可上传的文件类型</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>canDrag</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否支持拖拽上传</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>自定义样式class名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>timeout</Td>
                                        <Td>number</Td>
                                        <Td>10000</Td>
                                        <Td>请求超时时间</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onBeforeStart</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>上传前的回调函数，可在此处做文件格式、尺寸等拦截</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onProgress</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>上传中的回调函数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onError</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>上传失败的回调函数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onFinished</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>上传成功的回调函数</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
