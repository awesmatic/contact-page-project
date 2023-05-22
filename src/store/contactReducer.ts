import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  isActive: string;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const contact = action.payload;
      const id = state.contacts.length + 1;
      state.contacts.push({ ...contact, id });
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const updatedContact = action.payload;
      state.contacts = state.contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
    },
  },
});

export const { addContact, removeContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
