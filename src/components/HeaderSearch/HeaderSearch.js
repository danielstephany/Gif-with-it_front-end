import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import TextBox from '@components/TextBox';
import './headerSearch.scss';
import IconButton from '@components/IconButton';

const HeaderSearch = React.forwardRef(function HeaderSearch(props, ref) {
    const [isUnmouting, setIsUnmounting] = useState(false),
        baseClase = 'header-search',
        { close, submit, hide, ...others} = props;
    let classes = isUnmouting ? baseClase + ' unmouting' : baseClase,
        searchRef;
                
    const unmount = () => {
        setIsUnmounting(true);
        close();
    }

    const setRefs = (input) => {
        searchRef = input;
        ref = input;
    }

    useEffect(() => {
        searchRef.focus();
        if(hide){
            unmount();
        }
    });

    return (
        <div className={classes}>
            <div className="header-search__content">
                <form onSubmit={submit}>
                    <TextBox label="Search:" inline ref={setRefs} {...others} />
                </form>
                <IconButton onClick={unmount} aria-label="close"><i className="fas fa-times"></i></IconButton>
            </div>    
        </div>
    )
})

HeaderSearch.propTypes = {
    close: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
}

export default HeaderSearch;