import express from "express";
import Areas from "../models/Area.js";

const router = express.Router();

// Rota GET - Buscar todas as áreas
router.get("/", async (_req, res) => {
  try {
    const areas = await Areas.getAllAreas();
    res.json(areas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar as Áreas" });
  }
});

// Rota POST - Criar uma nova área
router.post("/", async (req, res) => {
  const { nome, id } = req.body;
  try {
    const Area = await Areas.createArea(nome, id);
    res.status(201).json(Areas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar uma nova Área" });
  }
});
export default router;
