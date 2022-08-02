import { Router } from "express";

import { CircuitsRepository } from "../modules/Circuits/repositories/CircuitsRepositories";
import { CreateCurcuitService } from "../modules/Circuits/services/CreateCircuitService";

const circuitsRoutes = Router();
const circuitsRepository = new CircuitsRepository();

circuitsRoutes.post("/", (request, response) => {
  const { name, laps, location, country, mapsUrl } = request.body;

  const createCircuitService = new CreateCurcuitService(circuitsRepository);

  createCircuitService.execute({ name, laps, location, country, mapsUrl });

  return response.status(201).send();
});

circuitsRoutes.get("/", (request, response) => {
  const circuits = circuitsRepository.list();

  return response.status(200).json(circuits);
});

export { circuitsRoutes };
