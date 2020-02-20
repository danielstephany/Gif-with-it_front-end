import React from 'react';
import './form.scss';

export default React.forwardRef(function form(props, ref) {
    const {className, ...others} = props;
    const classes = className ? 'rbui-form ' + className : 'rbui-form';
    
    return <form className={classes} ref={ref} {...others} >{props.children}</form>
});