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
    <div className="border p-4 mb-4">
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
      <button className="btn mr-2" onClick={onEditClick}>
        Edit
      </button>
      <button className="btn" onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Person;
