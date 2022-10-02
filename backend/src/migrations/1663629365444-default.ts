import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663629365444 implements MigrationInterface {
    name = 'default1663629365444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" RENAME COLUMN "name" TO "userName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" RENAME COLUMN "userName" TO "name"`);
    }

}
