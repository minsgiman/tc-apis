import { httpRequest, validateParam } from './../client/httpClient';

const notice = {
    /**
     * getNoticeList
     * @param {Object} params
     * @param {string} params.boardType - boardType
     * @param {number} params.pageNumber - pageNumber
     * @param {number} params.pageCount - pageCount
     */
    getNoticeList: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['boardType', 'pageNumber', 'pageCount'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'notices', params, resultCb, errorCb);
    },

    /**
     * getNoticePopup
     * @param {Object} params
     * @param {string} params.boardType - boardType
     */
    getNoticePopup: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['boardType'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'notices/popup', params, resultCb, errorCb);
    }
};

export default notice;