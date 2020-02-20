import React, {Component} from 'react';
// import Search from './container/search/Search.js';
import Header from './components/Header/Header.js';
import { connect } from "react-redux";
import Home from './views/Home';
import Random from './views/Random';
import Trending from './views/Trending';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
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
              <Route exact path="/random" render={(props) => <Random {...props}/>} />
              <Route exact path="/trending" render={(props) => <Trending {...props}/>} />
              <Route exact path="/sign-in" render={(props) => <SignIn {...props}/>} />
              <Route exact path="/sign-up" render={(props) => <SignUp {...props} />} />
              <Route path="/" render={(props) => <Home {...props}/>} />
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
