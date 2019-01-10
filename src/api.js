import account from './services/accountSrv';
import camera from './services/cameraSrv';
import clip from './services/clipSrv';
import demo from './services/demoSrv';
import notice from './services/noticeSrv';

(function (window) {
    const tCam = { account, camera, clip, demo, notice };

    if ( typeof window === "object" ) {
        window.tCam = tCam;
    }
}(window));