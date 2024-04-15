import React, { useState, useEffect } from "react";
import Person from "./Person";
import { Person as PersonType } from "../types/types";

interface PersonListProps {
  onEditClick: (person: PersonType) => void;
  onDeleteClick: (personId: string) => void;
}

const PersonList: React.FC<PersonListProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const [people, setPeople] = useState<PersonType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/fakes");
        const data = await response.json();
        setPeople(data); // Assuming the data structure matches the array of Person objects directly
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <Person
          key={person.userId} // Using userId as the unique key
          person={person}
          onEditClick={() => onEditClick(person)}
          onDeleteClick={() => onDeleteClick(person.userId)}
        />
      ))}
    </div>
  );
};

export default PersonList;
