/* global it describe beforeEach, afterEach */

import { shallow } from 'enzyme';
import React from 'react';
import ReleaseToggle from './releaseToggle.jsx';
import { expect } from 'chai';
import Context from './core/context';
import sinon from 'sinon';

describe('<ReleaseToggle /> - No Context Tests', () => {
    let context = Context.empty();
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context, 'checkFeatures');
    });
    afterEach(()=>{
        context.checkFeatures.restore();
    });
    
    it('renders children when there is no feature to check', () => {
        const wrapper = shallow(<ReleaseToggle><div className="my-feature">MyFeature</div></ReleaseToggle>);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({})).to.be.true;
    });
    it('renders nothing when checks exsiting of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={true}><div className="my-feature">MyFeature</div></ReleaseToggle>);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWith({myFeature: true})).to.be.true;
    });
    it('renders children when checks not existing of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={false}><div className="my-feature">MyFeature</div></ReleaseToggle>);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({myFeature: false})).to.be.true;
    });
});

describe('<ReleaseToggle /> - NULL Context Tests ', () => {
    let context = Context.empty();
    let options = { context: { releaseToggleContext: null}};
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context, 'checkFeatures');
    });
    afterEach(()=>{
        context.checkFeatures.restore();
    });
    
    it('renders children when there is no feature to check', () => {
        const wrapper = shallow(<ReleaseToggle><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({})).to.be.true;
    });
    it('renders nothing when checks exsiting of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={true}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWith({myFeature: true})).to.be.true;
    });
    it('renders children when checks not existing of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={false}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({myFeature:false})).to.be.true;
    });
});

describe('<ReleaseToggle /> - Empty/Wrong Context Tests', () => {
    let context = Context.empty();
    let options = { context: { releaseToggleContext: {}}};
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context, 'checkFeatures');
    });
    afterEach(()=>{
        context.checkFeatures.restore();
    });

    it('renders children when there is no feature to check', () => {
        const wrapper = shallow(<ReleaseToggle><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({})).to.be.true;
    });
    it('renders nothing when checks exsiting of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={true}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWith({myFeature:true})).to.be.true;
    });
    it('renders children when checks not existing of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={false}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({myFeature:false})).to.be.true;
    });
});

describe('<ReleaseToggle /> - Context Tests', () => {
    let context = new Context({myFeature:true, myFeature2: false});
    let options = { context: { releaseToggleContext: context}};
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context, 'checkFeatures');
    });
    afterEach(()=>{
        context.checkFeatures.restore();
    });

    it('renders children when there is enabled feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={true}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWithMatch({myFeature:true})).to.be.true;
    });
    it('renders no child when there is no enabled feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature2={true}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWithMatch({myFeature2:true})).to.be.true;
    });
    it('renders no child when there is no disable feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={false}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWithMatch({myFeature:false})).to.be.true;
    });
    it('renders children when there is disabled feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature2={false}><div className="my-feature">MyFeature</div></ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWithMatch({ myFeature2:false })).to.be.true;
    });
});

describe('<ReleaseToggle /> UI Tests', () => {
    it('renders nothing when there is no child', () => {
        const wrapper = shallow(<ReleaseToggle></ReleaseToggle>);
        expect(wrapper.find('div')).to.be.length(0);
    });
    it('renders DIV tag as container', () => {
        const wrapper = shallow(<ReleaseToggle>MyFeature</ReleaseToggle>);
        expect(wrapper.find('div')).to.be.length(1);
    });
    it('renders container with class', () => {
        const wrapper = shallow(<ReleaseToggle className="myFeature">MyFeature</ReleaseToggle>);
        expect(wrapper.find('div').first().hasClass('myFeature')).to.be.true;
    });
    it('renders container with style', () => {
        const wrapper = shallow(<ReleaseToggle style={{mybackground:'black'}}>MyFeature</ReleaseToggle>);
        expect(wrapper.find('div').first().props().style).to.deep.equal({mybackground:'black'});
    });
});