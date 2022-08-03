import { ConstructorsRepository } from "../../repositories/implementations/ConstructorsRepository";
import { CreateConstructorController } from "./CreateConstructorController";
import { CreateConstructorUseCase } from "./CreateConstructorUseCase";

const constructorsRepository = new ConstructorsRepository();

const createConstructorUseCase = new CreateConstructorUseCase(
  constructorsRepository
);

const createConstructorController = new CreateConstructorController(
  createConstructorUseCase
);

export { createConstructorController };
