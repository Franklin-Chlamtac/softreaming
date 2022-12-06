import { MigrationInterface, QueryRunner } from "typeorm";

export class default1670286865568 implements MigrationInterface {
    name = 'default1670286865568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movies_categories" ("moviesId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_78fbe6339e9b5426f5b10fa3719" PRIMARY KEY ("moviesId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4383ce4dd0d69d3bb4721a8ee2" ON "movies_categories" ("moviesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_844fb4d52177cb635502cc720f" ON "movies_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "movies_categories" ADD CONSTRAINT "FK_4383ce4dd0d69d3bb4721a8ee2b" FOREIGN KEY ("moviesId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movies_categories" ADD CONSTRAINT "FK_844fb4d52177cb635502cc720f2" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies_categories" DROP CONSTRAINT "FK_844fb4d52177cb635502cc720f2"`);
        await queryRunner.query(`ALTER TABLE "movies_categories" DROP CONSTRAINT "FK_4383ce4dd0d69d3bb4721a8ee2b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_844fb4d52177cb635502cc720f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4383ce4dd0d69d3bb4721a8ee2"`);
        await queryRunner.query(`DROP TABLE "movies_categories"`);
    }

}
