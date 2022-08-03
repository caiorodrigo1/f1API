import { Circuit } from "../../model/Circuit";
import { ICircuitsRepository } from "../../repositories/ICircuitsRepository";

class ListCircuitsUseCase {
  constructor(private circuitsRepositories: ICircuitsRepository) {}

  execute(): Circuit[] {
    const circuits = this.circuitsRepositories.list();

    return circuits;
  }
}

export { ListCircuitsUseCase };
