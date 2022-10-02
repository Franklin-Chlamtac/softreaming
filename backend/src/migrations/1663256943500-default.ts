import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663256943500 implements MigrationInterface {
    name = 'default1663256943500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movieInfos" ("id" SERIAL NOT NULL, "name" text NOT NULL, "category" text NOT NULL, "description" text NOT NULL, "release" text NOT NULL, "duration" text NOT NULL, "url" text NOT NULL, CONSTRAINT "PK_81a173b49626be9efb6d18cec55" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movieInfos"`);
    }

}
