import { Router } from "express";

import { createConstructorController } from "../modules/Constructors/useCases/createConstructor";
import { listConstructorsController } from "../modules/Constructors/useCases/listConstructors";

const constructorsRoutes = Router();

constructorsRoutes.post("/", (request, response) => {
  return createConstructorController.handle(request, response);
});

constructorsRoutes.get("/", (request, response) => {
  return listConstructorsController.handle(request, response);
});

export { constructorsRoutes };
