/* global it describe beforeEach, afterEach */

import { shallow } from 'enzyme';
import React from 'react';
import ReleaseToggleApp from './ReleaseToggleApp.jsx';
import { expect } from 'chai';
import Context from './core/context';
import sinon from 'sinon';

describe('<ReleaseToggleApp /> - No Context Tests', () => {
    let context = Context.empty();
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context, 'checkFeatures');
    });
    afterEach(()=>{
        context.checkFeatures.restore();
    });
    
    it('sets empty context when there is feature', () => {
        const wrapper = shallow(<ReleaseToggleApp><div className="my-feature">MyFeature</div></ReleaseToggleApp>);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({})).to.be.true;
    });
    it('renders nothing when checks exsiting of a feature', () => {
        const wrapper = shallow(<ReleaseToggleApp myFeature={true}><div className="my-feature">MyFeature</div></ReleaseToggleApp>);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWith({myFeature: true})).to.be.true;
    });
    it('renders children when checks not existing of a feature', () => {
        const wrapper = shallow(<ReleaseToggleApp myFeature={false}><div className="my-feature">MyFeature</div></ReleaseToggleApp>);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({myFeature: false})).to.be.true;
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