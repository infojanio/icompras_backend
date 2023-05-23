import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMapLocations1683402902675 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'maplocations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            //   generationStrategy: "uuid",
            //   default: "uuid_generate_v4()"
          },

          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'longitude',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'latitude',
            type: 'numeric',
            isNullable: true,
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },

          {
            name: 'user_id',
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
            name: 'FKUserMapLocation',
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
    await queryRunner.dropTable('maplocations');
  }
}
