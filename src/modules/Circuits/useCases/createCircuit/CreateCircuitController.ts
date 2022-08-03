import { Request, Response } from "express";

import { CreateCircuitUseCase } from "./CreateCircuitUseCase";

class CreateCircuitController {
  constructor(private createCircuitUseCase: CreateCircuitUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, laps, location, country, mapsUrl } = request.body;

    this.createCircuitUseCase.execute({
      name,
      laps,
      location,
      country,
      mapsUrl,
    });

    return response.status(201).send();
  }
}

export { CreateCircuitController };
