// src/middlewares/corsMiddleware.js

import cors from "cors";

const corsMiddleware = cors({
  origin: "*", // Libera acesso de qualquer origem (ajuste para produção)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

export default corsMiddleware;
