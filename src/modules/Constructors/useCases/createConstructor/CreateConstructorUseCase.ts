import { IConstructorsRepository } from "../../repositories/ICronstructorRepositories";

interface IRequest {
  name: string;
  principal: string;
  drivers: string;
  champ_points: number;
  box_time_record: number;
  one_two_wins: number;
  nationality: string;
}

class CreateConstructorUseCase {
  constructor(private constructorsRepository: IConstructorsRepository) {}

  execute({
    name,
    principal,
    drivers,
    champ_points,
    box_time_record,
    one_two_wins,
    nationality,
  }: IRequest): void {
    const constructorAlreadyExists =
      this.constructorsRepository.findByName(name);

    if (constructorAlreadyExists) {
      throw new Error("Constructor already exists");
    }

    this.constructorsRepository.create({
      name,
      principal,
      drivers,
      champ_points,
      box_time_record,
      one_two_wins,
      nationality,
    });
  }
}

export { CreateConstructorUseCase };
