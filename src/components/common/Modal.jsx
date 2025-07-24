import React from 'react';
import '@/styles/components/modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✖</button>
          {children}
        </div>
      </div>
    );
  };

export default Modal;