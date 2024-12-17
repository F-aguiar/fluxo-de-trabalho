import express from "express";
import Subprocesso from "../models/Subprocesso.js";

const router = express.Router();

// Rota GET - Buscar todos os subprocessos
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/subprocessos", async (_req, res) => {
  try {
    const subprocessos = await Subprocesso.getAllSubprocessos();
    res.json(subprocessos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar subprocessos" });
  }
});

// Rota POST - Criar um novo subprocesso
router.post("/subprocessos", async (req, res) => {
  const { nome, descricao, processo_id } = req.body;
  try {
    const subprocesso = await Subprocesso.createSubprocesso(
      nome,
      descricao,
      processo_id
    );
    res.status(201).json(subprocesso);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar subprocesso" });
  }
});

export default router;
