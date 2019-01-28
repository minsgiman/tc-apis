import { httpRequest, validateParam } from './../client/httpClient';

const account = {
    /** me - get login user info */
    me: (resultCb, errorCb) => {
        httpRequest('get', 'v2/users/me', null, resultCb, errorCb);
    },

    /** signout */
    signout: (resultCb, errorCb) => {
        httpRequest('delete', 'v2/users/me', null, resultCb, errorCb);
    },

    /** logout */
    logout: (resultCb, errorCb) => {
        httpRequest('get', 'logout', null, resultCb, errorCb);
    },

    /** lbsAgree
     * @param {Object} params
     * @param {boolean} params.isAgreed - agree with location-based service
     */
    lbsAgree: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['isAgreed'])) {
            errorCb('wrong params');
            return;
        }
        httpRequest('put', 'users/me/lbsAgreed', params, resultCb, errorCb);
    },

    /** checkEmailDup
     * @param {Object} params
     * @param {string} params.email - email address
     */
    checkEmailDup: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('get', prefix + '/checkEmailDup', params, resultCb, errorCb);
    },

    /** createUser
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.password - password
     * @param {string} params.country - country
     */
    createUser: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email', 'password', 'country'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('post', prefix, params, resultCb, errorCb);
    },

    /** sendAuthEmail
     * @param {Object} params
     * @param {string} params.email - email address
     */
    sendAuthEmail: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('put', prefix + '/sendAuthEmail', params, resultCb, errorCb);
    },

    /** emailAuth
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.authKey - authKey
     */
    emailAuth: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email', 'authKey'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('put', prefix + '/emailAuth', params, resultCb, errorCb);
    },

    /** checkEmail
     * @param {Object} params
     * @param {string} params.email - email address
     */
    checkEmail: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('get', prefix + '/checkEmail', params, resultCb, errorCb);
    },

    /** searchPassword
     * @param {Object} params
     * @param {string} params.email - email address
     */
    searchPassword: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('put', prefix + '/searchPassword', params, resultCb, errorCb);
    },

    /** emailAuthPassword
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.authKey - authKey
     * @param {string} params.password - password
     */
    emailAuthPassword: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email', 'authKey', 'password'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('post', prefix + '/emailAuthPassword', params, resultCb, errorCb);
    },

    /** checkPassword
     * @param {Object} params
     * @param {string} params.password - password
     */
    checkPassword: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['password'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('post', prefix + '/checkPassword', params, resultCb, errorCb);
    },

    /** updatePassword
     * @param {Object} params
     * @param {string} params.password - password
     * @param {string} params.newPassword - newPassword
     */
    updatePassword: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['password', 'newPassword'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('post', prefix + '/updatePassword', params, resultCb, errorCb);
    },

    /** login
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.password - password
     */
    login: (params, resultCb, errorCb) => {
        if (!validateParam(params, ['email', 'password'])) {
            errorCb('wrong params');
            return;
        }
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('post', prefix + '/login', params, resultCb, errorCb);
    },

    /** eMailLogout */
    eMailLogout: (resultCb, errorCb) => {
        let prefix = (location.href.indexOf('bizcam') != -1) ? 'bizToastcamUser' : 'b2c/toastcamUser';
        httpRequest('get', prefix + '/logout', null, resultCb, errorCb);
    }
};

export default account;