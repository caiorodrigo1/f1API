import { Circuit } from "../model/Circuit";

interface ICreateCircuitDTO {
  name: string;
  laps: number;
  location: string;
  country: string;
  mapsUrl: string;
}

interface ICircuitsRepository {
  findByName(name: string): Circuit;
  list(): Circuit[];
  create({ name, laps, location, country, mapsUrl }: ICreateCircuitDTO): void;
}

export { ICircuitsRepository, ICreateCircuitDTO };
