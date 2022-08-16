import { Entity } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class Constructor {
  id?: string;
  name: string;
  principal: string;
  drivers: string;
  champ_points: number;
  box_time_record: number;
  one_two_wins: number;
  nationality: string;
  drivers_ids?: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Constructor };
