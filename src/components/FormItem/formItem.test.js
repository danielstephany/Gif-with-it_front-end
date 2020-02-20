import React from 'react';
import FormItem from './FormItem.js';
import { shallow } from 'enzyme'

describe("tests for FormItem", function () {

    it("renders without crashing", function () {
        shallow(<FormItem />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<FormItem className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with default class and added classes ", function () {
        const wrap = shallow(<FormItem className="test" />);
        expect(wrap.hasClass('rbui-form-item test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<FormItem>test</FormItem>);
        expect(wrap.text()).toBe("test");
    });

});