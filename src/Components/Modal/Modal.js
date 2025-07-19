import React from 'react';
import './Modal.css';
import { IoClose } from 'react-icons/io5';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;