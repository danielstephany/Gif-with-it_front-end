import React, {Component} from 'react';
import HeaderSearch from '@components/HeaderSearch';
import PropTypes from 'prop-types';

class HeaderSearchHandler extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchVal: '',
            hide: false
        }
    }

    updateSearchVal = (e) => (e) => {
        this.setState({ searchVal: e.target.value});
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state.searchVal);
        this.setState({
            searchVal: '',
            hide: true
        });
        this.props.history.push(`/search/${this.state.searchVal}`);
        this.props.close();
    }

    render = () => {
        return (<HeaderSearch 
                close={this.props.close} 
                ref={(input) => {this.searchInput = input}}
                value={this.state.searchVal}
                onChange={this.updateSearchVal()}
                submit={this.submit}
                hide={this.state.hide}
                />)
    }
} 

HeaderSearchHandler.propTypes = {
    history: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired
}


export default HeaderSearchHandler;