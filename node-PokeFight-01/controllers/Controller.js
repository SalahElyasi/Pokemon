import { createRequire } from "module";
const require = createRequire(import.meta.url);
const json_file = require("../file.json");

export const getRoute = (req, res) => {
  res.send("Hello PokeFight!" + res.json(json_file));
};

export const getPokemon = (req, res) => {
  res.send(json_file.map((j) => j));
};

export const getPokemon_id = (req, res) => {
  const { id } = req.params;

  let json_file1 = json_file.find((j) => j.id === parseInt(id));
  res.send(json_file1);
};
export const getPokemon_info = (req, res) => {
  const { id, info } = req.params;

  let json_file1 = json_file.find((j) => j.id === parseInt(id));
  res.send(json_file1[info]);
};
