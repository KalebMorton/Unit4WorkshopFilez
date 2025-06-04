import db from "#db/client";
import { CreateFolder, CreateFile } from "./queries.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await CreateFolder("Homework")
  await CreateFolder("Vacation Pictures")
  await CreateFolder("ICBM Launch Codes")

  await CreateFile("English Paper.pdf", 19, 1)
  await CreateFile("Math Worksheet.pdf", 19, 1)
  await CreateFile("Science Experiment Results.pdf", 19, 1)
  await CreateFile("Social Studies Essay.pdf", 19, 1)
  await CreateFile("Manifesto.txt", 19, 1)

  await CreateFile("Hawaii.png", 19, 2)
  await CreateFile("Canada.png", 19, 2)
  await CreateFile("Goverment Facility.tiff", 19, 2)
  await CreateFile("Italy.png", 19, 2)
  await CreateFile("Australia.png", 19, 2)

  await CreateFile("SILO_1.txt", 19, 3)
  await CreateFile("SILO_2.txt", 19, 3)
  await CreateFile("SILO_3.txt", 19, 3)
  await CreateFile("SILO_4.txt", 19, 3)
  await CreateFile("SILO_5.txt", 19, 3)
}
