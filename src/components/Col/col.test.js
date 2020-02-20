import React from 'react';
import Col from './Col.js';
import { shallow } from 'enzyme'

describe("tests for FormItem", function () {

    it("renders without crashing", function () {
        shallow(<Col />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Col className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with sm size class", function () {
        const wrap = shallow(<Col sm="2" />);
        expect(wrap.hasClass('rbui-col-sm-2')).toBe(true);
    });

    it("renders with md size class", function () {
        const wrap = shallow(<Col md="2" />);
        expect(wrap.hasClass('rbui-col-md-2')).toBe(true);
    });

    it("renders with lg size class", function () {
        const wrap = shallow(<Col lg="2" />);
        expect(wrap.hasClass('rbui-col-lg-2')).toBe(true);
    });

    it("renders with xl size class", function () {
        const wrap = shallow(<Col xl="2" />);
        expect(wrap.hasClass('rbui-col-xl-2')).toBe(true);
    });

    it("renders with sm offset class", function () {
        const wrap = shallow(<Col offsetSm="2" />);
        expect(wrap.hasClass('rbui-offset-col-sm-2')).toBe(true);
    });

    it("renders with md offset class", function () {
        const wrap = shallow(<Col offsetMd="2" />);
        expect(wrap.hasClass('rbui-offset-col-md-2')).toBe(true);
    });

    it("renders with xl offset class", function () {
        const wrap = shallow(<Col offsetLg="2" />);
        expect(wrap.hasClass('rbui-offset-col-lg-2')).toBe(true);
    });

    it("renders with xl offset class", function () {
        const wrap = shallow(<Col offsetXl="2" />);
        expect(wrap.hasClass('rbui-offset-col-xl-2')).toBe(true);
    });

    it("renders with sm offset class and extra className", function () {
        const wrap = shallow(<Col sm="2" className="test" />);
        expect(wrap.hasClass('rbui-col-sm-2 test')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<Col>test</Col>);
        expect(wrap.text()).toBe("test");
    });

});