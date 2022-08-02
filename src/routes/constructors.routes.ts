import { request, response, Router } from "express";

import { ConstructorsRepository } from "../modules/Constructor/repositories/ConstructorsRepository";
import { CreateConstructorService } from "../modules/Constructor/services/CreateConstructorService";

const constructorsRoutes = Router();
const costructorsRepository = new ConstructorsRepository();

constructorsRoutes.post("/", (request, response) => {
  const {
    name,
    principal,
    drivers,
    champ_points,
    box_time_record,
    one_two_wins,
    nationality,
  } = request.body;

  const createConstructorService = new CreateConstructorService(
    costructorsRepository
  );

  createConstructorService.execute({
    name,
    principal,
    drivers,
    champ_points,
    box_time_record,
    one_two_wins,
    nationality,
  });

  return response.status(201).send();
});

constructorsRoutes.get("/", (request, response) => {
  const constructors = costructorsRepository.list();

  return response.status(200).json(constructors);
});

export { constructorsRoutes };
