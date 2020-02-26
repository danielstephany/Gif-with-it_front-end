import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import IconButton from '@components/IconButton';
import HeaderSearchHandler from '../HeaderSearchHandler';
import { Link } from "react-router-dom";

const Header = (props) => {
  const { userName, signedIn, history} = props;
    const [searching, setSearching] = useState(false);

  const unmoutHeaderSearch = () => {
      setTimeout(()=>{
        setSearching(false);
      },300);
    }

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
            {signedIn ? null : <Link to="/sign-up">Sign up</Link>}
            {signedIn ? <button>logout</button> : <Link to="/sign-in">Sign in</Link>}
          </nav>
          <IconButton title="search" aria-label="search" onClick={() => { setSearching(true)}}><i className="fas fa-search"></i></IconButton>
          {searching ? <HeaderSearchHandler close={unmoutHeaderSearch} history={history} /> : null}
        </div>
        {userName ? userNameDisplay : null}
      </header>
    );
};

Header.propTypes = {
  userName: PropTypes.string,
  signedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default Header;