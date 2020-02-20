import React from 'react';
import Row from './Row.js';
import { shallow } from 'enzyme'

describe("tests for Row", function () {

    it("renders without crashing", function () {
        shallow(<Row />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Row className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with default class and added classes ", function () {
        const wrap = shallow(<Row className="test" />);
        expect(wrap.hasClass('rbui-row test')).toBe(true);
    });

    it("renders with proper alignItems classes ", function () {
        const wrap = shallow(<Row alignItems="stretch" />);
        expect(wrap.hasClass('rbui-row--align-items-stretch')).toBe(true);
    });

    it("renders with proper justifyContent classes ", function () {
        const wrap = shallow(<Row justifyContent="center" />);
        expect(wrap.hasClass('rbui-row--justify-content-center')).toBe(true);
    });

    it("renders with proper alignContent classes ", function () {
        const wrap = shallow(<Row alignContent="center" />);
        expect(wrap.hasClass('rbui-row--align-content-center')).toBe(true);
    });

    it("renders with proper justifyContent classes ", function () {
        const wrap = shallow(<Row spacing="8" />);
        expect(wrap.hasClass('rbui-row--spacing-8')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<Row>test</Row>);
        expect(wrap.text()).toBe("test");
    });

});