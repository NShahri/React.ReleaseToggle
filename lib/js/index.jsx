import {ReleaseToggle, ReleaseToggleApp} from './index';
import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './test.jsx';

export class MyApp {
    static init(el) {
        ReactDOM.render(
            <div>
            <ReleaseToggleApp features={['newFeature1', 'newFeature2']} newFeature5={0}>
                <ReleaseToggle newFeature3={0} newFeature1={'nn'}>
                    <div>new feature implemented</div>
                </ReleaseToggle>
                <TestComponent nn="12"/>
                <ReleaseToggleApp features={['newFeature3', 'newFeature5']} newFeature4={true} >
                    <ReleaseToggle newFeature3={1} features={{newFeature4: '11'}} newFeature1={1} newFeature5={1}>
                        <div>new feature implemented 33</div>
                    </ReleaseToggle>
                    <TestComponent />
                </ReleaseToggleApp>
            </ReleaseToggleApp></div>,
            el);
    }
}