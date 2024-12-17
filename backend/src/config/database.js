import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.postgres || "postgres",
  host: process.env.localhost || "localhost",
  database: process.env.database || "maptech",
  password: process.env.admin || "123456",
  port: process.env.DB_PORT || 5432,
});

pool.on("connect", () => {
  console.log("Conexão bem-sucedida ao banco de dados!");
});

pool.on("error", (err) => {
  console.error("Erro no banco de dados:", err.message);
});

export default pool;
