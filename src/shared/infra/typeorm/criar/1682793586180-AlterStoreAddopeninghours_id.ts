import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterStoreAddopeninghoursId1682793586180
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'stores',
      new TableColumn({
        name: 'openinghours_id',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  foreignKeys: [
    {
      name: 'FKOpeningHoursStore';
      referencedTableName: 'opening_hours';
      referencedColumnNames: ['id'];
      columnNames: ['openinghours_id'];
      onDelete: 'SET NULL';
      onUpdate: 'SET NULL';
    },
  ];

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('stores', 'openinghours_id');
  }
}
