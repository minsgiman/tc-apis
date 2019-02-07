const httpClient = require('./client/httpClient');

const setConfig = function(config) {
    httpClient.setRequestConfig(config);
};
const call = function (api, params, successCb, errorCb) {
    if (!api || !api.method || !api.url) {
        errorCb('wrong API description');
        return;
    }
    httpClient.httpRequest(api.method, api.url, params, successCb, errorCb);
};

module.exports = {
    account : require('./services/accountSrv'),
    camera : require('./services/cameraSrv'),
    clip : require('./services/clipSrv'),
    demo : require('./services/demoSrv'),
    notice : require('./services/noticeSrv'),
    setConfig : setConfig,
    call : call
};