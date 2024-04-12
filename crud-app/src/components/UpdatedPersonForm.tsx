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
  onCancel
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
    <div className="">
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 border rounded-md p-2 w-full  shadow-md bg-slate-200 border-slate-300">
      <label htmlFor="username">Username:</label>
      <input
        className="p-1 border rounded-md px-2 mb-3"
        id="username"
        placeholder="Enter Username"
        type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
   
       <label htmlFor="password">Password:</label>
          <input
        className="p-1 border rounded-md px-2 mb-3"
        id="password"
        type="password"
        placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
   
   <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        <div className="flex flex-col">
        <label htmlFor="birthdate">Birth date:</label>
          <input
          className="p-1 border rounded-md px-2 mb-3 bg-white text-black w-44"
          id="birthdate"
          type="date" // Adjust input type to handle birthdate
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        </div>
        <div className="flex flex-col">
           <label htmlFor="registerdate">Registered At:</label>
            <input
            className="p-1 border rounded-md px-2 mb-3 bg-white text-black w-44"
            type="date" // Adjust input type to handle registeredAt
            placeholder="Registered At"
           value={registeredAt}
            onChange={(e) => setRegisteredAt(e.target.value)}
            />
        </div>
      
     </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 w-48 rounded-md bg-orange-400 hover:bg-orange-500 cursor-pointer text-white"  type="submit">Update Person</button>
        <button onClick={onCancel} className="px-4 py-2 w-48 rounded-md bg-red-600 hover:bg-red-700 cursor-pointer text-white"  type="submit">Cancel edit</button>
      </div>
    </form>
    </div>
  );
};

export default UpdatePersonForm;
