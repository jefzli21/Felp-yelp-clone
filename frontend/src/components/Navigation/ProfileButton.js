import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

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
          <li><i id='icons' className="fa-solid fa-users-line"></i>About{user.username}</li>
          <li id='logout'>
          <i id='icons' className="fa-solid fa-person-walking"></i>
            <button id="logoutbutt" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
    </>
  );
}

export default ProfileButton;
