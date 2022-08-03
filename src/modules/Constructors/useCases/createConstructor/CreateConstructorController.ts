import { Request, Response } from "express";

import { CreateConstructorUseCase } from "./CreateConstructorUseCase";

class CreateConstructorController {
  constructor(private createConstructorUseCase: CreateConstructorUseCase) {}

  handle(request: Request, response: Response) {
    const {
      name,
      principal,
      drivers,
      champ_points,
      box_time_record,
      one_two_wins,
      nationality,
    } = request.body;

    this.createConstructorUseCase.execute({
      name,
      principal,
      drivers,
      champ_points,
      box_time_record,
      one_two_wins,
      nationality,
    });

    return response.status(201).send();
  }
}

export { CreateConstructorController };
