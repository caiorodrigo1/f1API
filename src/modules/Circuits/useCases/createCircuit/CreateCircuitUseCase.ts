import { ICircuitsRepository } from "../../repositories/ICircuitsRepository";

interface IRequest {
  name: string;
  laps: number;
  location: string;
  country: string;
  mapsUrl: string;
}

class CreateCircuitUseCase {
  constructor(private circuitsRepository: ICircuitsRepository) {}

  execute({ name, laps, location, country, mapsUrl }: IRequest): void {
    const circuitAlreadyExists = this.circuitsRepository.findByName(name);

    if (circuitAlreadyExists) {
      throw new Error("Circuit already exists!");
    }

    this.circuitsRepository.create({ name, laps, location, country, mapsUrl });
  }
}

export { CreateCircuitUseCase };
