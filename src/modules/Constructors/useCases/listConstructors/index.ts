import { ConstructorsRepository } from "../../repositories/implementations/ConstructorsRepository";
import { ListConstructorsController } from "./ListConstructorController";
import { ListConstructorsUseCase } from "./ListConstructorsUseCase";

const constructorsRepository = ConstructorsRepository.getInstance();

const listConstructorsUseCase = new ListConstructorsUseCase(
  constructorsRepository
);

const listConstructorsController = new ListConstructorsController(
  listConstructorsUseCase
);

export { listConstructorsController };
