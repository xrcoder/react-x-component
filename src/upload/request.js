// option {
//  data: object,
//  filename: string, //文件参数名
//  file: File,
//  url: string,
//  headers: object
// }

const request = (option) => {

    const xhr = new XMLHttpRequest();
    
    const formData = new FormData();

    xhr.upload.onprogress = function progress(e) { };

    if (option.data) {
        // 额外的参数
        Object.keys(option.data).map(key => {
            formData.append(key, option.data[key]);
        });
    }

    // 文件数据
    formData.append(option.filename, option.file);

    xhr.timeout = option.timeout || 10000;

    xhr.open(option.method || 'post', option.url, true);

    // 设置额外的头部信息
    const headers = option.headers || {};
    for (const k in headers) {
        xhr.setRequestHeader(k, headers[k]);
    }

    // 发送数据
    xhr.send(formData);

    let request = {
        // 中断方法
        onAbort: () => {
            xhr.abort();
            return request
        },
        onSuccess: (callback) => {
            xhr.onload = (e) => {
                callback(e)
            };
            return request
        },
        onError: (callback) => {
            xhr.onerror = (e) => {
                callback(e)
            };
            xhr.ontimeout = (e) => {
                callback(e)
            }
            return request
        },
        onProgress: (callback) => {
            xhr.upload.addEventListener("progress", function (e) {
                if (e.lengthComputable) {
                    callback(e)
                }
            });
            return request
        }
    }

    return request
};

export default request;