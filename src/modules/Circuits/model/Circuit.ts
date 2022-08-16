import { Entity } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class Circuit {
  id?: string;
  name: string;
  laps: number;
  location: string;
  country: string;
  mapsUrl: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Circuit };
