/* global describe, it*/

import {assert} from 'chai';
import flatten from './flatten';

describe('featureNames', function(){
    it('no input', function(){
        assert.deepEqual(flatten(), {});
    });
    it('empty string input', function(){
        assert.deepEqual(flatten(''), {});
    });
    it('empty array input', function(){
        assert.deepEqual(flatten([]), {});
    });
    it('empty object input', function(){
        assert.deepEqual(flatten({}), {});
    });
    it('all possible values for obejct', function(){
        assert.deepEqual(flatten({a: true, 'b': 1, 'c': undefined, 'd': null, 'e': 'O', 'f': 0, g: false, h:{}, i: []}), 
        {'a': true,'b':1, c:undefined, d:null, 'e': 'O', f:0, g:false, 'h':{}, 'i':[]});
    });
    it('one feature input', function(){
        assert.deepEqual(flatten('a'), {'a':true});
    });
    it('more than one feature inputs', function(){
        assert.deepEqual(flatten('a', 'b'), {'a':true,'b':true});
    });
    it('duplicate features inputs', function(){
        assert.deepEqual(flatten('a', 'a'), {'a':true});
    });
    it('one array input', function(){
        assert.deepEqual(flatten(['a', 'b']), {'a':true,'b':true});
    });    
    it('more than one array inputs', function(){
        assert.deepEqual(flatten(['a', 'b'], ['c', 'd']), {'a':true,'b':true,'c':true,'d':true});
    });    
    it('duplicate arrays inputs', function(){
        assert.deepEqual(flatten(['a', 'b'], ['a']), {'a':true,'b':true});
    });    
    it('nesting arrays inputs', function(){
        assert.deepEqual(flatten(['a', ['b','c']]), {'a':true,'b':true,'c':true});
    });    
    it('duplicate nesting arrays inputs', function(){
        assert.deepEqual(flatten(['a', 'b', ['b','c']]), {'a':true,'b':true,'c':true});
    });    
    it('one oject input', function(){
        assert.deepEqual(flatten({'a':true, 'b':true}), {'a':true,'b':true});
    });    
    it('more than one object inputs', function(){
        assert.deepEqual(flatten({'a':true, 'b':true}, {'c':true, 'd':true}), {'a':true,'b':true,'c':true,'d':true});
    }); 
    it('duplicate objects inputs', function(){
        assert.deepEqual(flatten({'a':true, 'b':true}, {'a':true, 'b':true}), {'a':true,'b':true});
    }); 
    it('overriding objects inputs', function(){
        assert.deepEqual(flatten({'a':true, 'b':true}, {'a':true, 'b':false}), {'a':true,'b':false});
    }); 
    it('nesting object in object inputs should not change', function(){
        assert.deepEqual(flatten({'a':true, 'b': {'c': false}}), {'a':true,'b':{'c': false}});
    }); 
    it('nesting array in objects should not change anything', function(){
        assert.deepEqual(flatten({'a':true, 'b': ['c']}), {'a':true,'b':['c']});
    }); 
    it('object/array inputs', function(){
        assert.deepEqual(flatten(['a', 'b'], { 'c': true,'d':true}), {'a':true,'b':true,'c':true,'d':true});
    });    
    it('overriding object/array inputs', function(){
        assert.deepEqual(flatten(['a', 'b'], { 'b': false,'d':true}), {'a':true,'b':false, 'd':true});
    });    
    it('overriding object/array inputs', function(){
        assert.deepEqual(flatten(['a', 'b'], { 'b': false,'d':true}), {'a':true,'b':false, 'd':true});
    });
});