import db from "./client.js";

export async function CreateFolder(folder_name) {
    const result = await db.query(
    `INSERT INTO folders (folder_name) VALUES ($1)
    RETURNING *;`, [folder_name]
  )
  return result
}

export async function CreateFile(file_name, size, folder_id) {
    const result = await db.query(
    `INSERT INTO files (file_name, size, folder_id) VALUES ($1, $2, $3)
    RETURNING *;`, [file_name, size, folder_id]
  )
  return result
}