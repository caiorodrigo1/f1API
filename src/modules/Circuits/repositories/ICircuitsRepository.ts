import { Circuit } from "../entities/Circuit";

interface ICreateCircuitDTO {
  name: string;
  laps: number;
  location: string;
  country: string;
  mapsUrl: string;
}

interface ICircuitsRepository {
  findByName(name: string): Promise<Circuit>;
  list(): Promise<Circuit[]>;
  create({
    name,
    laps,
    location,
    country,
    mapsUrl,
  }: ICreateCircuitDTO): Promise<void>;
}

export { ICircuitsRepository, ICreateCircuitDTO };
