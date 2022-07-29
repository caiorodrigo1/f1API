import { Circuit } from "../model/Circuits";

interface ICreateCircuitDTO {
  name: string;
  laps: number;
  location: string;
  country: string;
  mapsUrl: string;
}

class CircuitsRepository {
  private circuits: Circuit[];

  constructor() {
    this.circuits = [];
  }

  create({ name, laps, location, country, mapsUrl }: ICreateCircuitDTO): void {
    const circuit = new Circuit();

    Object.assign(circuit, {
      name,
      laps,
      location,
      country,
      mapsUrl,
    });

    this.circuits.push(circuit);
  }
}

export { CircuitsRepository };
