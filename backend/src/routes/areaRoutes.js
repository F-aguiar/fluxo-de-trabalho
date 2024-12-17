import express from "express";

const router = express.Router();

// Rota GET - Buscar todas as áreas
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/areas", (_req, res) => {
  res.json({ message: "Listando todas as áreas" });
});

// Rota POST - Criar uma nova área
router.post("/", (req, res) => {
  const { nome } = req.body;
  res.status(201).json({ message: `Área '${nome}' criada com sucesso!` });
});

export default router;
