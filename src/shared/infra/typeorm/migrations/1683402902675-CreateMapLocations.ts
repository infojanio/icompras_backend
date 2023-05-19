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
          },

          {
            name: 'longitude',
            type: 'numeric', 
          },
          {
            name: 'latitude',
            type: 'numeric', 
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
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
        ],

        foreignKeys: [
          {
            name: 'FKUserMapLocations',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },

          {
            name: 'FKCompanyMapLocations',
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
    await queryRunner.dropTable('maplocations');
  }
}
