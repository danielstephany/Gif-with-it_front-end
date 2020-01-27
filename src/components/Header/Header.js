import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

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
          <a className="gfn-main-header__logo" href="/">
            <h1>Giffin</h1>
          </a>
          <nav className="gfn-main-header__nav">
            <a href="/trending">Trending</a>
            <a href="/random">Random</a>
            {signedIn ? null : <a href="/sign-in">Sign in</a>}
            {signedIn ? <a href="/sign-in">Sign in</a> : null}
          </nav>
          <button title="search" aria-label="search"><i className="fas fa-search"></i></button>
          {userName ? userNameDisplay : null}
        </div>
      </header>
    );
};

Header.propTypes = {
  userName: PropTypes.string,
  signedIn: PropTypes.bool.isRequired
};

export default Header;