
import { shopService } from '@/main'

describe('Timeline', () => {

    let _timeline = null;
    const timelinePromise = shopService.getTimeline();
    beforeEach(function(done) {
        timelinePromise.then((timeline) => {
            _timeline = timeline;
            console.log(JSON.stringify(_timeline));
            done();
        })
    }, 10 * 1000);

  it('Get Demo Cameras', () => {

        expect(_timeline).toBeDefined();
        //expect(_timeline.events).toBeDefined();
  })

})

describe('Timeline Fail', () => {

    let _timeline = null;
    const timelinePromise = shopService.getTimeline();
    beforeEach(function(done) {
        timelinePromise.then((timeline) => {
            _timeline = timeline;
            console.log(JSON.stringify(_timeline));
            done();
        })
    }, 10 * 1000);

    it('Get Demo Cameras', () => {

        expect(_timeline.code).toEqual('nok');
        //expect(_timeline.events).toBeDefined();
    })

})
