import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContact } from "../../store";
import { removeContact } from "../../store/contactReducer";
import { useNavigate } from "react-router-dom";

const CreateContact: FC = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveContact = (contactId: number | undefined) => {
    if (typeof contactId === "number") {
      dispatch(removeContact(contactId));
    }
  };
  const handleEditContact = (contactId: number | undefined) => {
    if (typeof contactId === "number") {
      navigate("/editContact", { state: { id: contactId } });
    }
  };

  const handleCreateContact = () => {
    navigate("/createContact");
  };
  return (
    <div className="w-full overflow-y-scroll">
      <div className="flex justify-center items-center m-2 ">
        <button
          onClick={handleCreateContact}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Contact
        </button>
      </div>

      {contacts.length <= 0 && (
        <div className="flex justify-center items-center ">
          <h2>
            No Contact Found Please Add Contact from Create contact Button
          </h2>
        </div>
      )}
      {contacts.length > 0 && (
        <div className="flex justify-center items-center flex-wrap ">
          {contacts.map((item) => (
            <div key={item.id} className="border-2 border-black  p-4 m-4 ">
              <div className="flex text-base font-bold">
                <h1 className="m-1">{item.firstName}</h1>
                <h1 className="m-1">{item.lastName}</h1>
                <h1 className="m-1">{item.isActive}</h1>
              </div>
              <div className="flex flex-col  ">
                <button
                  onClick={() => handleEditContact(item.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                >
                  Edit Contact
                </button>
                <button
                  onClick={() => handleRemoveContact(item.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                >
                  Remove Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateContact;
