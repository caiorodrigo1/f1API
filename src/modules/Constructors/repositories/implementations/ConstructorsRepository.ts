import { Constructor } from "../../model/Constructor";
import {
  IConstructorsRepository,
  ICreateConstructorDTO,
} from "../ICronstructorRepositories";

class ConstructorsRepository implements IConstructorsRepository {
  private constructors: Constructor[];

  private static INSTANCE: ConstructorsRepository;

  private constructor() {
    this.constructors = [];
  }

  public static getInstance(): ConstructorsRepository {
    if (!ConstructorsRepository.INSTANCE) {
      ConstructorsRepository.INSTANCE = new ConstructorsRepository();
    }
    return ConstructorsRepository.INSTANCE;
  }

  create({
    name,
    principal,
    drivers,
    champ_points,
    box_time_record,
    one_two_wins,
    nationality,
  }: ICreateConstructorDTO): void {
    const constructor = new Constructor();

    Object.assign(constructor, {
      name,
      principal,
      drivers,
      champ_points,
      box_time_record,
      one_two_wins,
      nationality,
    });

    this.constructors.push(constructor);
  }

  findByName(name: string): Constructor {
    const constructor = this.constructors.find(
      (constructor) => constructor.name === name
    );

    return constructor;
  }

  list(): Constructor[] {
    return this.constructors;
  }
}

export { ConstructorsRepository };
