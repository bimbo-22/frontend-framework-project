import axios from "axios";
import { Person } from "../types/types";
const API_URL = "http://localhost:8000";

interface PersonData {
  name: string;
  age: number;
  address: string;
  accountNumber: string;
}

export const getAllPeople = async () => {
  const response = await fetch(`${API_URL}/people`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const addPerson = async (person: PersonData) => {
  const response = await fetch(`${API_URL}/people`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  });
  if (!response.ok) {
    throw new Error("Failed to add person");
  }
  return response.json();
};

export const deletePerson = async (personId: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${personId}`);
    console.log("Person deleted successfully.");
  } catch (error) {
    console.error(`Error deleting person: ${error}`);
    throw new Error(`Error deleting person: ${error}`);
  }
};

export const updatePerson = async (updatedPerson: Person): Promise<Person> => {
  try {
    console.log("Updating person:", updatedPerson);
    const response = await axios.put(
      `${API_URL}/${updatedPerson.id}`,
      updatedPerson
    );
    console.log("Update response:", response.data);
    return response.data as Person;
  } catch (error) {
    console.error(`Error updating person: ${error}`);
    throw new Error(`Error updating person: ${error}`);
  }
};
