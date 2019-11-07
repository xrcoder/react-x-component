import { Upload } from 'react-x-component';

render() {
    return() {
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
    }
}