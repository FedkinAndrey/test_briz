import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectSelf = (state: RootState) => state.phonebooks;

export const selectPhonebook = createSelector(selectSelf, phonebook => ({
	phonebooks: phonebook.phonebook,
}));
