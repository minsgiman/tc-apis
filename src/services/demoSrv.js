const demo = {
    /**
     * get Demo Camera
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_DEMO_CAMERA: {
        method: 'get',
        url: 'demo/cameras/:cameraId'
    },

    /**
     * get Demo Cameras
     */
    GET_DEMO_CAMERAS: {
        method: 'get',
        url: 'demo/cameras'
    },

    /**
     * get Timeline
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.scale - scale
     */
    GET_TIMELINE: {
        method: 'get',
        url: 'demo/cameras/:cameraId/v2/timeline'
    },

    /**
     * get Thumbnail
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.sgid - sgid
     * @param {string} params.scale - scale
     * @param {number} params.count - count
     * @param {strnumbering} params.lastTimestamp - lastTimestamp
     */
    GET_THUMBNAIL: {
        method: 'get',
        url: 'demo/cameras/:cameraId/v2/subEvents'
    },

    /**
     * get Token
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_TOKEN: {
        method: 'get',
        url: 'demo/cameras/:cameraId/token'
    },

    /**
     * extend Token
     * @param {Object} params
     * @param {string} params.tokenId - tokenId
     */
    EXTEND_TOKEN: {
        method: 'put',
        url: 'demo/cameras/token/:tokenId'
    },

    /**
     * check IsLastRecord
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    CHECK_IS_LAST_RECORD: {
        method: 'get',
        url: 'demo/cameras/:cameraId/lastActivity'
    },

    /**
     * get EventZones
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_EVENT_ZONES: {
        method: 'get',
        url: 'demo/cameras/:cameraId/alarmZones'
    }
};

export default demo;