import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSales1684692756792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sales',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },

          {
            name: 'order_id',
            type: 'uuid',
          },

          {
            name: 'subtotal',
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
            name: 'change', //troco em dinheiro
            type: 'decimal',
            precision: 10,
            scale: 2,
          },

          {
            name: 'total',
            type: 'numeric',
            precision: 10,
            scale: 2,
          },

          {
            name: 'payment_status', //status pagamento
            type: 'varchar',
          },

          {
            name: 'payment_method', //método pagamento
            type: 'varchar',
          },

          {
            name: 'payment_date',
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
            name: 'FKOrderSales',
            referencedTableName: 'orders',
            referencedColumnNames: ['id'],
            columnNames: ['order_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sales');
  }
}
