import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Field } from '..';
import { IPhonebook } from '../../types/types';

interface FormProps {
	register: UseFormRegister<IPhonebook>;
	errors: FieldErrors<IPhonebook>;
	title: string;
	children: React.ReactNode;
}

function Form({ register, errors, title, children }: FormProps) {
	return (
		<form className="form">
			<div className="form__container">
				<div className="form__title">
					<span>{title}</span>
				</div>
				<div className="form__content">
					<Field error={errors.lastname} register={register} name="lastname" />
					<Field
						error={errors.phoneNumber}
						register={register}
						name="phoneNumber"
						placeholder="+380509981412"
					/>
				</div>
				<div className="form__buttons">{children}</div>
			</div>
		</form>
	);
}

export default Form;
