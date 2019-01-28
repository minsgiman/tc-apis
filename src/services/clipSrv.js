import { httpRequest, validateParam } from './../client/httpClient';

const clip = {
    /** getClip
     * @param {Object} params
     * @param {string} params.clipId - clipId
     */
    getClip: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['clipId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'clips/' + params.clipId, null, resultCb, errorCb);
    },

    /** getAvailableRange
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.type - type
     */
    getAvailableRange: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'type'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'clips/availableRange', params, resultCb, errorCb);
    },

    /** shareSnsInfo
     * @param {Object} params
     * @param {string} params.clipId - clipId
     */
    shareSnsInfo: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['clipId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'clips/' + params.clipId + '/shareURL', null, resultCb, errorCb);
    },

    /** labelUpdate
     * @param {Object} params
     * @param {string} params.clipId - clipId
     * @param {string} params.labelName - labelName
     */
    labelUpdate: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['clipId', 'labelName'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'clips/' + params.clipId, { labelName: params.labelName }, resultCb, errorCb);
    }
};

export default clip;