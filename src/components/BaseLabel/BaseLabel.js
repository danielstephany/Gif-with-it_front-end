import React from 'react';
import './baseLabel.scss';

const BaseLabel = React.forwardRef(function baseLabel(props, ref){
    const {className, children, inline, ...others} = props;
    let classes = className ? 'rbui-label ' + className : 'rbui-label';

    if (inline) {
        classes += ' rbui-label--inline';
    }

    return <label className={classes} ref={ref} {...others}>{children}</label>
});

export default BaseLabel;