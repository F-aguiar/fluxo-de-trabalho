import pool from "../config/database.js";

async function getAllAreas() {
  const query = "SELECT * FROM areas";
  const result = await pool.query(query);
  return result.rows;
}

const createArea = async (nome, id) => {
  const query = "INSERT INTO areas (nome) VALUES ($1) RETURNING *";

  const result = await pool.query(query, [nome, id]);
  return result.rows[0];
};

export default { getAllAreas, createArea };
