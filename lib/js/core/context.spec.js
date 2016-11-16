/* global describe, it*/

import {assert} from 'chai';
import Context from './context';

describe('conetxt tests', function(){
    it('no feature, no checks', function(){
        assert.isTrue(new Context().checkFeatures());
    });
    it('no feature', function(){
        assert.isFalse(new Context().checkFeatures({'a': true}));
    });
    it('no checks', function(){
        assert.isTrue(new Context({'a': true}).checkFeatures());
    });
    it('check enable feature', function(){
        assert.isTrue(new Context({'a': true}).checkFeatures({'a': 1}));
    });
    it('check not enable feature', function(){
        assert.isFalse(new Context({'a': true}).checkFeatures({'a': 0}));
    });
    it('check disable feature', function(){
        assert.isTrue(new Context({'a': false}).checkFeatures({'a': 0}));
    });
    it('check not disable feature', function(){
        assert.isFalse(new Context({'a': false}).checkFeatures({'a': 1}));
    });
    it('should return the same empty context', function(){
        assert.isTrue(Context.empty() === Context.empty());
    });
});