import { CircuitsRepository } from "../../repositories/implementations/CircuitsRepositories";
import { ListCircuitsController } from "./ListCircuitsController";
import { ListCircuitsUseCase } from "./ListCircuitsUseCase";

const circuitsRepository = CircuitsRepository.getInstance();
const listCircuitsUseCase = new ListCircuitsUseCase(circuitsRepository);
const listCircuitsController = new ListCircuitsController(listCircuitsUseCase);

export { listCircuitsController };
