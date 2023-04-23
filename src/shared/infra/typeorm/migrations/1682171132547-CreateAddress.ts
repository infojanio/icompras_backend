import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddress1682171132547 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
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
            name: 'city_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'FKCityAddress',
            referencedTableName: 'city',
            referencedColumnNames: ['id'],
            columnNames: ['city_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address');
  }
}
