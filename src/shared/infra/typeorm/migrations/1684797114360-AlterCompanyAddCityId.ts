import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterCompanyAddCityId1684797114360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies',
      new TableColumn({
        name: 'city_id',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  foreignKeys: [
    {
      name: 'FKCityCompany';
      referencedTableName: 'cities';
      referencedColumnNames: ['id'];
      columnNames: ['city_id'];
      onDelete: 'SET NULL';
      onUpdate: 'SET NULL';
    },
  ];

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('companies', 'city_id');
  }
}
