import React, { useState } from "react";
import { Person } from "../types/types";

interface UpdatePersonFormProps {
  person: Person;
  onSubmit: (updatedPerson: Person) => void;
}

const UpdatePersonForm: React.FC<UpdatePersonFormProps> = ({
  person,
  onSubmit,
}) => {
  const [username, setUsername] = useState(person.username);
  const [email, setEmail] = useState(person.email);
  const [password, setPassword] = useState(person.password);
  const [birthdate, setBirthdate] = useState(person.birthdate);
  const [registeredAt, setRegisteredAt] = useState(person.registeredAt);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPerson: Person = {
      ...person,
      username,
      email,
      password,
      birthdate,
      registeredAt,
    };
    onSubmit(updatedPerson);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="birthdate"
          className="block text-gray-700 font-bold mb-2"
        >
          Birthdate
        </label>
        <input
          type="date"
          id="birthdate"
          className="form-input"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="registeredAt"
          className="block text-gray-700 font-bold mb-2"
        >
          Registered At
        </label>
        <input
          type="date"
          id="registeredAt"
          className="form-input"
          value={registeredAt}
          onChange={(e) => setRegisteredAt(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Update Person
      </button>
    </form>
  );
};

export default UpdatePersonForm;
