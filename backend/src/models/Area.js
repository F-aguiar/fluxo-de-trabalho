import pool from "../config/database.js";

const getAllAreas = async () => {
  const query = "SELECT * FROM areas";
  const result = await pool.query(query);
  return result.rows;
};

const createArea = async (nome) => {
  const query = "INSERT INTO areas (nome) VALUES ($1) RETURNING *";
  const values = [nome];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export default { getAllAreas, createArea };
