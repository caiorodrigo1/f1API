import { Circuit } from "../../model/Circuit";
import { ICircuitsRepository, ICreateCircuitDTO } from "../ICircuitsRepository";

class CircuitsRepository implements ICircuitsRepository {
  private circuits: Circuit[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CircuitsRepository;

  private constructor() {
    this.circuits = [];
  }

  public static getInstance(): CircuitsRepository {
    if (!CircuitsRepository.INSTANCE) {
      CircuitsRepository.INSTANCE = new CircuitsRepository();
    }
    return CircuitsRepository.INSTANCE;
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
