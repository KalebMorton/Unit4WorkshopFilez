import db from "../client.js";

export async function createFile(file_name, size, folder_id) {
    const result = await db.query(
    `INSERT INTO files (file_name, size, folder_id) VALUES ($1, $2, $3)
    RETURNING *;`, [file_name, size, folder_id]
  )
  return result
}

export async function getFiles() {
  const result = await db.query(`SELECT files.*, folders.folder_name FROM files LEFT JOIN folders ON files.folder_id = folders.id;`)
  return result.rows
}