import express from "express";
import {
  getRoute,
  getPokemon,
  getPokemon_id,
  getPokemon_info,
} from "../controllers/Controller.js";
//import {  } from "../middlewares/";

const router = express.Router();

router.get("/", getRoute);
router.get("/pokemon", getPokemon);
router.get("/pokemon/:id", getPokemon_id);
router.get("/pokemon/:id/:info", getPokemon_info);

export default router;
