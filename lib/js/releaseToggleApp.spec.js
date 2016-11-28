/* global it describe beforeEach, afterEach */

import { shallow } from 'enzyme';
import React from 'react';
import ReleaseToggleApp from './ReleaseToggleApp.jsx';
import { expect } from 'chai';
import sinon from 'sinon';

describe('<ReleaseToggleApp /> - Props as features', () => {
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(ReleaseToggleApp.prototype, 'getChildContext');
    });
    afterEach(()=>{
        ReleaseToggleApp.prototype.getChildContext.restore();
    });
    
    it('sets empty context when there is no feature', () => {
        shallow(<ReleaseToggleApp></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{}}});
    });

    it('sets empty context when there is class,style and children', () => {
        shallow(<ReleaseToggleApp className="test" style=""><div/></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{}}});
    });

    it('sets right context when overriding features', () => {
        shallow(<ReleaseToggleApp feature1="test" feature1="test2"></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: 'test2'}}});
    });    

    it('sets context when feature is an object', () => {
        shallow(<ReleaseToggleApp feature1={{ver: 1.0}}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: {ver: 1.0}}}});
    });

    it('sets context when feature is an array', () => {
        shallow(<ReleaseToggleApp feature1={['ver']}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: ['ver']}}});
    });  
});

describe('<ReleaseToggleApp /> - "features" Prop', () => {
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(ReleaseToggleApp.prototype, 'getChildContext');
    });
    afterEach(()=>{
        ReleaseToggleApp.prototype.getChildContext.restore();
    });
    
    it('sets flatten context when "features" is an array', () => {
        shallow(<ReleaseToggleApp features={['feature1']}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: true}}});
    });  

    it('sets flatten context when "features" is an object', () => {
        shallow(<ReleaseToggleApp features={{feature1: 1.0}}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: 1.0}}});
    });  

    it('sets context when "features" is an object of arrays', () => {
        shallow(<ReleaseToggleApp features={{feature1: ['feature2', 'feature3']}}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: ['feature2', 'feature3']}}});
    });  

    it('sets flatten context when "features" is an array of objects', () => {
        shallow(<ReleaseToggleApp features={[{feature1: true, feature2: 1.0}]}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: true, feature2: 1.0}}});
    });  

    it('sets flatten context when "features" is an array of objects', () => {
        shallow(<ReleaseToggleApp features={[{feature1: true, feature2: 1.0}]}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: true, feature2: 1.0}}});
    }); 

    it('overrides properties when "features" is an array of objects', () => {
        shallow(<ReleaseToggleApp features={[{feature1: true}, {feature1: 1.0}]}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: 1.0}}});
    }); 

    it('merges properties when "features" is an array of objects', () => {
        shallow(<ReleaseToggleApp features={[{feature1: true}, {feature2: 1.0}]}></ReleaseToggleApp>);
        expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: true, feature2: 1.0}}});
    }); 
});

describe('<ReleaseToggleApp /> - Nested Contexts', () => {
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(ReleaseToggleApp.prototype, 'getChildContext');
    });
    afterEach(()=>{
        ReleaseToggleApp.prototype.getChildContext.restore();
    });
    
    it('sets empty context when there is no feature', () => {
        shallow(<ReleaseToggleApp><ReleaseToggleApp></ReleaseToggleApp></ReleaseToggleApp>);
        //expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{}}});
        //expect(spy.returnValues[1]).to.deep.equal({releaseToggleContext:{features:{}}});
    }); 

    it('overrides properties', () => {
        shallow(<ReleaseToggleApp feature1={true}><ReleaseToggleApp feature1={false}></ReleaseToggleApp></ReleaseToggleApp>);
        //expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: true}}});
        //expect(spy.returnValues[1]).to.deep.equal({releaseToggleContext:{features:{feature1: false}}});
    }); 

    it('merges properties', () => {
        shallow(<ReleaseToggleApp feature1={true}><ReleaseToggleApp feature2={true}></ReleaseToggleApp></ReleaseToggleApp>);
        //expect(spy.returnValues[0]).to.deep.equal({releaseToggleContext:{features:{feature1: true}}});
        //expect(spy.returnValues[1]).to.deep.equal({releaseToggleContext:{features:{feature1:true, feature2: true}}});
    });  
});

describe('<ReleaseToggleApp /> UI Tests', () => {
    it('renders nothing when there is no child', () => {
        const wrapper = shallow(<ReleaseToggleApp></ReleaseToggleApp>);
        expect(wrapper.find('div')).to.be.length(0);
    });
    it('renders DIV tag as container', () => {
        const wrapper = shallow(<ReleaseToggleApp>MyFeature</ReleaseToggleApp>);
        expect(wrapper.find('div')).to.be.length(1);
    });
    it('renders container with class', () => {
        const wrapper = shallow(<ReleaseToggleApp className="myFeature">MyFeature</ReleaseToggleApp>);
        expect(wrapper.find('div').first().hasClass('myFeature')).to.be.true;
    });
    it('renders container with style', () => {
        const wrapper = shallow(<ReleaseToggleApp style={{mybackground:'black'}}>MyFeature</ReleaseToggleApp>);
        expect(wrapper.find('div').first().props().style).to.deep.equal({mybackground:'black'});
    });
});