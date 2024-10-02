import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCitiesTenants1708803609595 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cities_tenants',
        columns: [
          {
            name: 'city_id',
            type: 'uuid',
          },

          {
            name: 'tenant_id',
            type: 'uuid',
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'cities_tenants',
      new TableForeignKey({
        name: 'FKCityTenant',
        referencedTableName: 'cities',
        referencedColumnNames: ['id'],
        columnNames: ['city_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'cities_tenants',
      new TableForeignKey({
        name: 'FKTenantCity',
        referencedTableName: 'tenants',
        referencedColumnNames: ['id'],
        columnNames: ['tenant_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('cities_tenants', 'FKCityTenant');

    await queryRunner.dropForeignKey('cities_tenants', 'FKTenantCity');

    await queryRunner.dropTable('cities_tenants');
  }
}
