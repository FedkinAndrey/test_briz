import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '../../hooks/hooks';
import { IPhonebook } from '../../types/types';
import { schema } from './schema/schema';
import { addContact } from '../../store/phonebook/slice';
import { Form } from '..';

interface FormPostProps {
	onClose: () => void;
}

function FormPost({ onClose }: FormPostProps) {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IPhonebook>({
		defaultValues: {
			lastname: '',
			phoneNumber: '',
		},
		mode: 'onSubmit',
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<IPhonebook> = data => {
		dispatch(addContact(data));
		onClose();
	};

	return (
		<Form register={register} errors={errors} title="New contact">
			<button type="button" onClick={() => onClose()}>
				<span>Close</span>
			</button>
			<button type="button" onClick={handleSubmit(onSubmit)}>
				<span>Submit</span>
			</button>
		</Form>
	);
}

export default FormPost;
