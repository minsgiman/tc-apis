import account from './services/accountSrv';
import camera from './services/cameraSrv';
import clip from './services/clipSrv';
import demo from './services/demoSrv';
import notice from './services/noticeSrv';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? (global.tCamAPI = factory()) :
    typeof define === 'function' && define.amd ? define(factory) : null;
}(window !== 'undefined' ? window : this, (function () { 'use strict';
    return { account, camera, clip, demo, notice }
})));

export { account, camera, clip, demo, notice }