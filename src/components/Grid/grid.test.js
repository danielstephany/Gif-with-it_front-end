import React from 'react';
import Grid from './Grid.js';
import {mount} from 'enzyme';

describe('Grid component tests', () => {
    it('returns the container componet', () => {
        const wrapper = mount(<Grid></Grid>);
        expect(wrapper.find('div').hasClass('rbui-container')).toBe(true);
    });
});