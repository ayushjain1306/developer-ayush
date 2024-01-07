import express from "express";
import submitController from "../controller/submitController.js";

const router = express.Router();

router.post('/submit', submitController);


export default router;