import React from 'react';
import './buttonMain.scss';
import { Link } from "react-router-dom";

const ButtonMain = React.forwardRef(function buttonMain(props, ref) {
    const { className, children, routeLink, loading, ...others } = props,
        baseClass = "button-main";

    let button,
    classes = className ? baseClass + " " + className : baseClass;
    
    classes = loading ? classes + " " + baseClass + "--loading" : classes;

    if (routeLink) {
        button = <Link className={classes} ref={ref} {...others}>{children}</Link>;
    } else {
        button = <button className={classes} ref={ref} {...others}>{children}</button>;
    }

    return button;
});

export default ButtonMain;