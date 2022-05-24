import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/slice';

const store = configureStore({
	reducer: {
		phonebooks: phonebookReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
