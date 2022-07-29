import { Circuit } from "../model/Circuit";
import { ICircuitsRepository, ICreateCircuitDTO } from "./ICircuitsRepository";

class PostgresCircuitsRepository implements ICircuitsRepository {
  findByName(name: string): Circuit {
    console.log(name);
    return null;
  }
  list(): Circuit[] {
    throw new Error("Method not implemented.");
  }
  create({ name, laps, location, country, mapsUrl }: ICreateCircuitDTO): void {
    console.log(name, laps, location, country, mapsUrl);
    return null;
  }
}

export { PostgresCircuitsRepository };
