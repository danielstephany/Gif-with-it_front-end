import React, { Component } from 'react';
import './imageShowCase.scss';

class ImageShowCase extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgLoading: props.loading || false
        }

        this.checkImgInterval = null;
    }

    componentDidMount = () => {
        this.checkIfLoaded();
    }

    componentDidUpdate = () => {
        if (this.props.loading && !this.state.imgLoading){
            this.setState({ imgLoading: true });
            this.checkIfLoaded();
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.checkImgInterval);
    }

    checkIfLoaded = () => {
        this.checkImgInterval = setInterval(() => {
            if (this.imgRef && this.imgRef.complete) {
                this.setState({ imgLoading: false });
                clearInterval(this.checkImgInterval);
            }
        }, 50);
    }

    setPlaceholder = () => {
        
    }

    render = () => {
        const { src, alt} = this.props,
            baseClass = "image-show-case";


        let classes = this.state.imgLoading ? baseClass + ` ${baseClass}--loading` : baseClass;

        return (
            <div className={classes}>
                <div className="image-show-case__placeholder" ref={(div) => { this.placeholder = div; }}>
                    <img className="image-show-case__img" src={src} alt={alt} ref={(img)=>{this.imgRef = img;}} />
                </div>
            </div>
        );
    }
}

export default ImageShowCase;