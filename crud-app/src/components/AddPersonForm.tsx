import React, { useState } from "react";

interface AddPersonFormProps {
  onSubmit: (personData: {
    name: string;
    age: number;
    address: string;
    accountNumber: string;
    username: string;
    email: string;
    password: string;
    birthdate: string;
    registeredAt: string;
  }) => Promise<void>;
}

const AddPersonForm: React.FC<AddPersonFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [registeredAt, setRegisteredAt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      username,
      email,
      password,
      birthdate,
      registeredAt,
      name: "",
      age: 0,
      address: "",
      accountNumber: "",
    });
    setUsername("");
    setEmail("");
    // setAvatar("");
    setPassword("");
    setBirthdate("");
    setRegisteredAt("");
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
      {/* <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      /> */}
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
      <button className="px-4 py-2 w-36 rounded-md bg-green-600 hover:bg-green-400 cursor-pointer text-white"  type="submit">Add Person</button>
    </form>
    </div>
   
  );
};

export default AddPersonForm;
