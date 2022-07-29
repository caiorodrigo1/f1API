import { Circuit } from "../model/Circuit";

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

  list(): Circuit[] {
    return this.circuits;
  }

  findByName(name: string): Circuit {
    const circuit = this.circuits.find((circuit) => circuit.name === name);

    return circuit;
  }
}

export { CircuitsRepository };
