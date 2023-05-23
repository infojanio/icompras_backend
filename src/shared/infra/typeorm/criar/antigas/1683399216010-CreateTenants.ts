import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTenants1683399216010 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tenants',
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
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'image',
            type: 'varchar',
            isNullable: true,
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
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
    await queryRunner.dropTable('tenants');
  }
}
