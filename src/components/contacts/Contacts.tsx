import React, { useState } from 'react';
import ContactItem from './ContactItem';
import './_contacts.scss';
import FormUpdate from '../form/FormUpdate';
import { Modal } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectPhonebook } from '../../store/phonebook/selectors';
import FormPost from '../form/FormPost';
import { IPhonebook } from '../../types/types';
import { removeContact } from '../../store/phonebook/slice';
import { Add24 } from '../../assets/icons';

function Contacts() {
	const dispatch = useAppDispatch();
	const { phonebooks } = useAppSelector(selectPhonebook);

	const [isOpen, setIsOpen] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedContact, setSelectedContact] = useState<IPhonebook | null>(
		null
	);
	const [contactId, setId] = useState<number>(0);

	const expandModal = (contact: IPhonebook, id: number) => {
		setSelectedContact(contact);
		setModalIsOpen(!modalIsOpen);
		setId(id);
	};

	const closeModal = () => {
		setSelectedContact(null);
		setModalIsOpen(!modalIsOpen);
		setId(0);
	};

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	const onRemove = (id: number) => {
		dispatch(removeContact(id));
	};

	return (
		<div className="contacts">
			<div className="contacts__title">
				<h1>Contacts</h1>
			</div>
			<div className="contacts__list">
				{phonebooks.length !== 0 &&
					phonebooks.map((item, index) => (
						<ContactItem
							contact={item}
							onRemove={onRemove}
							expandModal={expandModal}
							index={index}
							key={item.phoneNumber + item.lastname}
						/>
					))}
				<Modal isOpen={modalIsOpen}>
					<FormUpdate
						contact={selectedContact}
						closeModal={closeModal}
						id={contactId}
					/>
				</Modal>
			</div>
			<div className="contacts__add">
				<button type="button" onClick={() => toggleModal()}>
					<span>Add new contact</span>
					<Add24 />
				</button>
			</div>
			<Modal isOpen={isOpen}>
				<FormPost onClose={toggleModal} />
			</Modal>
		</div>
	);
}

export default Contacts;
