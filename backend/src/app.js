import express from "express";
import routes from "./routes/index.js";
import setupSwagger from "./config/swagger.js";


const app = express();

// Middleware para JSON
app.use(express.json());

// Configuração de rotas
app.use("/api", routes);

// Configuração do Swagger
setupSwagger(app);

export default app;