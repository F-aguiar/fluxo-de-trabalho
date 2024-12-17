import express from "express";
import areaRoutes from "./areaRoutes.js";
import processoRoutes from "./processoRoutes.js";
import subprocessoRoutes from "./subprocessoRoutes.js";

const router = express.Router();

// Rotas
router.use("/areas", areaRoutes); // Rotas para áreas
router.use("/processos", processoRoutes); // Rotas para processos
router.use("/subprocessos", subprocessoRoutes); 

export default router;
