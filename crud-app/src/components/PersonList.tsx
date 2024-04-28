import React, { useState, useEffect } from "react";
import Person from "./Person";
import { Person as PersonType } from "../types/types";

interface PersonListProps {
  onEditClick: (person: PersonType) => void;
  onDeleteClick: (email: string) => void;
}
const API_URL = "http://localhost:8000/fakes"

const PersonList: React.FC<PersonListProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const [people, setPeople] = useState<PersonType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setPeople(data); // Assuming the data structure matches the array of Person objects directly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {

    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [onDeleteClick, onEditClick]);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {people.map((person, index) => (
        <Person
          key={index}// Using userId as the unique key
          person={person}
          onEditClick={() => onEditClick(person)}
          onDeleteClick={() => onDeleteClick(person.id)}
        />
      ))}
    </div>
  );
};

export default PersonList;
