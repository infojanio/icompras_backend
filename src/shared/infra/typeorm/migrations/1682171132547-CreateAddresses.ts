import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddresses1682171132547 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'addresses',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true, // definição da chave primária
          },

          {
            name: 'district',
            type: 'varchar',
          },

          {
            name: 'street',
            type: 'varchar',
          },

          {
            name: 'complement',
            type: 'varchar',
          },

          {
            name: 'city_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'company_id',
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
            referencedTableName: 'cities',
            referencedColumnNames: ['id'],
            columnNames: ['city_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKUserAddress',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKCompanyAddress',
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            columnNames: ['company_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('addresses');
  }
}
