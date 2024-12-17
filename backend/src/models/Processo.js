import pool from "../config/database.js";

const getAllProcessos = async () => {
  const query = "SELECT * FROM processos";
  const result = await pool.query(query);
  return result.rows;
};

const createProcesso = async (nome, descricao, area_id) => {
  const query =
    "INSERT INTO processos (nome, descricao, area_id) VALUES ($1, $2, $3) RETURNING *";
  const result = await pool.query(query, [nome, descricao, area_id]);
  return result.rows[0];
};

export default { getAllProcessos, createProcesso };
