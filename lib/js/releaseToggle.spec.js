/* global it describe */

import { render } from 'enzyme';
import React from 'react';
import ReleaseToggle from './releaseToggle.jsx';
import { expect } from 'chai';

describe('<SearchBar />', () => {
    it('renders three .dropdown', () => {
        const wrapper = render(<ReleaseToggle><div className="dropdown">TestText</div></ReleaseToggle>);
        expect(wrapper.find('.dropdown')).to.be.length(1);
    });
});