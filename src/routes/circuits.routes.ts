import { Router } from "express";

import { createCircuitController } from "../modules/Circuits/useCases/createCircuit";
import { listCircuitsController } from "../modules/Circuits/useCases/listCircuits";

const circuitsRoutes = Router();

circuitsRoutes.post("/", (request, response) => {
  return createCircuitController.handle(request, response);
});

circuitsRoutes.get("/", (request, response) => {
  return listCircuitsController.handle(request, response);
});

export { circuitsRoutes };
