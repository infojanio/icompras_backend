import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOpeningHours1682790883431 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'opening_hours',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true, // definição da chave primária
          },

          {
            name: 'title',
            type: 'varchar',
          },

          {
            name: 'operation_week',
            type: 'varchar',
          },

          {
            name: 'operation_weekend',
            type: 'varchar',
          },

          {
            name: 'notice',
            type: 'varchar',
          },

          {
            name: 'status',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('opening_hours');
  }
}
