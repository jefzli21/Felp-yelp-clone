import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {Link} from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
    <div className="drop">

      <button id='profile' onClick={openMenu}>
      <i className="fa-solid fa-people-pulling"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li><Link id="aboutme" to={`/users/${user.id}`}><i id='icons' className="fa-solid fa-users-line"></i>About Me</Link></li>
          <li id='logout'>
            <button id="logoutbutt" onClick={logout}><i id='icons' className="fa-solid fa-person-walking"></i>Log Out</button>
          </li>
        </ul>
      )}
    </div>
    </>
  );
}

export default ProfileButton;
