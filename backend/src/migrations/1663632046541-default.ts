import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663632046541 implements MigrationInterface {
    name = 'default1663632046541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movieInfos" RENAME COLUMN "name" TO "movieName"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945"`);
        await queryRunner.query(`ALTER TABLE "movieInfos" RENAME COLUMN "movieName" TO "name"`);
    }

}
