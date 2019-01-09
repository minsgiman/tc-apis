import $ from "jquery";


const shopAPI = {
    // getCloudDemoCameras: () => {
    //     return new Promise((resolve) => {
    //         resolve();
    //     });
    // },

    getTimeline: (cameraId) => {

        return new Promise((resolve, reject) => {
            $.ajax({
                method:'get',
                url: "https://bizcam.toast.com/json/biz/cameras/" + cameraId + "/v2/timeline",
                dataType: 'json'
            }).done(function(res) {
                resolve(res);
            }).fail(function(err) {
                reject();
            });
        });
    }
};

// $.ajax({
//     method:'get',
//     url: "https://bizcam.toast.com/json/biz/demo/cloudmonitor/cameras",
//     dataType: 'json'
// }).done(function(res) {
//     resolve(res);
// }).fail(function(err) {
//     reject();
// });

export default shopAPI;

