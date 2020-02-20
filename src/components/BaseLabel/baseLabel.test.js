import React from 'react';
import {shallow} from 'enzyme';
import BaseLabel from './BaseLabel.js';

describe('BaseLabel test suite', function(){
    it('renders without crashing', function(){
        const wrap = shallow(<BaseLabel/>);
    });

    it('renders with children', function(){
        const wrap = shallow(<BaseLabel>my label</BaseLabel>);
        expect(wrap.text()).toBe("my label");
    });

    it('renders with proper classes when passed "inline"', function() {
        const wrap = shallow(<BaseLabel inline></BaseLabel>);
        expect(wrap.hasClass('rbui-label--inline')).toBe(true);
    })
});