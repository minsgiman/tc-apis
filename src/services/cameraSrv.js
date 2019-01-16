import httpRequest from './../client/httpClient';

const camera = {
    /*** Camera Detail ***/
    getCameraDetail: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId, null, resultCb, errorCb);
    },
    getShareCameraDetail: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + cameraId, null, resultCb, errorCb);
    },
    getIsLastRecord: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/lastActivity', resultCb, errorCb);
    },
    getList: (resultCb, errorCb) => {
        httpRequest('get', 'v2/cameras', null, resultCb, errorCb);
    },
    getShareList: (resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/received', null, resultCb, errorCb);
    },
    findCVR: (cameraId, cvrId, findDirection, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/cvr/' + cvrId, { find: findDirection }, resultCb, errorCb);
    },
    getThumbnail: (cameraId, sgid, scale, count, lastTimestamp, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/v2/subEvents', { sgid, scale, count, lastTimestamp }, resultCb, errorCb);
    },
    getShareCamThumbnail: (cameraId, sgid, scale, count, lastTimestamp, zones, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + cameraId + '/v2/subEvents', { sgid, scale, count, lastTimestamp, zones }, resultCb, errorCb);
    },

    /*** Camera Setting ***/
    orderChange: (cameraIds, resultCb, errorCb) => {
        httpRequest('put', 'cameras/order', { cameraIds }, resultCb, errorCb);
    },
    getCameraNotifyConfig: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/notifyConfig', null, resultCb, errorCb);
    },
    updateCameraNotifyConfig: (cameraId, data, resultCb, errorCb) => {
        httpRequest('put', 'cameras/' + cameraId + '/notifyConfig', data, resultCb, errorCb);
    },
    getCameraConfig: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/config', null, resultCb, errorCb);
    },
    updateCameraConfig: (cameraId, data, resultCb, errorCb) => {
        httpRequest('put', 'cameras/' + cameraId + '/config', data, resultCb, errorCb);
    },
    getSharedCameraConfig: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + cameraId + '/config', null, resultCb, errorCb);
    },
    getShareConfig: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/received/config', { cameraId }, resultCb, errorCb);
    },
    upgradeCamera: (cameraId, resultCb, errorCb) => {
        httpRequest('post', 'cameras/firmwareUpgrade', { cameraId }, resultCb, errorCb);
    },
    rtmpAudioChat: (cameraId, status, resultCb, errorCb) => {
        httpRequest('post', 'cameras/' + cameraId + '/audioChat', { status }, resultCb, errorCb);
    },
    registSecurePassword: (cameraId, securePassword, resultCb, errorCb) => {
        httpRequest('post', 'cameras/' + cameraId + '/securePassword', { securePassword }, resultCb, errorCb);
    },
    confirmSecurePassword: (cameraId, securePassword, resultCb, errorCb) => {
        httpRequest('post', 'cameras/' + cameraId + '/secure', { securePassword }, resultCb, errorCb);
    },
    toggleSecureMode: (cameraId, secureMode, resultCb, errorCb) => {
        httpRequest('put', 'cameras/' + cameraId + '/secure', { secureMode }, resultCb, errorCb);
    },
    deleteSecurePassword: (cameraId, resultCb, errorCb) => {
        httpRequest('delete', 'cameras/' + cameraId + '/securePassword', null, resultCb, errorCb);
    },

    /*** Token ***/
    getToken: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/token', null, resultCb, errorCb);
    },
    getShareCamToken: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + cameraId + '/token', null, resultCb, errorCb);
    },
    getTokenList: (cameraIds, resultCb, errorCb) => {
        httpRequest('get', 'cameras/token', {cameraIds}, resultCb, errorCb);
    },
    extendToken: (tokenId, resultCb, errorCb) => {
        httpRequest('put', 'cameras/token/' + tokenId, null, resultCb, errorCb);
    },

    /*** Timeline ***/
    getTimeline: (cameraId, startTime, endTime, scale, shopId, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/v2/timeline', { start: startTime, end: endTime, scale, shopId }, resultCb, errorCb);
    },
    getShareCamTimeline: (cameraId, startTime, endTime, scale, shopId, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + cameraId + '/v2/timeline', { start: startTime, end: endTime, scale, shopId }, resultCb, errorCb);
    },

    /*** Event ***/
    getEventGroup: (cameraId, startTime, endTime, mode, resultCb, errorCb) => {
        httpRequest('get', 'v2/cameras/' + cameraId + '/eventGroups', { start: startTime, end: endTime, mode }, resultCb, errorCb);
    },
    getDailyEvent: (cameraId, date, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/events/daily', { date }, resultCb, errorCb);
    },
    getShareCamDailyEvent: (cameraId, date, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + cameraId + '/events/daily', { date }, resultCb, errorCb);
    },
    getEventZones: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/alarmZones', resultCb, errorCb);
    },
    updateEventZone: (cameraId, zoneIndex, labelName, status, coordinate, resultCb, errorCb) => {
        httpRequest('put', 'cameras/' + cameraId + '/alarmZones/' + zoneIndex, { labelName, status, coordinate }, resultCb, errorCb);
    },
    createEventZone: (cameraId, resultCb, errorCb) => {
        httpRequest('post', 'cameras/' + cameraId + '/alarmZones', resultCb, errorCb);
    },
    deleteEventZone: (cameraId, zoneIndex, resultCb, errorCb) => {
        httpRequest('delete', 'cameras/' + cameraId + '/alarmZones/' + zoneIndex, null, resultCb, errorCb);
    },
    updateAlarmZonesFiltersOnOff: (cameraId, zoneIndex, filterMark, resultCb, errorCb) => {
        httpRequest('put', 'cameras/' + cameraId + '/alarmZones/filters', { zoneIndex, filterMark }, resultCb, errorCb);
    },
    getPrevEventWithRange: (cameraId, scale, queryTime, range, filters, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/prevEventWithRange', { scale, queryTime, range, filters }, resultCb, errorCb);
    },
    getNextEventWithRange: (cameraId, scale, queryTime, range, filters, resultCb, errorCb) => {
        httpRequest('get', 'cameras/' + cameraId + '/nextEventWithRange', { scale, queryTime, range, filters }, resultCb, errorCb);
    },

    /*** Share ***/
    shareCamera: (cameraId, receiverId, receiverName, shareOptions, resultCb, errorCb) => {
        httpRequest('post', 'share/cameras', { cameraId, receiverId, receiverName, shareOptions }, resultCb, errorCb);
    },
    getShareReceivers: (cameraId, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + cameraId + '/receivers', null, resultCb, errorCb);
    },
    removeSharedCamera: (cameraId, sharedCameraUid, resultCb, errorCb) => {
        httpRequest('delete', 'share/cameras/' + cameraId + '/' + sharedCameraUid, null, resultCb, errorCb);
    },
    rejectSharedCamera: (sharedCameraUid, isRejected, resultCb, errorCb) => {
        httpRequest('put', 'share/cameras/' + sharedCameraUid, { isRejected }, resultCb, errorCb);
    },
    getCamShareOptions: (shareId, resultCb, errorCb) => {
        httpRequest('get', 'share/cameras/' + shareId + '/shareOptions', null, resultCb, errorCb);
    },
    updateCamShareOptions: (shareId, shareOptionData, resultCb, errorCb) => {
        httpRequest('put', 'share/cameras/' + shareId + '/shareOptions', shareOptionData, resultCb, errorCb);
    }
};

export default camera;