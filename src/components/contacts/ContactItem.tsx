import React from 'react';
import { Edit24, RemoveIcon } from '../../assets/icons';
import { IPhonebook } from '../../types/types';

interface ContactProps {
	contact: IPhonebook;
	onRemove: (id: number) => void;
	expandModal: (contact: IPhonebook, id: number) => void;
	index: number;
}

function ContactItem({ contact, onRemove, expandModal, index }: ContactProps) {
	const handleRemove = () => {
		onRemove(index);
	};

	return (
		<div className="contact">
			<div className="contact__details">
				<div className="contact__lastname">
					<span>{contact.lastname}</span>
				</div>
				<div className="contact__number">
					<span>{contact.phoneNumber}</span>
				</div>
			</div>
			<div className="contact__actions">
				<div className="contact__edit">
					<button type="button" onClick={() => expandModal(contact, index)}>
						<Edit24 />
					</button>
				</div>
				<div className="contact__remove">
					<button type="button" onClick={handleRemove}>
						<RemoveIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContactItem;
