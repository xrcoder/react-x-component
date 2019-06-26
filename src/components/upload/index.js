/**
 * name:
 * desc:
 * date: 2019/1/25
 * author: kelvin
 */
import React from 'react'
import PropTypes from 'prop-types'
import $_upload from './upload'
import XButton from '../button'
import intl from 'react-intl-universal'
import loadLocales from '../locales/loadlocales'

function getUid() {
    // 获取唯一ID值
    const now = +(new Date())
    let index = 0
    return {
        uid() {
            return `upload-${now}-${++index}`
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
        onSyncProgress: PropTypes.func,
        onError: PropTypes.func,
        timeout: PropTypes.number,
        name: PropTypes.string,
        locale: PropTypes.string
    }

    static defaultProps = {
        fileType: '*',
        timeout: 3000,
        name: 'file',
        locale: 'zh_CN'
    }

    constructor(props) {
        super(props)
        this.state = {
            getUid: getUid(),
            initDone: false
        }
        this.uploadList = {}
    }

    componentDidMount() {
        if (window.localStorage.getItem('isStoragelocale')) {
            this.setState({ initDone: window.localStorage.getItem('initDone') })
        } else {
            loadLocales(this.props.locale).then(() => {
                this.setState({ initDone: true })
            })
        }
    }

    onChange(e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) {
            return
        } else {
            this.uploadFiles(files)
        }
        e.target.setAttribute('type', 'text')
    }

    uploadFiles(files) {
        const { onProgress, onSuccess, sync } = this.props
        const postList = Array.prototype.slice.call(files)
        let promiseList = []

        postList.map((item, index) => {
            let file = item
            file.uid = this.state.getUid.uid()
            if (sync) {
                //多文件 同步上传，串行
                promiseList.push(this.createUploadPromiseList(file, index + 1))
            } else {
                // 异步上传，并行
                this.upload(file, files)
            }
        })

        if (sync) {
            //多文件 同步上传，串行
            let total = promiseList.length
            promiseList.reduce((prev, next) => {
                return prev.then((res) => {
                    if (res.index > 0) {
                        onProgress({ percent: ((res.index / total) * 100), xhr: res.xhr })
                    }
                    return next()
                })
            }, Promise.resolve({ status: 'init', index: 0 })).then((res) => {
                onProgress({ percent: ((res.index / total) * 100), xhr: res.xhr })
                onSuccess(res.res)
            })
        }
    }

    createUploadPromiseList(file, index) {
        const { data, headers, url, onSyncProgress } = this.props
        return () => {
            return new Promise((resolve, reject) => {
                // 创建upload list promise
                const { uid } = file
                this.uploadList[uid] = $_upload({
                    url,
                    filename: this.props.name,
                    file,
                    data,
                    headers,
                    onStart: () => { },
                    onProgress: (e, xhr) => {
                        onSyncProgress(e.percent, xhr)
                    },
                    onSuccess: (res, xhr) => {
                        delete this.uploadList[uid]
                        resolve({ status: 'ok', index: index, file, res, xhr })// index表示当前进度,status表示上传是否成功
                    },
                    onError: (err, res) => {
                        resolve({ status: 'fail', index: index, file, res, xhr: null })
                    }
                })
            })
        }
    }

    upload(file, fileList) {
        const { onStart, onProgress, onSuccess, onError, data, headers, timeout } = this.props
        const { props } = this
        new Promise(resolve => {
            const { url } = props
            resolve(url)
        }).then(url => {
            const { uid } = file
            this.uploadList[uid] = $_upload({
                url,
                filename: props.name,
                file,
                data,
                timeout,
                headers,
                onProgress: onProgress ? e => {
                    onProgress(e, file)
                } : null,
                onSuccess: (res, xhr) => {
                    delete this.uploadList[uid]
                    onSuccess(res, file, xhr)
                },
                onError: (err, res) => {
                    delete this.uploadList[uid]
                    onError(err, file)
                }
            })
            onStart(file)
        })
    }

    handleClick() {
        /*
        * 特别说明，input上传文件的时候，有一个小问题，就是连续上传同个文件的时候，第二次会无效
        * 解决办法：每次input选择完之后，将input的type属性设置成text，然后下次点击input上传前，将input的type属性重新设置成file
        * 本代码中解决分布在 onChange和handleClick方法中
        * */
        this.refs.uploadInput.setAttribute('type', 'file')
        this.refs.uploadInput.click()
    }

    render() {
        const { children, fileType, directory } = this.props
        return (
            this.state.initDone !== false &&
            <div className="x-upload" onClick={this.handleClick.bind(this)}>
                <div className="x-upload-trigger">
                    {children ? children :
                        <XButton icon="upload">{intl.get('KOF_REACT_X_COMPONENT_UPLOAD_UPLOAD').d(`文件上传`)}</XButton>}
                </div>
                {
                    directory ?
                        <input
                            type="file"
                            accept={fileType}
                            onChange={this.onChange.bind(this)}
                            ref="uploadInput"
                            className="x-upload-input"
                            webkitdirectory="true"
                        // multiple={true}
                        /> :
                        <input
                            type="file"
                            accept={fileType}
                            onChange={this.onChange.bind(this)}
                            ref="uploadInput"
                            className="x-upload-input"
                        />
                }
            </div>
        )
    }
}

export default XUpload
