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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      /> */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="date" // Adjust input type to handle birthdate
        placeholder="Birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <input
        type="date" // Adjust input type to handle registeredAt
        placeholder="Registered At"
        value={registeredAt}
        onChange={(e) => setRegisteredAt(e.target.value)}
      />
      <button type="submit">Add Person</button>
    </form>
  );
};

export default AddPersonForm;
