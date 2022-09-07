import React from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({showSignupModal,setSignupModal, setLoginModal}) {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='signup' className='butt' onClick={() => setSignupModal(true)}>Sign Up</button>
      {showSignupModal && (
        <Modal onClose={() => setSignupModal(false)}>
          <SignupForm setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;