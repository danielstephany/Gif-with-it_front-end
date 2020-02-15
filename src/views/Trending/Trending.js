import React, {Component} from 'react';
import {getTrending} from '@store/actions/gifs.js';
import ImgGrid from '@components/ImgGrid';


class Trending extends Component {
    constructor(props){
        super(props);
        this.state = {
            gifs: null,
            loading: true
        }
    }

    componentDidMount = () => {
        getTrending().then((data) => {
            console.log(data);
            this.setState({
                gifs: data,
                loading: false
            });
        })
        .catch(e => {
            this.setState({
                gifs: null,
                loading: false
            })
        });
    }

    createGifElements = (gifsArr) => {
        let gifs = null;
        if (typeof gifsArr !== 'undefined' && Array.isArray(gifsArr)) {
            gifs = gifsArr.map(gif => {
                if (gif && gif.images && gif.images.downsized_large){
                    return <img src={gif.images.downsized.url} alt="gif" />
                }
            });
        } 
        
        return gifs;
    }

    render = () => {
        let {loading, gifs} = this.state;
        let gifsElements = this.createGifElements(gifs);
        let noGifsMsg = <p>whoa no gifs, try again later maybe...</p>;
        let loadingElement;
        let displayElement;

        if (loading){
            loadingElement = <p>loading...</p>;
        } else if (!loading && gifsElements) {
            displayElement = <ImgGrid columns={3} imgArray={gifs} />;
        } else {
            displayElement = noGifsMsg;
        }

        return (
            <React.Fragment>
                {loadingElement}
                {displayElement}
            </React.Fragment>
        )
    }
}

export default Trending;