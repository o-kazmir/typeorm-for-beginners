import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAgeToUser1759427068901 implements MigrationInterface {
    name = 'AddAgeToUser1759427068901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
