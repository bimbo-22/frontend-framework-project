import React from "react";
import { Person as PersonType } from "../types/types";

interface PersonProps {
  person: PersonType;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const Person: React.FC<PersonProps> = ({
  person,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <>
        <div className="flex flex-col gap-3 border p-4 mb-4 bg-gray-200 shadow-md rounded-md">
          <p>
            <strong>Username:</strong> {person.username}
          </p>
          <p>
            <strong>Email:</strong> {person.email}
          </p>
          <p>
            <strong>Birthdate:</strong>{" "}
              {new Date(person.birthdate).toLocaleDateString()}
          </p>
          <p>
            <strong>Registered At:</strong>{" "}
              {new Date(person.registeredAt).toLocaleString()}
           </p>
            {/* Edit and delete buttons */}
         <div className="flex gap-3">
          <button className="px-3 rounded-md py-1 bg-orange-400 hover:bg-orange-600 text-white" onClick={onEditClick}>
              Edit
          </button>
         <button className="px-3 rounded-md py-1 bg-red-600 hover:bg-red-800 text-white" onClick={onDeleteClick}>
            Delete
          </button>
         </div>
        </div>

    </>
   
   
  );
};

export default Person;
