import { httpRequest, validateParam } from './../client/httpClient';

const camera = {
    /** getCameraDetail
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getCameraDetail: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId, null, resultCb, errorCb);
    },

    /** getShareCameraDetail
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getShareCameraDetail: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.cameraId, null, resultCb, errorCb);
    },

    /** getIsLastRecord
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getIsLastRecord: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/lastActivity', resultCb, errorCb);
    },

    /** getList - get Camera List */
    getList: (resultCb, errorCb) => {
        httpRequest('get', 'v2/cameras', null, resultCb, errorCb);
    },

    /** getShareList - get Shared Camera List */
    getShareList: (resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/received', null, resultCb, errorCb);
    },

    /** findCVR
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.cvrId - cvrId
     * @param {string} params.findDirection - direction to find cvr
     */
    findCVR: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'cvrId', 'findDirection'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/cvr/' + params.cvrId, { find: params.findDirection }, resultCb, errorCb);
    },

    /** getThumbnail
     * @param {Object} params
     * @param {string} params.cameraId
     * @param {string} params.sgid
     * @param {string} params.scale
     * @param {number} params.count
     * @param {number} params.lastTimestamp
     */
    getThumbnail: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'sgid', 'scale', 'count', 'lastTimestamp'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/v2/subEvents', {
            sgid: params.sgid,
            scale: params.scale,
            count: params.count,
            lastTimestamp: params.lastTimestamp
        }, resultCb, errorCb);
    },

    /** getShareCamThumbnail
     * @param {Object} params
     * @param {string} params.cameraId
     * @param {string} params.sgid
     * @param {string} params.scale
     * @param {number} params.count
     * @param {number} params.lastTimestamp
     * @param {string} params.zones
     */
    getShareCamThumbnail: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'sgid', 'scale', 'count', 'lastTimestamp', 'zones'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.cameraId + '/v2/subEvents', {
            sgid: params.sgid,
            scale: params.scale,
            count: params.count,
            lastTimestamp: params.lastTimestamp,
            zones: params.zones
        }, resultCb, errorCb);
    },

    /** orderChange
     * @param {Object} params
     * @param {string} params.cameraIds - cameraIds
     */
    orderChange: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraIds'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'cameras/order', params, resultCb, errorCb);
    },

    /** getCameraNotifyConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getCameraNotifyConfig: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/notifyConfig', null, resultCb, errorCb);
    },

    /** updateCameraNotifyConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.data - data
     */
    updateCameraNotifyConfig: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'data'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'cameras/' + params.cameraId + '/notifyConfig', params.data, resultCb, errorCb);
    },

    /** getCameraConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getCameraConfig: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/config', null, resultCb, errorCb);
    },

    /** updateCameraConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.cameraId - data
     */
    updateCameraConfig: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'data'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'cameras/' + params.cameraId + '/config', params.data, resultCb, errorCb);
    },

    /** getSharedCameraConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getSharedCameraConfig: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.cameraId + '/config', null, resultCb, errorCb);
    },

    /** getShareConfig
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getShareConfig: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/received/config', params, resultCb, errorCb);
    },

    /** upgradeCamera
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    upgradeCamera: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('post', 'cameras/firmwareUpgrade', params, resultCb, errorCb);
    },

    /** rtmpAudioChat
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.status - status
     */
    rtmpAudioChat: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'status'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('post', 'cameras/' + params.cameraId + '/audioChat', { status: params.status }, resultCb, errorCb);
    },

    /** registSecurePassword
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.securePassword - securePassword
     */
    registSecurePassword: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'securePassword'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('post', 'cameras/' + params.cameraId + '/securePassword', { securePassword: params.securePassword }, resultCb, errorCb);
    },

    /** confirmSecurePassword
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.securePassword - securePassword
     */
    confirmSecurePassword: (params, securePassword, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'securePassword'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('post', 'cameras/' + params.cameraId + '/secure', { securePassword: params.securePassword }, resultCb, errorCb);
    },

    /** toggleSecureMode
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.secureMode - secureMode
     */
    toggleSecureMode: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'secureMode'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'cameras/' + params.cameraId + '/secure', { secureMode: params.secureMode }, resultCb, errorCb);
    },

    /** deleteSecurePassword
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    deleteSecurePassword: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('delete', 'cameras/' + params.cameraId + '/securePassword', null, resultCb, errorCb);
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
        httpRequest('get', 'cameras/' + params.cameraId + '/token', null, resultCb, errorCb);
    },

    /** getShareCamToken
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getShareCamToken: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.cameraId + '/token', null, resultCb, errorCb);
    },

    /** getTokenList
     * @param {Object} params
     * @param {string} params.cameraIds - cameraIds
     */
    getTokenList: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraIds'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/token', params, resultCb, errorCb);
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
        httpRequest('put', 'cameras/token/' + params.tokenId, null, resultCb, errorCb);
    },

    /** getTimeline
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.scale - scale
     * @param {string} params.shopId - shopId
     */
    getTimeline: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'startTime', 'endTime', 'scale'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/v2/timeline', {
            start: params.startTime,
            end: params.endTime,
            scale: params.scale,
            shopId: params.shopId
        }, resultCb, errorCb);
    },

    /** getShareCamTimeline
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.scale - scale
     * @param {string} params.shopId - shopId
     */
    getShareCamTimeline: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'startTime', 'endTime', 'scale'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.cameraId + '/v2/timeline', {
            start: params.startTime,
            end: params.endTime,
            scale: params.scale,
            shopId: params.shopId
        }, resultCb, errorCb);
    },

    /** getEventGroup
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.startTime - startTime
     * @param {number} params.endTime - endTime
     * @param {string} params.mode - mode
     */
    getEventGroup: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'startTime', 'endTime', 'mode'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'v2/cameras/' + params.cameraId + '/eventGroups', {
            start: params.startTime,
            end: params.endTime,
            mode: params.mode
        }, resultCb, errorCb);
    },

    /** getDailyEvent
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.date - date
     */
    getDailyEvent: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'date'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/events/daily', { date: params.date }, resultCb, errorCb);
    },

    /** getShareCamDailyEvent
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {number} params.date - date
     */
    getShareCamDailyEvent: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'date'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.cameraId + '/events/daily', { date: params.date }, resultCb, errorCb);
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
        httpRequest('get', 'cameras/' + params.cameraId + '/alarmZones', resultCb, errorCb);
    },

    /** updateEventZone
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.zoneIndex - zoneIndex
     * @param {string} params.labelName - labelName
     * @param {string} params.status - status
     * @param {string} params.coordinate - coordinate
     */
    updateEventZone: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'zoneIndex', 'labelName', 'status', 'coordinate'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'cameras/' + params.cameraId + '/alarmZones/' + params.zoneIndex, {
            labelName: params.labelName,
            status: params.status,
            coordinate: params.coordinate
        }, resultCb, errorCb);
    },

    /** createEventZone
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    createEventZone: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('post', 'cameras/' + params.cameraId + '/alarmZones', resultCb, errorCb);
    },

    /** deleteEventZone
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.zoneIndex - zoneIndex
     */
    deleteEventZone: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'zoneIndex'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('delete', 'cameras/' + params.cameraId + '/alarmZones/' + params.zoneIndex, null, resultCb, errorCb);
    },

    /** updateAlarmZonesFiltersOnOff
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.zoneIndex - zoneIndex
     * @param {string} params.filterMark - filterMark
     */
    updateAlarmZonesFiltersOnOff: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'zoneIndex', 'filterMark'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'cameras/' + params.cameraId + '/alarmZones/filters', {
            zoneIndex: params.zoneIndex,
            filterMark: params.filterMark
        }, resultCb, errorCb);
    },

    /** getPrevEventWithRange
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.scale - zoneIndex
     * @param {string} params.queryTime - filterMark
     * @param {string} params.range - range
     * @param {string} params.filters - filters
     */
    getPrevEventWithRange: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'scale', 'queryTime', 'range', 'filters'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/prevEventWithRange', {
            scale: params.scale,
            queryTime: params.queryTime,
            range: params.range,
            filters: params.filters
        }, resultCb, errorCb);
    },

    /** getNextEventWithRange
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.scale - zoneIndex
     * @param {string} params.queryTime - filterMark
     * @param {string} params.range - range
     * @param {string} params.filters - filters
     */
    getNextEventWithRange: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'scale', 'queryTime', 'range', 'filters'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'cameras/' + params.cameraId + '/nextEventWithRange', {
            scale: params.scale,
            queryTime: params.queryTime,
            range: params.range,
            filters: params.filters
        }, resultCb, errorCb);
    },

    /** shareCamera
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.receiverId - receiverId
     * @param {string} params.receiverName - receiverName
     * @param {string} params.shareOptions - shareOptions
     */
    shareCamera: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'receiverId', 'receiverName', 'shareOptions'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('post', 'share/cameras', params, resultCb, errorCb);
    },

    /** getShareReceivers
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     */
    getShareReceivers: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.cameraId + '/receivers', null, resultCb, errorCb);
    },

    /** removeSharedCamera
     * @param {Object} params
     * @param {string} params.cameraId - cameraId
     * @param {string} params.sharedCameraUid - sharedCameraUid
     */
    removeSharedCamera: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['cameraId', 'sharedCameraUid'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('delete', 'share/cameras/' + params.cameraId + '/' + params.sharedCameraUid, null, resultCb, errorCb);
    },

    /** rejectSharedCamera
     * @param {Object} params
     * @param {string} params.sharedCameraUid - sharedCameraUid
     * @param {boolean} params.isRejected - isRejected
     */
    rejectSharedCamera: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['sharedCameraUid', 'isRejected'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'share/cameras/' + params.sharedCameraUid, { isRejected: params.isRejected }, resultCb, errorCb);
    },

    /** getCamShareOptions
     * @param {Object} params
     * @param {string} params.shareId - shareId
     */
    getCamShareOptions: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['shareId'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('get', 'share/cameras/' + params.shareId + '/shareOptions', null, resultCb, errorCb);
    },

    /** updateCamShareOptions
     * @param {Object} params
     * @param {string} params.shareId - shareId
     * @param {string} params.shareOptionData - shareOptionData
     */
    updateCamShareOptions: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['shareId', 'shareOptionData'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'share/cameras/' + params.shareId + '/shareOptions', params.shareOptionData, resultCb, errorCb);
    }
};

export default camera;