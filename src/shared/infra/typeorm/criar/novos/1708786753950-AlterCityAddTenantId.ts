import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterCityAddTenantId1708786753950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'cities',
      new TableColumn({
        name: 'tenant_id',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  foreignKeys: [
    {
      name: 'FKTenantCity';
      referencedTableName: 'tenants';
      referencedColumnNames: ['id'];
      columnNames: ['tenant_id'];
      onDelete: 'SET NULL';
      onUpdate: 'SET NULL';
    },
  ];

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('cities', 'tenant_id');
  }
}
