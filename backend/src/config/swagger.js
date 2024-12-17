import swaggerUi from "swagger-ui-express";

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API de Processos",
    version: "1.0.0",
    description: "Documentação da API de Processos e Subprocessos",
  },
  paths: {
    "/api/areas": {
      get: { summary: "Listar todas as áreas", responses: { 200: {} } },
    },
    "/api/processos": {
      get: { summary: "Listar todos os processos", responses: { 200: {} } },
    },
    "/api/subprocessos": {
      get: { summary: "Listar todos os subprocessos", responses: { 200: {} } },
    },
  },
};

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupSwagger;
