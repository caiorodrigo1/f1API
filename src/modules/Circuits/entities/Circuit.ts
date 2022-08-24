import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("test")
class Circuit {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  laps: number;

  @Column()
  location: string;

  @Column()
  country: string;

  @Column()
  mapsUrl: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Circuit };
