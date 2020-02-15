import React, {Component} from 'react';
// import Search from './container/search/Search.js';
import Header from './components/Header/Header.js';
import { connect } from "react-redux";
import Home from './views/Home';
import Random from './views/Random';
import Trending from './views/Trending';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";



class App extends Component {
  


  render = () => {
    const {userName, signedIn} = this.props;
    return (
      <Router>
        <div className="flex-app">
          <Header userName={userName} signedIn={signedIn} />
          <main className="flex-app__stretched">
            <Switch>
              <Route exact path="/random" render={(props) => <Random />} />
              <Route exact path="/trending" render={(props) => <Trending />} />
              <Route path="/" render={(props) => <Home />} />
            </Switch>
          </main>
        </div>
      </Router>
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
