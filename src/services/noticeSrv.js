const notice = {
    /**
     * get Notice List
     * @param {Object} params
     * @param {string} params.boardType - boardType
     * @param {number} params.pageNumber - pageNumber
     * @param {number} params.pageCount - pageCount
     */
    GET_NOTICE_LIST: {
        method: 'get',
        url: 'notices'
    },

    /**
     * get Notice Popup
     * @param {Object} params
     * @param {string} params.boardType - boardType
     */
    GET_NOTICE_POPUP: {
        method: 'get',
        url: 'notices/popup'
    }
};

export default notice;