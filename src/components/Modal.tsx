import React from 'react';
import './Modal.css';

interface LayoutProps {
	isOpen: boolean;
  	onClose: () => void;
  	children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: LayoutProps) => {
	if (!isOpen) return null;

	return (
		<div className="modal">
			<div className="modal__backdrop" onClick={onClose}></div>
			<div className="modal__content">
				<button className="modal__close-button" onClick={onClose}>x</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
