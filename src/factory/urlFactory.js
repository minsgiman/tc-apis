const apiPrefix = (apiServerUrl.indexOf('bizcam') != -1) ? '/json/biz' : '/json';

let apiServerUrl = location.origin;
if(!apiServerUrl){
    apiServerUrl = location.protocol+"//"+location.hostname;
}

const urlFactory = {
    oAuthLoginRedirectURL: (nexUrl) => {
        const url = 'https://auth.toast.com/authorize?serviceCallbackUrl=' + encodeURIComponent(apiServerUrl + apiPrefix + '/payco/logIn?next_uri=' + nexUrl);

        return url;
        // login
        // https://auth.toast.com/authorize?serviceCallbackUrl=https://cam.toast.com/json/payco/logIn?next_uri=https://cam.toast.com/lproc?deviceType=web&state=1&userLocale=ko_KR
        // https://auth.toast.com/authorize?serviceCallbackUrl= https://bizcam.toast.com/json/biz/payco/logIn?next_uri= https://bizcam.toast.com/lproc?deviceType=web&state=1&userLocale=ko_KR
    },

    oAuthLogoutRedirectURL: (nexUrl) => {
        const url = 'https://auth.toast.com/logout?serviceCallbackUrl=' + encodeURIComponent(apiServerUrl + apiPrefix + '/payco/logOut?next_uri=' + nexUrl);

        return url;
        //logout
        // https://auth.toast.com/logout?serviceCallbackUrl= https://bizcam.toast.com/json/biz/payco/logOut?next_uri= https://bizcam.toast.com/lproc/logout?deviceType=web&state=1
    },

    policyAgreeApiUrl: (lbsAgree, nexUrl) => {
        const url = apiServerUrl + apiPrefix + "/payco/logIn?policyAgree=ok&lbsAgree=" + lbsAgree + "&next_uri=" + nexUrl;

        return url;
        //window.location.href = httpUrl + "/json/biz/payco/logIn?policyAgree=ok&lbsAgree=" + lbsAgree + "&next_uri="+encodeURIComponent(httpUrl+"/#/lproc?deviceType=web&state=1");
    }
};

export default urlFactory;