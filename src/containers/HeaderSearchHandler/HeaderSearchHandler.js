import React, {Component} from 'react';
import HeaderSearch from '@components/HeaderSearch';
import PropTypes from 'prop-types';

class HeaderSearchHandler extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    updateSearchVal = (e) => (e) => {
        this.setState({search: e.target.value});
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state.search);
        
    }

    render = () => {
        return (<HeaderSearch 
                close={this.props.close} 
                ref={(input) => {this.searchInput = input}}
                value={this.state.search}
                onChange={this.updateSearchVal()}
                submit={this.submit}
                />)
    }
} 

HeaderSearchHandler.propTypes = {
    history: PropTypes.object.isRequired
}


export default HeaderSearchHandler;