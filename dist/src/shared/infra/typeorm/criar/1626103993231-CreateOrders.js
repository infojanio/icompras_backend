import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrders1626103993231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },

          {
            name: 'user_id',
            type: 'uuid',
          },

          {
            name: 'company_id',
            type: 'uuid',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'FKCompanyOrder',
            referencedTableName: 'companies',
            referencedColumnNames: ['id'],
            columnNames: ['company_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          /*
          {
            name: 'FKPaymentOrder',
            referencedTableName: 'payments',
            referencedColumnNames: ['id'],
            columnNames: ['payment_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          */

          {
            name: 'FKUserOrder',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
