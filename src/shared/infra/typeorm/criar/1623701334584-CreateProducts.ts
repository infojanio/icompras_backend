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
            name: 'category_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'store_id',
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
            name: 'FKCategoryProduct',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['category_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKStoreProduct',
            referencedTableName: 'stores',
            referencedColumnNames: ['id'],
            columnNames: ['store_id'],
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
