import { httpRequest, validateParam } from './../client/httpClient';

const demo = {
    /** getDemoCamera
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getDemoCamera: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'demo/cameras/' + params.cameraId, null, resultCb, errorCb);
    },

    /** getDemoCameras */
    getDemoCameras: (resultCb, errorCb) => {
        httpRequest('get', 'demo/cameras', null, resultCb, errorCb);
    },

    /** getTimeline
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.scale - scale
     */
    getTimeline: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'startTime', 'endTime', 'scale'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'demo/cameras/' + params.cameraId + '/v2/timeline', {
            start: params.startTime,
            end: params.endTime,
            scale: params.scale
        }, resultCb, errorCb);
    },

    /** getThumbnail
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.sgid - sgid
     * @param {string} params.scale - scale
     * @param {number} params.count - count
     * @param {strnumbering} params.lastTimestamp - lastTimestamp
     */
    getThumbnail: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'sgid', 'scale', 'count', 'lastTimestamp'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'demo/cameras/' + params.cameraId + '/v2/subEvents', {
            sgid: params.sgid,
            scale: params.scale,
            count: params.count,
            lastTimestamp: params.lastTimestamp
        }, resultCb, errorCb);
    },

    /** getToken
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getToken: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'demo/cameras/' + params.cameraId + '/token', null, resultCb, errorCb);
    },

    /** extendToken
     * @param {Object} params
     * @param {string} params.tokenId - tokenId
     */
    extendToken: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['tokenId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'demo/cameras/token/' + params.tokenId, null, resultCb, errorCb);
    },

    /** checkIsLastRecord
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    checkIsLastRecord: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'demo/cameras/' + params.cameraId + '/lastActivity', null, resultCb, errorCb);
    },

    /** getEventZones
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getEventZones: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'demo/cameras/' + params.cameraId + '/alarmZones', null, resultCb, errorCb);
    }
};

export default demo;