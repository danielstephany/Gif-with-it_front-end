import React from 'react';
import Textbox from './Textbox.js';
import { shallow } from 'enzyme'

describe("tests for Textbox", function () {
    const changeHandler = function () { };

    it("renders without crashing", function () {
        shallow(<Textbox onChange={changeHandler} />);
    });

    it("renders with added class", function () {
        const wrap = shallow(<Textbox className="test" />);
        expect(wrap.dive().hasClass('test')).toBe(true);
    });

    it("renders with the proper input attributes", function () {
        const wrap = shallow(<Textbox 
            className="test"
            id={"testID"}
            name={"testName"}
            type={"text"}
            value={"testValue"}
            onChange={changeHandler} />);
        expect(wrap.childAt(1).html()).toBe("<input type=\"text\" class=\"rbui-base-input\" id=\"testID\" name=\"testName\" value=\"testValue\"/>");
    });

    it('render with the rbui-form-item--full-width class', function(){
        const wrap = shallow(<Textbox fullWidth={true}/>);
        expect(wrap.dive().hasClass('rbui-form-item--full-width')).toBe(true);
    });

    it('renders with the has-error class', function(){
        const wrap = shallow(<Textbox errMessage="this is a error"/>);
        expect(wrap.hasClass('has-error')).toBe(true);
    });
});