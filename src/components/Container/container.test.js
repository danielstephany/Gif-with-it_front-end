import React from 'react';
import Container from './Container.js';
import { shallow } from 'enzyme'

describe("tests for Container", function () {

    it("renders without crashing", function () {
        shallow(<Container />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Container className="test" />);
        expect(wrap.hasClass('test')).toBe(true);
    });

    it("renders with default class and added classes ", function () {
        const wrap = shallow(<Container className="test" />);
        expect(wrap.hasClass('rbui-container test')).toBe(true);
    });


    it("renders with the the no gutter class", function () {
        const wrap = shallow(<Container noGutters >test</Container>);
        expect(wrap.hasClass('rbui-container rbui-container--no-gutters')).toBe(true);
    });

    it("renders with the child data", function () {
        const wrap = shallow(<Container>test</Container>);
        expect(wrap.text().trim()).toBe("test");
    });

});