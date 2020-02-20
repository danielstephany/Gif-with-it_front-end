import React from 'react';
import './textBox.scss';
import FormItem from  '@components/FormItem';
import BaseLabel from '@components/BaseLabel';
import BaseInput from '@components/BaseInput';
import setClasses from '@components/_utils/setClasses/setClasses.js';

const TextBox = React.forwardRef(function textBox(props, ref) {
    const { className, errMessage, fullWidth, label, ...others} = props;
    const id = others.id;
    let classes = setClasses('rbui-textbox', className);

    if(errMessage){
        classes += ' has-error';
    }
  
    return (
        <FormItem fullWidth={!!fullWidth} className={classes}>
            <BaseLabel {...id ? {htmlFor: id} : null}>{label}</BaseLabel>
            <BaseInput ref={ref} {...others} />
            {errMessage ? <span className="inline-error">{errMessage}</span> : null}
        </FormItem>
    );
});

export default TextBox;