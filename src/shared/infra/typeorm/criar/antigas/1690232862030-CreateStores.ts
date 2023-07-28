import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStores1690232862030 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stores',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },

          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'slug',
            type: 'varchar',
          },

          {
            name: 'email',
            type: 'varchar',
          },

          {
            name: 'cnpj',
            type: 'varchar',
          },

          {
            name: 'logo',
            type: 'varchar',
          },

          {
            name: 'phone',
            type: 'varchar',
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },

          {
            name: 'openinghours_id',
            type: 'uuid',
          },

          {
            name: 'tenant_id',
            type: 'uuid',
            isNullable: true,
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
            name: 'FKOpeningHoursStores',
            referencedTableName: 'opening_hours',
            referencedColumnNames: ['id'],
            columnNames: ['openinghours_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKTenantStores',
            referencedTableName: 'tenants',
            referencedColumnNames: ['id'],
            columnNames: ['tenant_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKCityStores',
            referencedTableName: 'cities',
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
    await queryRunner.dropTable('stores');
  }
}
