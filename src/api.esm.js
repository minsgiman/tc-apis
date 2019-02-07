import account from './services/accountSrv';
import camera from './services/cameraSrv';
import clip from './services/clipSrv';
import demo from './services/demoSrv';
import notice from './services/noticeSrv';
import { httpRequest, setRequestConfig } from './client/httpClient';

const setConfig = function(config) {
    setRequestConfig(config);
};
const call = function (api, params, successCb, errorCb) {
    if (!api || !api.method || !api.url) {
        errorCb('wrong API description');
        return;
    }
    httpRequest(api.method, api.url, params, successCb, errorCb);
};

export default { account, camera, clip, demo, notice, call, setConfig };