/**
 * name:
 * desc:
 * date: 2019/1/25
 * author: kelvin
 */

function getXhrError(option, xhr) {
    // 构造一个错误对象，并返回
    const msg = `上传失败：${option.url} ${xhr.status}`;
    const err = new Error(msg);
    err.status = xhr.status;
    err.method = 'post';
    err.url = option.url;
    return err;
}

function getXhrBody(xhr) {
    // 获取内容实体
    const text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}

export default (option) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    if (option.onProgress && xhr.upload) {
        // 上传进度
        xhr.upload.onprogress = (e) => {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            option.onProgress(e);
        }
    }

    if (option.data) {
        // 额外的参数
        Object.keys(option.data).map(key => {
            formData.append(key, option.data[key]);
        });
    }
    // 文件数据
    formData.append(option.filename, option.file);

    xhr.onerror = (e) => {
        option.onError(e);
    };

    xhr.onload = () => {
        if (xhr.status < 200 || xhr.status >= 300) {
            return option.onError(getXhrError(option, xhr), getXhrBody(xhr));
        }

        option.onSuccess(getXhrBody(xhr), xhr);
    };

    xhr.timeout = option.timeout || 10000;
    xhr.ontimeout = () => {
        option.onError({status: xhr.status, msg: '请求超时'})
    }

    xhr.open('post', option.url, true);

    // 设置额外的头部信息
    const headers = option.headers || {};
    for (const k in headers) {
        xhr.setRequestHeader(k, headers[k]);
    }

    // 发送数据
    xhr.send(formData);

    return {
        // 中断方法
        abort() {
            xhr.abort();
        }
    };
}