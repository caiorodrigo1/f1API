import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class test1661281323732 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "circuits",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "laps",
            type: "int",
          },
          {
            name: "location",
            type: "varchar",
          },
          {
            name: "country",
            type: "varchar",
          },
          {
            name: "mapsUrl",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("circuits");
  }
}
