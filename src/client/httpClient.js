import 'es6-promise/auto';
import axios from 'axios';
let domain = '';
let prefix = '/json/';

const getRequest = (url, data, resultCb, errorCb) => {
    //console.log('url : ' + url + ', data : ' + JSON.stringify(data));
    axios.get(domain + url, {
        params: data,
    }).then((res) => {
        //console.log('res.config.params : ' + JSON.stringify(res.config.params) + ', res.config.url : ' + res.config.url + ', res.config.data : ' + JSON.stringify(res.config.data));
        if (resultCb && typeof resultCb === 'function') {
            resultCb(res.data);
        }
    }).catch((err) => {
        //console.log('err : ' + err);
        if (errorCb && typeof errorCb === 'function') {
            errorCb(err);
        }
    });
};

const putRequest = (url, data, resultCb, errorCb) => {
    axios.put(domain + url, data).then((res) => {
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
    var key, bodyFormData = new FormData();
    if (data) {
        for (key in data) {
            bodyFormData.append(key, data[key]);
        }
    }
    axios({
        method: 'post',
        url: domain + url,
        data: bodyFormData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    }).then((res) => {
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
    axios.delete(domain + url, data).then((res) => {
        if (resultCb && typeof resultCb === 'function') {
            resultCb(res.data);
        }
    }).catch((err) => {
        if (errorCb && typeof errorCb === 'function') {
            errorCb(err);
        }
    });
};

const setPathParams = (url, params) => {
    const pathParamReg = /\/:\w+/gi;
    let pathParams = url.match(pathParamReg);

    if (pathParams) {
        pathParams = pathParams.map(function(item) {
            return item.replace(/\/:/g, '');
        });
        pathParams.forEach(function(item) {
            if (params[item]) {
                url = url.replace(':' + item, params[item]);
                delete params[item];
            }
        });
    }
    return url;
};

const httpRequest = (method, url, data, resultCb, errorCb) => {
    let fullUrl = prefix + url;
    fullUrl = setPathParams(fullUrl, data);

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

const setRequestConfig = (config) => {
    if (!config) {
        return;
    }

    if (config.domain) {
        domain = config.domain;
    }
    if (config.prefix) {
        prefix = config.prefix;
    }
};

export { httpRequest, setRequestConfig };