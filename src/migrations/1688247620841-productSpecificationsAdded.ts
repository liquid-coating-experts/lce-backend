import { MigrationInterface, QueryRunner } from "typeorm";

class changeProduct1688247620841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "product"' + ' ADD COLUMN "specifications" text'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "product" DROP COLUMN "specifications"'
    );
  }
}

export default changeProduct1688247620841;
