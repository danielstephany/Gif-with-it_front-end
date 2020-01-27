import React, { Component } from 'react';
import styles from './styles.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            query: ''
        }
    }

    submitQuery = (e) => {
        e.preventDefault();

        if (this.state.query) {
            fetch(`https://api.giphy.com/v1/stickers/search?api_key=FP9R3N8tfayY6arNiUFojviyZB0iUnXI&q=${this.state.query}&limit=25&offset=0&rating=G&lang=en`)
                .then(res => res.json())
                .then((json) => {
                    this.setState({ results: json });
                    console.log(json);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    setvalue = (name) => (e) => this.setState({ [name]: e.target.value })

    render = () => {
        let tiles = null;
        if (this.state.results) {
            tiles = this.state.results.data.map(item => {
                return (
                    <div>
                        <img src={item.images.original.url} alt="" />
                    </div>
                );
            });
        }

        return (
            <div className={styles.search} >

                <form onSubmit={this.submitQuery}>
                    <form-item>
                        <label htmlFor="">search</label>
                        <input type="text" value={this.state.query} onChange={this.setvalue("query")} />
                    </form-item>
                </form>

                <div>
                    <h2>{this.state.query}</h2>
                    {tiles}
                </div>

            </div>


        )
    }

}

export default Search;