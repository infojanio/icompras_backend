import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompanies1683485851960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },

          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'slug',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'cnpj',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },

          {
            name: 'address_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'banner_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'openinghours_id',
            type: 'uuid',
            isNullable: false,
          },

          {
            name: 'tenant_id',
            type: 'uuid',
            isNullable: false,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'FKAddressCompanies',
            referencedTableName: 'address',
            referencedColumnNames: ['id'],
            columnNames: ['address_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKBannerCompanies',
            referencedTableName: 'banners',
            referencedColumnNames: ['id'],
            columnNames: ['banner_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKOpeningHoursCompanies',
            referencedTableName: 'opening_hours',
            referencedColumnNames: ['id'],
            columnNames: ['openinghours_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKTenantCompanies',
            referencedTableName: 'tenants',
            referencedColumnNames: ['id'],
            columnNames: ['tenant_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
