import React from 'react';
import BaseInput from './BaseInput.js';
import {shallow} from 'enzyme';

describe('BaseInput test suit', function(){
    it('Renders without crashing', function(){
        const wrap = shallow(<BaseInput type="text"/>);
    });
});