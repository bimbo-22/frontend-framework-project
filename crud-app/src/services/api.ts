import axios from "axios";
import { Person } from "../types/types";
import {nanoid} from "nanoid"

const API_URL = "http://localhost:8000";

interface PersonData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  sex: string;
  birthdate: string;
  address: string;
  accountNumber: string;
}

export const getAllPeople = async () => {
  const response = await fetch(`${API_URL}/fakes`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json(); 
};

export const addPerson = async (person: PersonData) => {
  const id = nanoid(4)
  const addWithGeneratedId = {...person, id}
  const response = await axios.post(`${API_URL}/fakes`, addWithGeneratedId);
  return response.data;
};

export const deletePerson = async (userId: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/fakes/${userId}`);
    console.log("Person deleted successfully.");
  } catch (error) {
    console.error(`Error deleting person: ${error}`);
  }
};

export const updatePerson = async (updatedPerson: Person): Promise<Person> => {
  try {
    console.log("Updating person:", updatedPerson);
    const response = await axios.patch(
      `${API_URL}/people/${updatedPerson.id}`,
      updatedPerson
    );
    console.log("Update response:", response.data);
    return response.data
  } catch (error) {
    console.error(`Error updating person: ${error}`);
    throw new Error(`Error updating person: ${error}`);
  }
};
