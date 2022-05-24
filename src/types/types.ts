import {
	FieldError,
	FieldErrors,
	RegisterOptions,
	UseFormRegister,
} from 'react-hook-form';

export interface IPhonebook {
	lastname: string;
	phoneNumber: string;
}

export interface PhonebookState {
	phonebook: IPhonebook[];
}

export interface StepProps {
	errors: FieldErrors<IPhonebook>;
	register: UseFormRegister<IPhonebook>;
}

export interface FieldProps {
	error: FieldError | undefined;
	register: UseFormRegister<IPhonebook>;
	options?: RegisterOptions;
	name: 'lastname' | 'phoneNumber';
	placeholder?: string;
}

export interface PayloadData {
	id: number;
	contact: IPhonebook;
}
