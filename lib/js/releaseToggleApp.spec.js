/* global it describe beforeEach, afterEach */

import { shallow } from 'enzyme';
import React from 'react';
import ReleaseToggleApp from './ReleaseToggleApp.jsx';
import { expect } from 'chai';
import Context from './core/context';
import sinon from 'sinon';

describe('<ReleaseToggleApp /> - No Context Tests', () => {
    let spy = null;
    let app = <ReleaseToggleApp></ReleaseToggleApp>;
    beforeEach(()=>{
        spy = sinon.spy(ReleaseToggleApp.prototype.getChildContext, 'getChildContext');
    });
    afterEach(()=>{
        app.getChildContext.restore();
    });
    
    it('sets empty context when there is no feature', () => {
        shallow(app);
        expect(spy.returned()).to.deep.equal({});
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