import { Request, Response } from "express";

import { ListConstructorsUseCase } from "./ListConstructorsUseCase";

class ListConstructorsController {
  constructor(private listConstructorsUseCase: ListConstructorsUseCase) {}

  handle(request: Request, response: Response) {
    const constructors = this.listConstructorsUseCase.execute();

    return response.status(200).json(constructors);
  }
}

export { ListConstructorsController };
