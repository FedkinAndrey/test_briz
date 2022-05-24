import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

interface IModalProps {
	isOpen: boolean;
	children: React.ReactNode;
}

function Modal({ isOpen, children }: IModalProps): React.ReactElement {
	return (
		<ReactModal
			isOpen={isOpen}
			contentLabel="My dialog"
			className="modal"
			overlayClassName="overlay"
			shouldCloseOnOverlayClick={false}
		>
			{children}
		</ReactModal>
	);
}

export default Modal;
