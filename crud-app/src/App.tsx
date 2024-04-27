import React, { useState, useEffect } from "react";
import AddPersonForm from "./components/AddPersonForm";
import PersonList from "./components/PersonList";
import UpdatePersonForm from "./components/UpdatedPersonForm";
import {
  addPerson,
  updatePerson,
  deletePerson,
  getAllPeople,
} from "./services/api";
import { Person } from "./types/types";

const App: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPeople();
        setPeople(data); // Adjusted to set the entire data array
        console.log(people)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  const handleAddPerson = async (personData: Person) => {
    try {
      const newPerson = await addPerson(personData);
      setPeople([...people, newPerson]);
      console.log("New person added:", newPerson);
    } catch (error) {
      console.error("Error adding person:", error);
    }
  };

  const handleUpdatePerson = async (updatedPerson: Person) => {
    try {
      console.log("Updating person:", updatedPerson);
      const updated = await updatePerson(updatedPerson);
      console.log("Person updated successfully:", updated);
      setPeople(
        people.map((person) =>
          person.id === updated.id ? updated : person
        )
      );
      setSelectedPerson(null);
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  const handleDeletePerson = async (id: string) => {
    try {
      await deletePerson(id);
      setPeople(people.filter((person) => person.id !== id));
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  const handleEditClick = (person: Person) => {
    setSelectedPerson(person);
  };

  const handleCancelEdit = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="flex flex-col h-full md:px-20 py-10">
      <h1 className="mx-auto text-3xl font-bold font-serif">
        CRUD Application
      </h1>
      {selectedPerson ? (
        <div>
          <h2 className="text-xl mt-8 mb-4">Edit Person</h2>
          <UpdatePersonForm
            person={selectedPerson}
            onSubmit={handleUpdatePerson}
            onCancel={handleCancelEdit}
          />
        </div>
      ) : (
        <div className="">
          <h2 className="text-xl font-bold mt-8 mb-4">Add Person</h2>
          <AddPersonForm onSubmit={handleAddPerson} />
        </div>
      )}
      <h2 className="text-3xl mt-8 mb-4">People</h2>
      <PersonList
        onEditClick={handleEditClick}
        onDeleteClick={handleDeletePerson}
      />
    </div>
  );
};

export default App;
