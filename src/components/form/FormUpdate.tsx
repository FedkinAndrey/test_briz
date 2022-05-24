import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/hooks';
import { IPhonebook, PayloadData } from '../../types/types';
import { schema } from './schema/schema';
import { editContact } from '../../store/phonebook/slice';
import { Form } from '..';

interface FormUpdateProps {
	contact: IPhonebook | null;
	closeModal: () => void;
	id: number;
}

const FormUpdate = ({ closeModal, contact, id }: FormUpdateProps) => {
	const dispatch = useAppDispatch();

	const [values, setValues] = useState<IPhonebook>({
		lastname: '',
		phoneNumber: '',
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IPhonebook>({
		mode: 'onSubmit',
		defaultValues:
			contact !== null ? values : { lastname: '', phoneNumber: '' },
		resolver: yupResolver(schema),
	});

	const handleReset = () => {
		reset();
	};

	const handleClose = () => {
		closeModal();
	};

	const submit: SubmitHandler<IPhonebook> = updatedContact => {
		const payload: PayloadData = {
			id,
			contact: updatedContact,
		};
		dispatch(editContact(payload));
		handleClose();
	};

	useEffect(() => {
		if (contact !== null) {
			setValues({
				lastname: contact.lastname,
				phoneNumber: contact.phoneNumber,
			});
		}
	}, [contact]);

	useEffect(() => {
		reset(values);
	}, [values]);

	return (
		<Form register={register} errors={errors} title="Update contact">
			<button type="button" onClick={handleClose}>
				<span>Cansel</span>
			</button>
			<button type="button" onClick={handleReset}>
				<span>Reset</span>
			</button>
			<button type="button" onClick={handleSubmit(submit)}>
				<span>Submit</span>
			</button>
		</Form>
	);
};

export default FormUpdate;
