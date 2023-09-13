import { MigrationInterface, QueryRunner } from "typeorm"

export class CoffeeRefactor1694595192806 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('coffee', 'name', 'title');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('coffee', 'title', 'name');
  }

}
