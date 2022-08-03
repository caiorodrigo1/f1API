import { CircuitsRepository } from "../../repositories/implementations/CircuitsRepositories";
import { CreateCircuitController } from "./CreateCircuitController";
import { CreateCircuitUseCase } from "./CreateCircuitUseCase";

const circuitsRepository = CircuitsRepository.getInstance();

const createCircuitUseCase = new CreateCircuitUseCase(circuitsRepository);

const createCircuitController = new CreateCircuitController(
  createCircuitUseCase
);

export { createCircuitController };
