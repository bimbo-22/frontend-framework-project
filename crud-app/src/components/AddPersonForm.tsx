import React, { useState } from "react";
interface AddPersonFormProps {
  onSubmit: (personData: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    sex: string;
    birthdate: string;
    address: string;
    accountNumber: string;
  }) => Promise<void>;
}

const AddPersonForm: React.FC<AddPersonFormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [address, setAddress] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      id: "",
      firstName,
      lastName,
      email,
      sex,
      birthdate,
      address,
      accountNumber,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setSex("");
    setBirthdate("");
    setAddress("");
    setAccountNumber("");
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 border rounded-md p-2 w-full shadow-md bg-slate-200 border-slate-300"
      >
        <label htmlFor="firstName">First Name:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="firstName"
          placeholder="Enter First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        required/>

        <label htmlFor="lastName">Last Name:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="lastName"
          placeholder="Enter Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required/>

        <label htmlFor="email">Email:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>

        <label htmlFor="sex">Sex:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="sex"
          type="text"
          placeholder="Enter Sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          required/>

        <label htmlFor="birthdate">Birth Date:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="birthdate"
          type="date"
          placeholder="Enter Birth Date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required/>

        <label htmlFor="address">Address:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="address"
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required/>

        <label htmlFor="accountNumber">Account Number:</label>
        <input
          className="p-1 border rounded-md px-2 mb-3"
          id="accountNumber"
          type="text"
          placeholder="Enter Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          required/>

        <button
          className="px-4 py-2 w-36 rounded-md bg-green-600 hover:bg-green-400 cursor-pointer text-white"
          type="submit"
        >
          Add Person
        </button>
      </form>
    </div>
  );
};

export default AddPersonForm;
