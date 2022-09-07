import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import {motion} from "framer-motion"

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1, transition:{duration:0.2}}}
    id="modal">
      <motion.div id="modal-background" onClick={onClose} />
      <motion.div 
       initial={{ opacity: 0}}
       animate={{ opacity: 1, transition:{delay:0.2, duration:0.3} }}
      id="modal-content">
        {children}
      </motion.div>
    </motion.div>,
    modalNode
  );
}