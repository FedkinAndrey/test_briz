import * as yup from 'yup';

export const schema = yup.object().shape({
	lastname: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Lastname should contain only characters')
		.min(2, 'Minimum length is 2 characters')
		.max(20, 'Maximum length is 20 characters')
		.required('Lastname is a required field'),
	phoneNumber: yup
		.string()
		.matches(
			/^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
			'Enter a valid phone number'
		)
		.required('Phone number is a required field'),
});
