import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterSubCategoryAddCategoryId1682285083990
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'subcategories',
      new TableColumn({
        name: 'category_id',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('subcategories', 'category_id');
  }
}
