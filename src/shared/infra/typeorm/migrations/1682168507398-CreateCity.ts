import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCity1682168507398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'city',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true, // definição da chave primária
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'uf',
            type: 'varchar',
          },

          {
            name: 'cep',
            type: 'varchar',
          },

          {
            name: 'longitude',
            type: 'numeric',
          },
          {
            name: 'latitude',
            type: 'numeric',
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
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
    await queryRunner.dropTable('city');
  }
}
