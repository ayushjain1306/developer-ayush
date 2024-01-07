import express from "express";
import submitController from "../controller/submitController.js";

const router = express.Router();

router.get('/', (request, response)=>{
  response.json("Hello");
})
router.post('/submit', submitController);


export default router;
