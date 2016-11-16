/* global it describe beforeEach */

import { render, shallow } from 'enzyme';
import React from 'react';
import ReleaseToggle from './releaseToggle.jsx';
import { expect } from 'chai';
import Context from './core/context';
import sinon from 'sinon';

describe('<ReleaseToggle /> - No Context', () => {
    let context = Context.empty();
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context.checkFeatures);
    });
    
    it('renders children when there is no feature to check', () => {
        const wrapper = shallow(<ReleaseToggle className="my-feature">MyFeature</ReleaseToggle>);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({})).to.be.true;
    });
    it('renders nothing when checks exsiting of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={true} className="my-feature">MyFeature</ReleaseToggle>);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWith({myFeature: true})).to.be.true;
    });
    it('renders children when checks not existing of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={false} className="my-feature">MyFeature</ReleaseToggle>);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({myFeature: false})).to.be.true;
    });
});

describe('<ReleaseToggle /> - Context is null', () => {
    let context = Context.empty();
    let options = { context: { releaseToggleContext: null}};
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context.checkFeatures);
    });
    
    it('renders children when there is no feature to check', () => {
        const wrapper = shallow(<ReleaseToggle className="my-feature">MyFeature</ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({})).to.be.true;
    });
    it('renders nothing when checks exsiting of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={true} className="my-feature">MyFeature</ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWith({myFeature: true})).to.be.true;
    });
    it('renders children when checks not existing of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={false} className="my-feature">MyFeature</ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({myFeature:false})).to.be.true;
    });
});

describe('<ReleaseToggle /> - Context is empty object/wrong type', () => {
    let context = Context.empty();
    let options = { context: { releaseToggleContext: {}}};
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context.checkFeatures);
    });
    it('renders children when there is no feature to check', () => {
        const wrapper = shallow(<ReleaseToggle className="my-feature">MyFeature</ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({})).to.be.true;
    });
    it('renders nothing when checks exsiting of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={true} className="my-feature">MyFeature</ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(0);
        expect(spy.calledWith({myFeature:true})).to.be.true;
    });
    it('renders children when checks not existing of a feature', () => {
        const wrapper = shallow(<ReleaseToggle myFeature={false} className="my-feature">MyFeature</ReleaseToggle>, options);
        expect(wrapper.find('.my-feature')).to.be.length(1);
        expect(spy.calledWith({myFeature:false})).to.be.true;
    });
});

describe('<ReleaseToggle /> - Context', () => {
    let context = new Context({myFeature:true, myFeature2: false});
    let options = { context: { releaseToggleContext: context}};
    let spy = null;
    beforeEach(()=>{
        spy = sinon.spy(context.checkFeatures);
    });
    // it('renders children when there is enabled feature', () => {
    //     const wrapper = shallow(<ReleaseToggle className="my-feature" myFeature={true}>MyFeature</ReleaseToggle>, options);
    //     expect(wrapper.find('.my-feature')).to.be.length(1);
    //     expect(spy.calledWithMatch({myFeature:true})).to.be.true;
    // });
    // it('renders no child when there is no enabled feature', () => {
    //     const wrapper = shallow(<ReleaseToggle className="my-feature" myFeature2={true}>MyFeature</ReleaseToggle>, options);
    //     expect(wrapper.find('.my-feature')).to.be.length(0);
    //     expect(spy.calledWithMatch({myFeature2:true})).to.be.true;
    // });
    // it('renders no child when there is no disable feature', () => {
    //     const wrapper = shallow(<ReleaseToggle className="my-feature" myFeature={false}>MyFeature</ReleaseToggle>, options);
    //     expect(wrapper.find('.my-feature')).to.be.length(0);
    //     expect(spy.calledWithMatch({myFeature:false})).to.be.true;
    // });
    it('renders children when there is disabled feature', () => {
        const wrapper = shallow(<ReleaseToggle className="my-feature" myFeature2={false}>MyFeature</ReleaseToggle>, options);
        //expect(wrapper.find('.my-feature')).to.be.length(1);
        //console.log(spy.calledWithMatch({ myFeature2:false }));
        console.log('asdasdas', spy.called);
        expect(spy.calledWithMatch({ myFeature2:false })).to.be.true;
    });
});