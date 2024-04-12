// generateData.js

import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";

const generatePeople = (num) => {
  const people = {
    fakes: [],
  };
  for (let i = 0; i < num; i++) {
    const person = {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
    people.fakes.push(person);
  }
  return people;
};

const data = generatePeople(10); // Generate 10 random people
writeFileSync("./src/data/people.json", JSON.stringify(data, null, 2));
