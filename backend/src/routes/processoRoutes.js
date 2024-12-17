import express from "express";
import Processo from "../models/Processo.js"

const router = express.Router();

// Rota GET - Buscar todos os processos
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/", async (_req, res) => {
  try {
    const processos = await Processo.getAllProcessos();
    res.json(processos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar processos" });
  }
});

// Rota POST - Criar um novo processo
router.post("/", async (req, res) => {
  const { nome, descricao, area_id } = req.body;
  try {
    const processo = await Processo.createProcesso(nome, descricao, area_id);
    res.status(201).json(processo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar processo" });
  }
});

export default router;
