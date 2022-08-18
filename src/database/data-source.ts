import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "postgres_container",
  port: 5432,
  username: "postgres",
  password: "changeme",
});

export { AppDataSource };
