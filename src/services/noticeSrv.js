import httpRequest from './../client/httpClient';

const notice = {
    getNoticeList: (boardType, pageNumber, pageCount, resultCb, errorCb) => {
        httpRequest('get', 'notices', { boardType, pageNumber, pageCount }, resultCb, errorCb);
    },
    getNoticePopup: (boardType, resultCb, errorCb) => {
        httpRequest('get', 'notices/popup', { boardType }, resultCb, errorCb);
    }
};

export default notice;