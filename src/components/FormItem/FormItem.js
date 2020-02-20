import React from 'react';
import PropTypes from "prop-types";
import './formItem.scss';
import applyClassName from '../_utils/applyClassName/applyClassName.js';

const FormItem = React.forwardRef(function(props, ref) {
    const { className, children, fullWidth, alignItems, ...others} = props;
    let classes = className ? `rbui-form-item ${className}` : 'rbui-form-item';
    let alignmentOtps = ['left', 'right', 'center'];

    classes = applyClassName(classes, 'rbui-form-item--align-', alignItems, alignmentOtps);

    if (fullWidth){
        classes += ' rbui-form-item--full-width';
    }

    return <div className={classes} ref={ref} {...others} >{children}</div>;
});

FormItem.propTypes = {
    className: PropTypes.string
}

export default FormItem;