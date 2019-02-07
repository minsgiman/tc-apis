const clip = {
    /**
     * get Clip
     * @param {Object} params
     * @param {string} params.clipId - clipId
     */
    GET_CLIP: {
        method: 'get',
        url: 'clips/:clipId'
    },

    /**
     * get Available Range
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.type - type
     */
    GET_AVAILABLE_RANGE: {
        method: 'get',
        url: 'clips/availableRange'
    },

    /**
     * share Sns Info
     * @param {Object} params
     * @param {string} params.clipId - clipId
     */
    SHARE_SNS_INFO: {
        method: 'get',
        url: 'clips/:clipId/shareURL'
    },

    /**
     * label Update
     * @param {Object} params
     * @param {string} params.clipId - clipId
     * @param {string} params.labelName - labelName
     */
    LABEL_UPDATE: {
        method: 'put',
        url: 'clips/:clipId'
    }
};

export default clip;