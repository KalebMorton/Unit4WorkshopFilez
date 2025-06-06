import db from "../client.js";

export async function createFolder(folder_name) {
    const result = await db.query(
    `INSERT INTO folders (folder_name) VALUES ($1)
    RETURNING *;`, [folder_name]
  )
  return result
}

export async function getFolders() {
  const result = await db.query(`SELECT * FROM folders`)
  return result.rows
}

export async function getSingleFolder(id) {
  const result = await db.query(
    `SELECT *,
    (
        SELECT json_agg(files)
        FROM files
        WHERE files.folder_id = folders.id
    ) AS folder 
    FROM folders WHERE id = $1`, [id]
)
  return result.rows[0]
}
