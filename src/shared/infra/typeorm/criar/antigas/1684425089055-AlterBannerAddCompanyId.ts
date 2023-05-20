import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterBannerAddCompanyId1684425089055
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'banners',
      new TableColumn({
        name: 'company_id',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('banners', 'company_id');
  }
}
