import axios from 'axios';

let prefix = '/json/';
if (location.href.indexOf('bizcam') != -1) {
    prefix = '/json/biz/';
}

const getRequest = (url, data, resultCb, errorCb) => {
    axios.get(url, {
        params: data,
    }).then((res) => { //res.config.params, res.config.url, res.config.data
        if (resultCb && typeof resultCb === 'function') {
            resultCb(res.data);
        }
    }).catch((err) => {
        if (errorCb && typeof errorCb === 'function') {
            errorCb(err);
        }
    });
};

const putRequest = (url, data, resultCb, errorCb) => {
    axios.put(url, data).then((res) => {
        if (resultCb && typeof resultCb === 'function') {
            resultCb(res.data);
        }
    }).catch((err) => {
        if (errorCb && typeof errorCb === 'function') {
            errorCb(err);
        }
    });
};

const postRequest = (url, data, resultCb, errorCb) => {
    axios.post(url, data).then((res) => {
        if (resultCb && typeof resultCb === 'function') {
            resultCb(res.data);
        }
    }).catch((err) => {
        if (errorCb && typeof errorCb === 'function') {
            errorCb(err);
        }
    });
};

const deleteRequest = (url, data, resultCb, errorCb) => {
    axios.delete(url, data).then((res) => {
        if (resultCb && typeof resultCb === 'function') {
            resultCb(res.data);
        }
    }).catch((err) => {
        if (errorCb && typeof errorCb === 'function') {
            errorCb(err);
        }
    });
};

const httpRequest = (method, url, data, resultCb, errorCb) => {
    const fullUrl = prefix + url;

    if (method === 'get') {
        getRequest(fullUrl, data, resultCb, errorCb);
    } else if (method === 'put') {
        putRequest(fullUrl, data, resultCb, errorCb);
    } else if (method === 'post') {
        postRequest(fullUrl, data, resultCb, errorCb);
    } else if (method === 'delete') {
        deleteRequest(fullUrl, data, resultCb, errorCb);
    } else {
        getRequest(fullUrl, data, resultCb, errorCb);
    }
};

const validateParam = (params, keys) => {
    let i, length;
    if (!params || !keys) {
        return false;
    }

    for (i = 0, length = keys.length; i < lenth; i+=1) {
        if (!params.hasOwnProperty(keys[i])) {
            return false;
        }
    }
    return true;
};

export { httpRequest, validateParam };