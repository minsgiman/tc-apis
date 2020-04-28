const camera = {
    /**
     * get Camera Detail
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_CAMERA_DETAIL: {
        method: 'get',
        url: 'cameras/:cameraId'
    },

    /**
     * get ShareCamera Detail
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_SHARE_CAMERA_DETAIL: {
        method: 'get',
        url: 'share/cameras/:cameraId'
    },

    /**
     *  get IsLastRecord
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    CHECK_IS_LAST_RECORD: {
        method: 'get',
        url: 'cameras/:cameraId/lastActivity'
    },

    /**
     * get Camera List
     */
    GET_LIST: {
        method: 'get',
        url: 'v2/cameras'
    },

    /**
     * get Shared Camera List
     */
    GET_SHARE_LIST: {
        method: 'get',
        url: 'share/cameras/received'
    },

    /**
     * find CVR
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.cvrId - cvrId
     * @param {string} params.find - direction to find cvr
     */
    FIND_CVR: {
        method: 'get',
        url: 'cameras/:cameraId/cvr/:cvrId'
    },

    /**
     * get Thumbnail
     * @param {Object} params
     * @param {string} params.cameraId
     * @param {string} params.sgid
     * @param {string} params.scale
     * @param {number} params.count
     * @param {number} params.lastTimestamp
     */
    GET_THUMBNAIL: {
        method: 'get',
        url: 'cameras/:cameraId/v2/subEvents'
    },

    /**
     * get ShareCam Thumbnail
     * @param {Object} params
     * @param {string} params.cameraId
     * @param {string} params.sgid
     * @param {string} params.scale
     * @param {number} params.count
     * @param {number} params.lastTimestamp
     * @param {string} params.zones
     */
    GET_SHRARE_CAM_THUMBNAIL: {
        method: 'get',
        url: 'share/cameras/:cameraId/v2/subEvents'
    },

    /**
     * camera order Change
     * @param {Object} params
     * @param {string} params.cameraIds - cameraIds
     */
    ORDER_CHANGE: {
        method: 'put',
        url: 'cameras/order'
    },

    /**
     * get Camera Notify Config
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_CAMERA_NOTIFY_CONFIG: {
        method: 'get',
        url: 'cameras/:cameraId/notifyConfig'
    },

    /**
     * update Camera Notify Config
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.data - data
     */
    UPDATE_CAMERA_NOTIFY_CONFIG: {
        method: 'put',
        url: 'cameras/:cameraId/notifyConfig'
    },

    /**
     * get CameraConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_CAMERA_CONFIG: {
        method: 'get',
        url: 'cameras/:cameraId/config'
    },

    /**
     * update CameraConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.cameraId - data
     */
    UPDATE_CAMERA_CONFIG: {
        method: 'put',
        url: 'cameras/:cameraId/config'
    },

    /**
     * get SharedCamera Config
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_SHARED_CAMERA_CONFIG: {
        method: 'get',
        url: 'share/cameras/:cameraId/config'
    },

    /**
     * get ShareConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_SHARE_CONFIG: {
        method: 'get',
        url: 'share/cameras/received/config'
    },

    /**
     * upgrade Camera
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    UPGRADE_CAMERA: {
        method: 'post',
        url: 'cameras/firmwareUpgrade'
    },

    /**
     * rtmp AudioChat
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.status - status
     */
    RTMP_AUDIOCHAT: {
        method: 'post',
        url: 'cameras/:cameraId/audioChat'
    },

    /**
     * regist SecurePassword
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.securePassword - securePassword
     */
    REGIST_SECURE_PASSWORD: {
        method: 'post',
        url: 'cameras/:cameraId/securePassword'
    },

    /**
     * confirm SecurePassword
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.securePassword - securePassword
     */
    CONFIRM_SECURE_PASSWORD: {
        method: 'post',
        url: 'cameras/:cameraId/secure'
    },

    /**
     * toggle SecureMode
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.secureMode - secureMode
     */
    TOGGLE_SECURE_MODE: {
        method: 'put',
        url: 'cameras/:cameraId/secure'
    },

    /**
     * delete SecurePassword
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    DELETE_SECURE_PASSWORD: {
        method: 'delete',
        url: 'cameras/:cameraId/securePassword'
    },

    /**
     * get Token
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_TOKEN: {
        method: 'get',
        url: 'cameras/:cameraId/token'
    },

    /**
     * get SharedCam Token
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_SHARE_CAM_TOKEN: {
        method: 'get',
        url: 'share/cameras/:cameraId/token'
    },

    /**
     * get TokenList
     * @param {Object} params
     * @param {string} params.cameraIds - cameraIds
     */
    GET_TOKEN_LIST: {
        method: 'get',
        url: 'cameras/token'
    },

    /**
     * extend Token
     * @param {Object} params
     * @param {string} params.tokenId - tokenId
     */
    EXTEND_TOKEN: {
        method: 'put',
        url: 'cameras/token/:tokenId'
    },

    /**
     * get Timeline
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.scale - scale
     * @param {string} params.shopId - shopId
     */
    GET_TIMELINE: {
        method: 'get',
        url: 'cameras/:cameraId/v2/timeline'
    },

    /**
     * get SharedCam Timeline
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.scale - scale
     * @param {string} params.shopId - shopId
     */
    GET_SHARE_CAM_TIMELINE: {
        method: 'get',
        url: 'share/cameras/:cameraId/v2/timeline'
    },

    /**
     * get EventGroup
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.mode - mode
     */
    GET_EVENT_GROUP: {
        method: 'get',
        url: 'v2/cameras/:cameraId/eventGroups'
    },

    /**
     * get DailyEvent
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.date - date
     */
    GET_DAILY_EVENT: {
        method: 'get',
        url: 'cameras/:cameraId/events/daily'
    },

    /**
     * get SharedCam DailyEvent
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.date - date
     */
    GET_SHARE_CAM_DAILY_EVENT: {
        method: 'get',
        url: 'share/cameras/:cameraId/events/daily'
    },

    /**
     * get EventZones
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_EVENT_ZONES: {
        method: 'get',
        url: 'cameras/:cameraId/alarmZones'
    },

    /**
     * update EventZone
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.zoneIndex - zoneIndex
     * @param {string} params.labelName - labelName
     * @param {string} params.status - status
     * @param {string} params.coordinate - coordinate
     */
    UPDATE_EVENT_ZONE: {
        method: 'put',
        url: 'cameras/:cameraId/alarmZones/:zoneIndex'
    },

    /**
     * create EventZone
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    CREATE_EVENT_ZONE: {
        method: 'post',
        url: 'cameras/:cameraId/alarmZones'
    },

    /**
     * delete EventZone
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.zoneIndex - zoneIndex
     */
    DELETE_EVENT_ZONE: {
        method: 'delete',
        url: 'cameras/:cameraId/alarmZones/:zoneIndex'
    },

    /**
     * update AlarmZones Filters OnOff
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.zoneIndex - zoneIndex
     * @param {string} params.filterMark - filterMark
     */
    UPDATE_ALARM_ZONES_FILTER_STATUS: {
        method: 'put',
        url: 'cameras/:cameraId/alarmZones/filters'
    },

    /**
     * get PrevEvent With Range
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.scale - zoneIndex
     * @param {string} params.queryTime - filterMark
     * @param {string} params.range - range
     * @param {string} params.filters - filters
     */
    GET_PREV_EVENT_WITH_RANGE: {
        method: 'get',
        url: 'cameras/:cameraId/prevEventWithRange'
    },

    /**
     * get NextEvent With Range
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.scale - zoneIndex
     * @param {string} params.queryTime - filterMark
     * @param {string} params.range - range
     * @param {string} params.filters - filters
     */
    GET_NEXT_EVENT_WITH_RANGE: {
        method: 'get',
        url: 'cameras/:cameraId/nextEventWithRange'
    },

    /**
     * shared Camera List
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.receiverId - receiverId
     * @param {string} params.receiverName - receiverName
     * @param {string} params.shareOptions - shareOptions
     */
    SHARE_CAMERA: {
        method: 'post',
        url: 'share/cameras'
    },

    /**
     * get ShareReceivers
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    GET_SHARE_RECEIVERS: {
        method: 'get',
        url: 'share/cameras/:cameraId/receivers'
    },

    /**
     * remove SharedCamera
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.sharedCameraUid - sharedCameraUid
     */
    REMOVE_SHARED_CAMERA: {
        method: 'delete',
        url: 'share/cameras/:cameraId/:sharedCameraUid'
    },

    /**
     * reject SharedCamera
     * @param {Object} params
     * @param {string} params.sharedCameraUid - sharedCameraUid
     * @param {boolean} params.isRejected - isRejected
     */
    REJECT_SHARED_CAMERA: {
        method: 'put',
        url: 'share/cameras/:sharedCameraUid'
    },

    /**
     * get Camera ShareOptions
     * @param {Object} params
     * @param {string} params.shareId - shareId
     */
    GET_CAM_SHARE_OPTIONS: {
        method: 'get',
        url: 'share/cameras/:shareId/shareOptions'
    },

    /**
     * update Camera ShareOptions
     * @param {Object} params
     * @param {string} params.shareId - shareId
     * @param {string} params.shareOptionData - shareOptionData
     */
    UPDATE_CAM_SHARE_OPTIONS: {
        method: 'put',
        url: 'share/cameras/:shareId/shareOptions'
    },

    GET_STREAMING_SERVER: {
        method: 'get',
        url: 'streamingServer'
    }
};

export default camera;