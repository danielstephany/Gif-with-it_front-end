import React from 'react';
import Button from './button.js';
import { shallow } from 'enzyme'

describe("tests for button", function () {

    it("renders without crashing", function () {
        shallow(<Button />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Button className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with added classes and default class", function () {
        const wrap = shallow(<Button className="test" />);
        expect(wrap.hasClass('main-btn test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<Button>test</Button>);
        expect(wrap.text()).toBe("test");
    });

});