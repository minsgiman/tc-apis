
import tCamAPI from '@/api.esm';
import httpRequest from "../../../src/client/httpClient";

// describe('Camera List', () => {
//     let _res = null;
//     beforeEach(function(done) {
//         cameraSrv.getList((res) => {
//             _res = res;
//             console.log(JSON.stringify(_res));
//             done();
//         }, (err) => {
//             console.log(JSON.stringify(err));
//             done();
//         });
//     }, 5 * 1000);
//
//     it('get camera List', () => {
//         expect(_res).toBeDefined();
//     });
// });
//
// describe('Secure', () => {
//     let _res = null;
//     beforeEach(function(done) {
//         cameraSrv.registSecurePassword('AAAAAABB', '12345', (res) => {
//             _res = res;
//             done();
//         })
//     }, 5 * 1000);
//
//     it ('regist Res', () => {
//         expect(_res).toBeDefined();
//     })
// });


describe('CVR', () => {
    let _res = null;
    beforeEach(function(done) {
        tCamAPI.camera.findCVR('AAAAAABB', 'dddd', 'previous', (res) => {
            _res = res;
            console.log(JSON.stringify(_res));
            done();
        }, (err) => {
            console.log(JSON.stringify(err));
            done();
        });
    }, 5 * 1000);

    it('get camera List', () => {
        expect(_res).toBeDefined();
    });
});