import React, { useState, FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContact } from "../../store";
import { addContact, editContact } from "../../store/contactReducer";
import { useLocation, useNavigate } from "react-router-dom";

interface ContactFormState {
  firstName: string;
  lastName: string;
  isActive: string;
}

interface ContactPageProps {
  contactId?: number;
}

const ContactPage: FC<ContactPageProps> = ({ contactId }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const location = useLocation();
  const navigate = useNavigate();

  const { id = null } = location.state || {};
  const existingContact = id
    ? contacts.find((contact) => contact.id === id)
    : null;

  const [contactForm, setContactForm] = useState<ContactFormState>({
    firstName: existingContact?.firstName || "",
    lastName: existingContact?.lastName || "",
    isActive: existingContact?.isActive || "active",
  });

  useEffect(() => {
    if (existingContact) {
      setContactForm({
        firstName: existingContact.firstName,
        lastName: existingContact.lastName,
        isActive: existingContact.isActive,
      });
    }
  }, [existingContact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contact: ContactFormState = {
      firstName: contactForm.firstName,
      lastName: contactForm.lastName,
      isActive: contactForm.isActive,
    };

    if (existingContact) {
      dispatch(editContact({ id: existingContact.id, contact }));
    } else {
      dispatch(addContact(contact));
    }

    // You can perform further actions with the form data, such as submitting to an API

    navigate("/contact");
  };

  return (
    <div className="w-full border border border-black-600">
      <h1 className="flex justify-center items-center">
        {" "}
        {existingContact ? "Edit Contact Screen" : "Create Contact Screen"}
      </h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              className="border-2 border-black m-2"
              type="text"
              id="firstName"
              name="firstName"
              required
              value={contactForm.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="border-2 border-black m-2"
              type="text"
              id="lastName"
              required
              name="lastName"
              value={contactForm.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <label className="m-4">Status:</label>
            <div className="m-2">
              <div>
                <label>
                  <input
                    type="radio"
                    name="isActive"
                    value="active"
                    checked={contactForm.isActive === "active"}
                    onChange={handleChange}
                  />{" "}
                  Active
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="isActive"
                    value="inactive"
                    checked={contactForm.isActive === "inactive"}
                    onChange={handleChange}
                  />{" "}
                  Inactive
                </label>
              </div>
            </div>
          </div>
          <button
            className="p-2 border-2 border-black cursor-pointer"
            type="submit"
          >
            {existingContact ? "Save Edited Contact" : "Save Contact"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
