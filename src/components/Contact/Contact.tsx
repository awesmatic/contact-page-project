import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectContact } from "../../store";

const CreateContact: FC = () => {
  const contacts = useSelector(selectContact);
  console.log(contacts);
  return (
    <div className="w-full overflow-y-scroll">
      <div className="flex justify-center items-center m-2 ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
              <h1>{item.firstName}</h1>
              <div className="flex flex-col  ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
                  Edit Contact
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
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
