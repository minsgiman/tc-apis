import httpRequest from './../client/httpClient';

const clip = {
    getClip: (clipId, resultCb, errorCb) => {
        httpRequest('get', 'clips/' + clipId, null, resultCb, errorCb);
    },
    getAvailableRange: (cameraId, type, resultCb, errorCb) => {
        httpRequest('get', 'clips/availableRange', { cameraId, type }, resultCb, errorCb);
    },
    shareSnsInfo: (clipId, resultCb, errorCb) => {
        httpRequest('get', 'clips/' + clipId + '/shareURL', null, resultCb, errorCb);
    },
    labelUpdate: (clipId, labelName, resultCb, errorCb) => {
        httpRequest('put', 'clips/' + clipId, { labelName }, resultCb, errorCb);
    }
};

export default clip;