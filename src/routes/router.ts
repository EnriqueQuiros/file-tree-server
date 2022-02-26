import { Router } from "express";
import { getFile, getFileTree } from "../controllers/controller.js";

const router = Router();

router.get("/test", (req, res) => res.status(200).send("Service is up and running!"));
router.get("/tree/:path?", getFileTree);
router.get("/file/:path?", getFile);

export default router;
