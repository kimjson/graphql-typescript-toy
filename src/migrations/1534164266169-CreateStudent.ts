import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStudent1534164266169 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: "students",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "age",
          type: "int",
          isPrimary: true
        }
      ]
    }), true)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("students");
  }

}
