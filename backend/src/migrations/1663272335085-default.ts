import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663272335085 implements MigrationInterface {
    name = 'default1663272335085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "email" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "email"`);
    }

}
