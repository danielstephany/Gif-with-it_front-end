import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import IconButton from '@components/IconButton';
import { Link } from "react-router-dom";

const Header = (props) => {
    const {userName, signedIn} = props;

    const userNameDisplay = (
      <div className="gfn-main-header__message-container">
        <span>Welcome {userName}</span>
      </div>
    );

    return (
      <header className="gfn-main-header">
        <div className="gfn-main-header__content">
          <Link to="/" className="gfn-main-header__logo" href="/">
            <h1>Giffin</h1>
          </Link>
          <nav className="gfn-main-header__nav">
            <Link to="/trending">Trending</Link>
            <Link to="/random">Random</Link>
            {signedIn ? null : <a href="/sign-in">Sign in</a>}
            {signedIn ? <a href="/sign-in">Sign in</a> : null}
          </nav>
          <IconButton title="search" aria-label="search"><i className="fas fa-search"></i></IconButton>
        </div>
        {userName ? userNameDisplay : null}
      </header>
    );
};

Header.propTypes = {
  userName: PropTypes.string,
  signedIn: PropTypes.bool.isRequired
};

export default Header;