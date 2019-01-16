import httpRequest from './../client/httpClient';

const account = {
    me: (resultCb, errorCb) => {
        httpRequest('get', 'v2/users/me', null, resultCb, errorCb);
    },
    signout: (resultCb, errorCb) => {
        httpRequest('delete', 'v2/users/me', null, resultCb, errorCb);
    },
    logout: (resultCb, errorCb) => {
        httpRequest('get', 'logout', null, resultCb, errorCb);
    },
    lbsAgree: (isAgreed, resultCb, errorCb) => {
        httpRequest('put', 'users/me/lbsAgreed', { isAgreed }, resultCb, errorCb);
    },

    /*** eMail User API ***/
    checkEmailDup: (email, resultCb, errorCb) => {
        httpRequest('get', 'b2c/toastcamUser/checkEmailDup', { email }, resultCb, errorCb);
    },
    createUser: (email, password, country, resultCb, errorCb) => {
        httpRequest('post', 'b2c/toastcamUser', { email, password, country }, resultCb, errorCb);
    },
    sendAuthEmail: (email, resultCb, errorCb) => {
        httpRequest('put', 'b2c/toastcamUser/sendAuthEmail', { email }, resultCb, errorCb);
    },
    emailAuth: (email, authKey, resultCb, errorCb) => {
        httpRequest('put', 'b2c/toastcamUser/emailAuth', { email, authKey }, resultCb, errorCb);
    },
    checkEmail: (email, resultCb, errorCb) => {
        httpRequest('get', 'b2c/toastcamUser/checkEmail', { email }, resultCb, errorCb);
    },
    searchPassword: (email, resultCb, errorCb) => {
        httpRequest('put', 'b2c/toastcamUser/searchPassword', { email }, resultCb, errorCb);
    },
    emailAuthPassword: (email, authKey, password, resultCb, errorCb) => {
        httpRequest('post', 'b2c/toastcamUser/emailAuthPassword', { email, authKey, password }, resultCb, errorCb);
    },
    checkPassword: (password, resultCb, errorCb) => {
        httpRequest('post', 'b2c/toastcamUser/checkPassword', { password }, resultCb, errorCb);
    },
    updatePassword: (password, newPassword, resultCb, errorCb) => {
        httpRequest('post', 'b2c/toastcamUser/updatePassword', { password, newPassword }, resultCb, errorCb);
    },
    login: (email, password, resultCb, errorCb) => {
        httpRequest('post', 'b2c/toastcamUser/login', { email, password }, resultCb, errorCb);
    },
    eMailLogout: (resultCb, errorCb) => {
        httpRequest('get', 'b2c/toastcamUser/logout', null, resultCb, errorCb);
    },

    /*** Biz eMail User API ***/
    bizCheckEmailDup: (email, resultCb, errorCb) => {
        httpRequest('get', 'bizToastcamUser/checkEmailDup', { email }, resultCb, errorCb);
    },
    bizCreateUser: (email, password, country, resultCb, errorCb) => {
        httpRequest('post', 'bizToastcamUser', { email, password, country }, resultCb, errorCb);
    },
    bizSendAuthEmail: (email, resultCb, errorCb) => {
        httpRequest('put', 'bizToastcamUser/sendAuthEmail', { email }, resultCb, errorCb);
    },
    bizEmailAuth: (email, authKey, resultCb, errorCb) => {
        httpRequest('put', 'bizToastcamUser/emailAuth', { email, authKey }, resultCb, errorCb);
    },
    bizCheckEmail: (email, resultCb, errorCb) => {
        httpRequest('get', 'bizToastcamUser/checkEmail', { email }, resultCb, errorCb);
    },
    bizSearchPassword: (email, resultCb, errorCb) => {
        httpRequest('put', 'bizToastcamUser/searchPassword', { email }, resultCb, errorCb);
    },
    bizEmailAuthPassword: (email, authKey, password, resultCb, errorCb) => {
        httpRequest('post', 'bizToastcamUser/emailAuthPassword', { email, authKey, password }, resultCb, errorCb);
    },
    bizCheckPassword: (password, resultCb, errorCb) => {
        httpRequest('post', 'bizToastcamUser/checkPassword', { password }, resultCb, errorCb);
    },
    bizUpdatePassword: (password, newPassword, resultCb, errorCb) => {
        httpRequest('post', 'bizToastcamUser/updatePassword', { password, newPassword }, resultCb, errorCb);
    },
    bizLogin: (email, password, resultCb, errorCb) => {
        httpRequest('post', 'bizToastcamUser/login', { email, password }, resultCb, errorCb);
    },
    bizLogout: (resultCb, errorCb) => {
        httpRequest('get', 'bizToastcamUser/logout', null, resultCb, errorCb);
    }
};

export default account;