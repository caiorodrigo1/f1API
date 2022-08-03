import { Request, Response } from "express";

import { ListCircuitsUseCase } from "./ListCircuitsUseCase";

class ListCircuitsController {
  constructor(private listCircuitsUseCase: ListCircuitsUseCase) {}

  handle(request: Request, response: Response) {
    const circuits = this.listCircuitsUseCase.execute();

    return response.status(200).json(circuits);
  }
}

export { ListCircuitsController };
