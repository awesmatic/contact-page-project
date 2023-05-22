import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactReducer";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const selectContact = (state: RootState) => state.contact.contacts;
export type AppDispatch = typeof store.dispatch;
