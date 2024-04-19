// generateData.js

import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

const generatePeople = (num) => {
  const people = {
    fakes: [],
  };
  for (let i = 0; i < num; i++) {
    const person = {
      id: faker.string.alphanumeric(4),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      sex: faker.person.sexType(),
      birthdate: faker.date.birthdate(),
      address: faker.location.streetAddress(true),
      accountNumber: faker.finance.accountNumber(),
    };
    people.fakes.push(person);
  }
  return people;
};

const data = generatePeople(5); // Generate 10 random people
writeFileSync("./src/data/people.json", JSON.stringify(data, null, 2));
