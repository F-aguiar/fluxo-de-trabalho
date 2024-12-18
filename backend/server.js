import app from "./src/app.js"; 
import dotenv from "dotenv";// Importando a configuração do Express


dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor está rodando na porta ${PORT}`);
});
