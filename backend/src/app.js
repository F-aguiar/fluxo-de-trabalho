import express from "express";
import routes from "./routes/index.js"; // Importa as rotas configuradas no index.js
import setupSwagger from "./config/swagger.js"; // Importa o Swagger setup
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";
import corsMiddleware from "./middlewares/corsMiddleware.js";

const app = express();

// Middleware para JSON
app.use(express.json());

app.use(logger); // Logs de requisições
app.use(corsMiddleware); // Permite CORS

// Configuração de rotas
app.use("/api", routes); // Todas as rotas usarão o prefixo "/api"

app.get("/", (req, res) => {
    res.status(200).json({ message: "API rodando corretamente!" });
  });
  
// Configuração do Swagger
setupSwagger(app);

export default app;
