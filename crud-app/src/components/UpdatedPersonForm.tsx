import React, { useState } from "react";
import { Person } from "../types/types";

interface UpdatePersonFormProps {
  person: Person;
  onSubmit: (updatedPerson: Person) => void;
  onCancel: () => void;
}

const UpdatePersonForm: React.FC<UpdatePersonFormProps> = ({
  person,
  onSubmit,
  onCancel,
}) => {
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);
  const [email, setEmail] = useState(person.email);
  const [birthdate, setBirthdate] = useState(person.birthdate);
  const [address, setAddress] = useState(person.address);
  const [accountNumber, setAccountNumber] = useState(person.accountNumber);
  const [sex, setSex] = useState(person.sex);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPerson: Person = {
      ...person,
      firstName,
      lastName,
      email,
      birthdate,
      address,
      accountNumber,
      sex,
    };
    onSubmit(updatedPerson);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 border rounded-md p-2 w-full  shadow-md bg-slate-200 border-slate-300"
      >
        <label htmlFor="firstName">First Name:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="firstName"
          placeholder="Enter First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="lastName"
          placeholder="Enter Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="birthdate">Birth date:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3 bg-white text-black w-44"
          id="birthdate"
          type="date"
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="address"
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="accountNumber">Account Number:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="accountNumber"
          type="text"
          placeholder="Enter Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

        <label htmlFor="sex">Sex:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="sex"
          type="text"
          placeholder="Enter Sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            className="px-4 py-2 w-48 rounded-md bg-orange-400 hover:bg-orange-500 cursor-pointer text-white"
            type="submit"
          >
            Update Person
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 w-48 rounded-md bg-red-600 hover:bg-red-700 cursor-pointer text-white"
            type="submit"
          >
            Cancel edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePersonForm;
