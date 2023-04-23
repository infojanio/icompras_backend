import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1622312830649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
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
            name: 'email',
            type: 'varchar',
          },

          {
            name: 'phone',
            type: 'varchar',
          },

          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'avatar',
            type: 'varchar',
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },

          {
            name: 'isAdmin',
            type: 'boolean',
            default: false,
          },

          {
            name: 'address_id',
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
            name: 'FKAddressUser',
            referencedTableName: 'address',
            referencedColumnNames: ['id'],
            columnNames: ['address_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
