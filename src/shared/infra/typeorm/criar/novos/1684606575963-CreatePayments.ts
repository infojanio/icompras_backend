import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePayments1684606575963 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
          },

          {
            name: 'date_payment',
            type: 'timestamp',
            default: 'now()',
          },

          {
            name: 'value',
            type: 'numeric',
          },

          {
            name: 'payment_form',
            type: 'varchar',
          },

          {
            name: 'status',
            type: 'varchar',
          },

          {
            name: 'comment',
            type: 'varchar',
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
            name: 'order_id',
            type: 'uuid',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'FKUserScores',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKProductScores',
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            columnNames: ['product_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('payments');
  }
}
