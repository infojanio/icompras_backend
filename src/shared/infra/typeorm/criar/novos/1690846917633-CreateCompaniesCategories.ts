import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCompaniesCategories1690846917633
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories_companies',
        columns: [
          {
            name: 'company_id',
            type: 'uuid',
          },

          {
            name: 'category_id',
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
      'categories_companies',
      new TableForeignKey({
        name: 'FKCategoryCompany',
        referencedTableName: 'categories',
        referencedColumnNames: ['id'],
        columnNames: ['category_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'categories_companies',
      new TableForeignKey({
        name: 'FKCompanyCategory',
        referencedTableName: 'companies',
        referencedColumnNames: ['id'],
        columnNames: ['company_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'categories_companies',
      'FKCompanyCategory',
    );

    await queryRunner.dropForeignKey(
      'categories_companies',
      'FKCategoryCompany',
    );

    await queryRunner.dropTable('categories_companies');
  }
}
