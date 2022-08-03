import { Constructor } from "../../model/Constructor";
import { IConstructorsRepository } from "../../repositories/ICronstructorRepositories";

class ListConstructorsUseCase {
  constructor(private constructorsRepositories: IConstructorsRepository) {}

  execute(): Constructor[] {
    const constructors = this.constructorsRepositories.list();

    return constructors;
  }
}

export { ListConstructorsUseCase };
