import React, {Component} from 'react';
import Search from './container/search/Search.js';
import Header from './components/Header/Header.js';
import { connect } from "react-redux";



class App extends Component {
  


  render = () => {
    const {userName, signedIn} = this.props;
    return (
      <div className="App">
        <Header userName={userName} signedIn={signedIn} />
        <main>
          <Search />
        </main>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => (
  {
    signedIn: state.userReducer.signedIn,
    userName: state.userReducer.userName
  }
);

export default connect(mapStateToProps)(App);
