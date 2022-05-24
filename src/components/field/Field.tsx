import React from 'react';
import { FieldProps } from '../../types/types';

function Field({ register, error, name, options, placeholder }: FieldProps) {
	return (
		<div className="field">
			<div className="field__input">
				<input
					{...register(name, options)}
					id={name}
					placeholder={placeholder}
				/>
			</div>
			{error && <p className="field__error">{error?.message}</p>}
		</div>
	);
}

export default Field;
