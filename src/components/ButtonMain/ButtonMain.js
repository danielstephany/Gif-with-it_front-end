import React from 'react';
import './buttonMain.scss';
import { Link } from "react-router-dom";

const ButtonMain = React.forwardRef(function buttonMain(props, ref) {
    const { className, children, routeLink, ...others } = props,
        baseClass = "button-main",
        classes = className ? baseClass + " " + className : baseClass;

    let button;

    if (routeLink) {
        button = <Link className={classes} ref={ref} {...others}>{children}</Link>;
    } else {
        button = <button className={classes} ref={ref} {...others}>{children}</button>;
    }

    return button;
});

export default ButtonMain;