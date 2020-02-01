import React from 'react';
import "./iconButton.scss";

const IconButton = React.forwardRef(function iconButton(props, ref) {
    const {className, children, ...others} = props,
        baseClass = "icon-button",
        classes = className ? baseClass + " " + className : baseClass;

    return <button className={classes} ref={ref} {...others}>{children}</button>;
});

export default IconButton;