import React from 'react';
import './container.scss';
import PropTypes from 'prop-types';
import applyClassName from '../_utils/applyClassName/applyClassName.js';


const Container = React.forwardRef(function container(props, ref) {
    const { className, noGutters, stretch, children, vMargin, ...others} = props;
    const vMarginOpts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let classes = className ? `rbui-container ${className}` : 'rbui-container';
   
    classes = applyClassName(classes, 'rbui-container--margin-', vMargin, vMarginOpts);
    
    if (noGutters) {
        classes += " rbui-container--no-gutters";
    }

    if (stretch) {
        classes += " rbui-container--stretch";
    }

    return <div className={classes} ref={ref} {...others}> {children} </div>
});

Container.propTypes = {
  /** Sets when set to false the rows negative left and right margin is removed */
  noGutters: PropTypes.bool,
  /** When set to true the container spans the full width of its parent element */
  stretch: PropTypes.bool,
  /** sets the margin-top and margin-bottom in pixels to 4 times the specified value  */
  vMargin: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
};

Container.defaultProps = {
  noGutters: false,
  stretch: false
};

export default Container;