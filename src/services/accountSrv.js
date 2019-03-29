const account = {
    /**
     * me - get login user info
     */
    ME: {
        method: 'get',
        url: 'v2/users/me'
    },

    /**
     * signout
     */
    SIGNOUT: {
        method: 'delete',
        url: 'v2/users/me'
    },

    /**
     * logout
     */
    LOGOUT: {
        method: 'get',
        url: 'logout'
    },

    /**
     * location-based service Agree
     * @param {Object} params
     * @param {boolean} params.isAgreed - agree with location-based service
     */
    LBS_AGREE: {
        method: 'put',
        url: 'users/me/lbsAgreed'
    },

    /**
     * check Email Exist
     * @param {Object} params
     * @param {string} params.email - email address
     */
    CHECK_EMAIL_EXIST: {
        method: 'get',
        url: 'b2c/toastcamUser/checkEmailDup'
    },
    BIZ_CHECK_EMAIL_EXIST: {
        method: 'get',
        url: 'bizToastcamUser/checkEmailDup'
    },

    /**
     * create User
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.password - password
     * @param {string} params.country - country
     */
    CREATE_USER: {
        method: 'post',
        url: 'b2c/toastcamUser'
    },
    BIZ_CREATE_USER: {
        method: 'post',
        url: 'bizToastcamUser'
    },

    /**
     * send Auth Email
     * @param {Object} params
     * @param {string} params.email - email address
     */
    SEND_AUTH_EMAIL: {
        method: 'put',
        url: 'b2c/toastcamUser/sendAuthEmail'
    },
    BIZ_SEND_AUTH_EMAIL: {
        method: 'put',
        url: 'bizToastcamUser/sendAuthEmail'
    },

    /**
     * email Auth
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.authKey - authKey
     */
    EMAIL_AUTH: {
        method: 'put',
        url: 'b2c/toastcamUser/emailAuth'
    },
    BIZ_EMAIL_AUTH: {
        method: 'put',
        url: 'bizToastcamUser/emailAuth'
    },

    /**
     * check Email
     * @param {Object} params
     * @param {string} params.email - email address
     */
    CHECK_EMAIL: {
        method: 'get',
        url: 'b2c/toastcamUser/checkEmail'
    },
    BIZ_CHECK_EMAIL: {
        method: 'get',
        url: 'bizToastcamUser/checkEmail'
    },

    /**
     * search Password
     * @param {Object} params
     * @param {string} params.email - email address
     */
    SEARCH_PASSWORD: {
        method: 'put',
        url: 'b2c/toastcamUser/searchPassword'
    },
    BIZ_SEARCH_PASSWORD: {
        method: 'put',
        url: 'bizToastcamUser/searchPassword'
    },

    /**
     * email Auth Password
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.authKey - authKey
     * @param {string} params.password - password
     */
    EMAIL_AUTH_PASSWORD: {
        method: 'post',
        url: 'b2c/toastcamUser/emailAuthPassword'
    },
    BIZ_EMAIL_AUTH_PASSWORD: {
        method: 'post',
        url: 'bizToastcamUser/emailAuthPassword'
    },

    /**
     * check Password
     * @param {Object} params
     * @param {string} params.password - password
     */
    CHECK_PASSWORD: {
        method: 'post',
        url: 'b2c/toastcamUser/checkPassword'
    },
    CHECK_PASSWORD: {
        method: 'post',
        url: 'bizToastcamUser/checkPassword'
    },

    /**
     * update Password
     * @param {Object} params
     * @param {string} params.password - password
     * @param {string} params.newPassword - newPassword
     */
    UPDATE_PASSWORD: {
        method: 'post',
        url: 'b2c/toastcamUser/updatePassword'
    },
    BIZ_UPDATE_PASSWORD: {
        method: 'post',
        url: 'bizToastcamUser/updatePassword'
    },

    /**
     * login
     * @param {Object} params
     * @param {string} params.email - email address
     * @param {string} params.password - password
     */
    LOGIN: {
        method: 'post',
        url: 'b2c/toastcamUser/login'
    },
    BIZ_LOGIN: {
        method: 'post',
        url: 'bizToastcamUser/login'
    },

    /**
     * eMail Logout
     */
    EMAIL_LOGOUT: {
        method: 'get',
        url: 'b2c/toastcamUser/logout'
    },
    BIZ_EMAIL_LOGOUT: {
        method: 'get',
        url: 'bizToastcamUser/logout'
    }
};

export default account;