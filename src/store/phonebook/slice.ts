import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhonebook, PayloadData, PhonebookState } from '../../types/types';
import { phonebookMock } from '../../mock/phonebook-mock';

const initialState: PhonebookState = {
	phonebook: phonebookMock,
};

const phonebookSlice = createSlice({
	name: 'phonebooks',
	initialState,
	reducers: {
		addContact(state, action: PayloadAction<IPhonebook>) {
			state.phonebook.push(action.payload);
		},
		editContact(state, action: PayloadAction<PayloadData>) {
			state.phonebook[action.payload.id] = action.payload.contact;
			return state;
		},
		removeContact(state, action: PayloadAction<number>) {
			state.phonebook.splice(action.payload, 1);
		},
	},
});

export const { addContact, editContact, removeContact } =
	phonebookSlice.actions;

export default phonebookSlice.reducer;
