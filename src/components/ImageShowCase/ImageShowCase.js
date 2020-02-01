import React from 'react';
import './imageShowCase.scss';

const ImageShowCase = (props) => {
    const { src, alt} = props;

    return (
        <div className="image-show-case">
            <img className="image-show-case__img" src={src} alt={alt} />
        </div>
    );
}

export default ImageShowCase;