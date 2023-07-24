import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterTenantAddCityId1690217762108 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'tenants',
      new TableColumn({
        name: 'city_id',
        type: 'uuid',
        isNullable: true,
      }),
    );
  }

  foreignKeys: [
    {
      name: 'FKCityTenant';
      referencedTableName: 'cities';
      referencedColumnNames: ['id'];
      columnNames: ['city_id'];
      onDelete: 'SET NULL';
      onUpdate: 'SET NULL';
    },
  ];

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tenants', 'city_id');
  }
}
