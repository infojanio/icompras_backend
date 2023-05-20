import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterCompanyDeleteBannerId1684425354848
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('companies', 'banner_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies',
      new TableColumn({
        name: 'banner_id',
        type: 'varchar',
      }),
    );
  }
}
