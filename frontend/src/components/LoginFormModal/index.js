import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({setSignupModal, setLoginModal, showLoginModal}) {

  return (
    <>
      {/* <button id='login' className='butt' onClick={() => setLoginModal(true)}>Log In</button> */}
      {showLoginModal && (
        <Modal onClose={() => setLoginModal(false)}>
          <LoginForm setSignupModal={setSignupModal} setLoginModal={setLoginModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;