import React, { useState, FC } from "react";
import { addContact } from "../../store/contactReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectContact } from "../../store";

interface ContactFormState {
  firstName: string;
  lastName: string;
  isActive: string;
}

const ContactPage: FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const [contactForm, setContactForm] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    isActive: "active",
  });

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
    dispatch(addContact(contact));
    // You can perform further actions with the form data, such as submitting to an API
    console.log(contactForm);
    console.log(contacts);
  };

  return (
    <div className="w-full border border border-black-600">
      <h1 className="flex justify-center items-center">Contact Page</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              className="border-2 border-black m-2"
              type="text"
              id="firstName"
              name="firstName"
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
                    name="status"
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
                    name="status"
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
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
