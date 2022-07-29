import { Router } from "express";

import { CircuitsRepository } from "../repositories/CircuitsRepositories";

const circuitsRoutes = Router();
const circuitsRepository = new CircuitsRepository();

circuitsRoutes.post("/", (request, response) => {
  const { name, laps, location, country, mapsUrl } = request.body;

  const circuitAlreadyExists = circuitsRepository.findByName(name);

  if (circuitAlreadyExists) {
    return response.status(400).json({ error: "Circuit already exists" });
  }

  circuitsRepository.create({ name, laps, location, country, mapsUrl });

  return response.status(201).send();
});

circuitsRoutes.get("/", (request, response) => {
  const circuits = circuitsRepository.list();

  return response.status(200).json(circuits);
});

export { circuitsRoutes };
