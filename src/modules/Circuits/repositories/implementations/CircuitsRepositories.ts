import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/data-source";
import { Circuit } from "../../entities/Circuit";
import { ICircuitsRepository, ICreateCircuitDTO } from "../ICircuitsRepository";

class CircuitsRepository implements ICircuitsRepository {
  private repository: Repository<Circuit>;

  private static INSTANCE: CircuitsRepository;

  private constructor() {
    this.repository = AppDataSource.getRepository(Circuit);
  }

  public static getInstance(): CircuitsRepository {
    if (!CircuitsRepository.INSTANCE) {
      CircuitsRepository.INSTANCE = new CircuitsRepository();
    }
    return CircuitsRepository.INSTANCE;
  }

  async create({
    name,
    laps,
    location,
    country,
    mapsUrl,
  }: ICreateCircuitDTO): Promise<void> {
    const circuit = this.repository.create({
      name,
      laps,
      location,
      country,
      mapsUrl,
    });

    await this.repository.save(circuit);
  }

  async list(): Promise<Circuit[]> {
    const circuits = await this.repository.find();
    return circuits;
  }

  async findByName(name: string): Promise<Circuit> {
    const circuit = await this.repository.findOneBy({ name });

    return circuit;
  }
}

export { CircuitsRepository };
