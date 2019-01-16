import httpRequest from './../client/httpClient';

const demo = {
    getDemoCamera: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras/' + cameraId, null, resultCb, errorCb);
    },
    getDemoCameras: (resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras', null, resultCb, errorCb);
    },
    getTimeline: (cameraId, startTime, endTime, scale, resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras/' + cameraId + '/v2/timeline', { start: startTime, end: endTime, scale }, resultCb, errorCb);
    },
    getThumbnail: (cameraId, sgid, scale, count, lastTimestamp, resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras/' + cameraId + '/v2/subEvents', { sgid, scale, count, lastTimestamp }, resultCb, errorCb);
    },
    getToken: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras/' + cameraId + '/token', null, resultCb, errorCb);
    },
    extendToken: (tokenId, resultCb, errorCb) => {
        httpRequest('put', 'demo/cameras/token/' + tokenId, null, resultCb, errorCb);
    },
    checkIsLastRecord: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras/' + cameraId + '/lastActivity', null, resultCb, errorCb);
    },
    getEventZones: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras/' + cameraId + '/alarmZones', null, resultCb, errorCb);
    }
};

export default demo;