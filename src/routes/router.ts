import { Router } from "express";
import { getFileTree } from "../controllers/controller.js";

const router = Router();

router.get("/test", (req, res) => res.status(200).send("Service is up and running!"));
router.get("/tree/:node?", getFileTree);

export default router;
