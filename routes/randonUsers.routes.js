import { Router } from "express";
import { getUsers, saveUser } from "../controllers/random.controller.js";

const router = Router();

router.get("/", getUsers);

router.post("/", saveUser)

export default router;