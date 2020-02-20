import React from 'react';
import Form from './Form.js';
import { shallow } from 'enzyme'

describe("tests for Form", function () {

    it("renders without crashing", function () {
        shallow(<Form />);
    });

    it('renders with extraClasses when passed',() => {
        const wrap = shallow(<Form className="test"/>);
        expect(wrap.hasClass("test")).toBe(true);
    }); 

    it('renders with its passed props.children', () => {
        const wrap = shallow(<Form>test</Form>);
        expect(wrap.text()).toBe("test");
    })

});