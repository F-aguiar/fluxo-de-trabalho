import pool from "../config/database.js";

const getAllSubprocessos = async () => {
  const query = "SELECT * FROM subprocessos";
  try {
    const result = await pool.query(query);
    console.log("Subprocessos encontrados:", result.rows);
    return result.rows;
  } catch (error) {
    console.error("Erro ao buscar subprocessos:", error.message);
    throw error; // Propaga o erro para o controlador
  }
};

const createSubprocesso = async (nome, descricao, processo_id) => {
  const query =
    "INSERT INTO subprocessos (nome, descricao, processo_id) VALUES ($1, $2, $3) RETURNING *";
  try {
    const result = await pool.query(query, [nome, descricao, processo_id]);
    console.log("Subprocesso criado:", result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error("Erro ao criar subprocesso:", error.message);
    throw error; // Propaga o erro para o controlador
  }
};

export default { getAllSubprocessos, createSubprocesso };
