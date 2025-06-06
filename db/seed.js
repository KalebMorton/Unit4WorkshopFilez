import db from "#db/client";
import { createFile } from "./queries/fileQueries.js";
import { createFolder } from "./queries/folderQueries.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createFolder("Homework")
  await createFolder("Vacation Pictures")
  await createFolder("ICBM Launch Codes")

  await createFile("English Paper.pdf", 19, 1)
  await createFile("Math Worksheet.pdf", 22, 1)
  await createFile("Science Experiment Results.pdf", 25, 1)
  await createFile("Social Studies Essay.pdf", 31, 1)
  await createFile("Manifesto.txt", 154, 1)

  await createFile("Hawaii.png", 101, 2)
  await createFile("Canada.png", 97, 2)
  await createFile("Goverment Facility.tiff", 2098, 2)
  await createFile("Italy.png", 114, 2)
  await createFile("Australia.png", 107, 2)

  await createFile("SILO_1.txt", 8236, 3)
  await createFile("SILO_2.txt", 9058, 3)
  await createFile("SILO_3.txt", 8955, 3)
  await createFile("SILO_4.txt", 9121, 3)
  await createFile("SILO_5.txt", 9001, 3)
}
