import pool from "../config/database.js";

const getAllSubprocessos = async () => {
  const query = "SELECT * FROM subprocessos";
  const result = await pool.query(query);
  return result.rows;
};

const createSubprocesso = async (nome, descricao, processo_id) => {
  const query =
    "INSERT INTO subprocessos (nome, descricao, processo_id) VALUES ($1, $2, $3) RETURNING *";
  const result = await pool.query(query, [nome, descricao, processo_id]);
  return result.rows[0];
};

export default { getAllSubprocessos, createSubprocesso };
