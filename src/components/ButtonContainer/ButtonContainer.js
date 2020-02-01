import React from 'react';
import './buttonContainer.scss';
import Proptypes from 'prop-types';

const ButtonContainer = React.forwardRef(function buttonContainer(props, ref) {
    const { className, children, align, ...others } = props,
        baseClass = 'button-container';
    
    let classes = className ? baseClass + ' ' + className : baseClass;

    if (align && align.toLowerCase() === 'center'){
        classes += ' ' + baseClass + '__center';
    } else if (align && align.toLowerCase() === 'right') {
        classes += ' ' + baseClass + '__right';
    }

    return <div className={classes} ref={ref} {...others}>{children}</div>;
});

ButtonContainer.propTypes = {
    align: Proptypes.oneOf(['center', 'right'])
}

export default ButtonContainer;