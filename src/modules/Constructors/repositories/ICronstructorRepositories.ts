import { Constructor } from "../model/Constructor";

interface ICreateConstructorDTO {
  name: string;
  principal: string;
  drivers: string;
  champ_points: number;
  box_time_record: number;
  one_two_wins: number;
  nationality: string;
}

interface IConstructorsRepository {
  create({
    name,
    principal,
    drivers,
    champ_points,
    box_time_record,
    one_two_wins,
    nationality,
  }: ICreateConstructorDTO): void;
  findByName(name: string): Constructor;
  list(): Constructor[];
}

export { IConstructorsRepository, ICreateConstructorDTO };
