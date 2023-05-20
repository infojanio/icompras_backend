import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1623701334584 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },

          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'available',
            type: 'boolean',
            default: true,
          },

          {
            name: 'price',
            type: 'numeric',
          },

          {
            name: 'quantity',
            type: 'numeric',
          },

          {
            name: 'subcategory_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'company_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'tenant_id',
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
            name: 'FKSubCategoryProduct',
            referencedTableName: 'subcategories',
            referencedColumnNames: ['id'],
            columnNames: ['subcategory_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKCompanyProduct',
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            columnNames: ['company_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKTenantCategory',
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
    await queryRunner.dropTable('products');
  }
}
