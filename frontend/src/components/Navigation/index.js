import React,{useState} from 'react';
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
  const [showLoginModal, setLoginModal] = useState(false);
  const [showSignupModal, setSignupModal] = useState(false);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <li>
        <LoginFormModal setSignupModal={setSignupModal} showLoginModal={showLoginModal} setLoginModal={setLoginModal} />
        {/* <NavLink to="/login"><button id='login'>Log In</button></NavLink> */}
      </li>
      <li className='butt'>
        {/* <NavLink to="/signup"><button id='signup'>Sign Up</button></NavLink> */}
        <SignupFormModal showSignupModal={showSignupModal} setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
      </li>
      </>
    );
  }

  return (
    <div className='background'>

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
    </div>
  );
}

export default Navigation;
