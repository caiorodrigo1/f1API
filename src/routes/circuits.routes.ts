import { Router } from "express";

import { CircuitsRepository } from "../repositories/CircuitsRepositories";

const circuitsRoutes = Router();
const circuitsRepository = new CircuitsRepository();

circuitsRoutes.post("/", (request, response) => {
  const { name, laps, location, country, mapsUrl } = request.body;

  circuitsRepository.create({ name, laps, location, country, mapsUrl });

  return response.status(201).send();
});

export { circuitsRoutes };
