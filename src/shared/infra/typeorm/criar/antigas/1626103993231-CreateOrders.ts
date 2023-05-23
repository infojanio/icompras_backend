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
            isPrimary: true, // definição da chave primária
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
            name: 'delivery_status',
            type: 'varchar',
          },
          {
            name: 'payment_type',
            type: 'varchar',
          },

          {
            name: 'change', //troco em dinheiro
            type: 'decimal',
            precision: 10,
            scale: 2,
          },

          {
            name: 'freight', //frete
            type: 'decimal',
            precision: 10,
            scale: 2,
          },

          {
            name: 'discount', //desconto
            type: 'decimal',
            precision: 10,
            scale: 2,
          },

          {
            name: 'subtotal',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },

          {
            name: 'total',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'order_date',
            type: 'timestamp',
            default: 'now()',
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
            name: 'FKUserOrder',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKCompanyOrder',
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
    await queryRunner.dropTable('orders');
  }
}
