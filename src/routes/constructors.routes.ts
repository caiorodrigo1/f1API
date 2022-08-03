import { Router } from "express";

import { ConstructorsRepository } from "../modules/Constructors/repositories/implementations/ConstructorsRepository";
import { createConstructorController } from "../modules/Constructors/useCases/createConstructor";

const constructorsRoutes = Router();
const costructorsRepository = new ConstructorsRepository();

constructorsRoutes.post("/", (request, response) => {
  return createConstructorController.handle(request, response);
});

constructorsRoutes.get("/", (request, response) => {
  const constructors = costructorsRepository.list();

  return response.status(200).json(constructors);
});

export { constructorsRoutes };
