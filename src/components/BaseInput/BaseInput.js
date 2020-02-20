import React from 'react';
import './baseInput.scss';
import PropTypes from 'prop-types';

const BaseInput = React.forwardRef(function baseInput(props, ref) {
    const {className, ...others} = props;
    const classes = className ? "rbui-base-input " + className : "rbui-base-input";

    return (<input className={classes} ref={ref} {...others}/>);
});

BaseInput.propTypes = {
    type: PropTypes.oneOf(["date", "datetime-local", "email", "hidden", "month", "number", "password", "range", "search", "submit", "tel", "text", "time", "url", "week", ""])
}

export default BaseInput;