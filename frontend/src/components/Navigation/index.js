import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from "./logo/felp-white.png"
import SignupFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <li>
        <LoginFormModal/>
        {/* <NavLink to="/login"><button id='login'>Log In</button></NavLink> */}
      </li>
      <li className='butt'>
        {/* <NavLink to="/signup"><button id='signup'>Sign Up</button></NavLink> */}
        <SignupFormModal />
      </li>
      </>
    );
  }

  return (
    <ul className='nav'>

        <NavLink exact to="/"><div className='logo'><img  className='logo' src={logo} alt='' width="150" height="150"/></div></NavLink>
        <div>
          <SearchBar />
        {/* placeholder for searchbar component */}
        </div>
        <div>
        {sessionLinks}
        </div>
    </ul>
  );
}

export default Navigation;
