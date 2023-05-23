import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSpecifications1682259348262 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specifications',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true, // definição da chave primária
          },

          {
            name: 'description',
            type: 'varchar',
          },

          {
            name: 'expiration_date',
            type: 'date',
          },

          {
            name: 'unity',
            type: 'varchar',
          },

          {
            name: 'weight', //peso
            type: 'varchar',
          },

          {
            name: 'brand',
            type: 'varchar',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('specifications');
  }
}
