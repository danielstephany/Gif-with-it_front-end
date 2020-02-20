import React from 'react';
import './col.scss';
import applyClassName from '../_utils/applyClassName/applyClassName.js';
import PropTypes from 'prop-types';

const Col = React.forwardRef(function col(props, ref) {
    const { 
        className,
        children, 
        xs, 
        sm, 
        md, 
        lg, 
        xl, 
        offsetXs, 
        offsetSm, 
        offsetMd, 
        offsetLg, 
        offsetXl, 
        ...others
    } = props;
    const sizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    let classes = "";

    classes = applyClassName(classes, 'rbui-col-', xs, sizes);
    classes = applyClassName(classes, 'rbui-col-sm-', sm, sizes);
    classes = applyClassName(classes, 'rbui-col-md-', md, sizes);
    classes = applyClassName(classes, 'rbui-col-lg-', lg, sizes);
    classes = applyClassName(classes, 'rbui-col-xl-', xl, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-', offsetXs, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-sm-', offsetSm, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-md-', offsetMd, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-lg-', offsetLg, sizes);
    classes = applyClassName(classes, 'rbui-offset-col-xl-', offsetXl, sizes);

    classes = classes || "rbui-col";

    classes = className ? `${classes} ${className}` : classes;

    return <div className={classes} ref={ref} {...others} >{children}</div>
});

Col.propTypes = {
  /** sets the width of the column at screen widths of 0px and higher */
  xs: PropTypes.string,
  /** sets the width of the column at screen widths of 576px and higher */
  sm: PropTypes.string,
  /** sets the width of the column at screen widths of 768px and higher */
  md: PropTypes.string,
  /** sets the width of the column at screen widths of 998px and higher */
  lg: PropTypes.string,
  /** sets the width of the column at screen widths of 1200px and higher */
  xl: PropTypes.string,
  /** sets the distance offset from the left of the column at screen widths of 0px and higher */
  offsetXs: PropTypes.string,
  /** sets the distance offset from the left of the column at screen widths of 576px and higher */
  offsetSm: PropTypes.string,
  /** sets the distance offset from the left of the column at screen widths of 768px and higher */
  offsetMd: PropTypes.string,
  /** sets the distance offset from the left of the column at screen widths of 998px and higher */
  offsetLg: PropTypes.string,
  /** sets the distance offset from the left of the column at screen widths of 1200px and higher */
  offsetXl: PropTypes.string
};

export default Col;