import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateSpecificationsProducts1624893040241
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specifications_products',
        columns: [
          {
            name: 'product_id',
            type: 'uuid',
          },

          {
            name: 'specification_id',
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
      'specifications_products',
      new TableForeignKey({
        name: 'FKSpecificationProduct',
        referencedTableName: 'specifications',
        referencedColumnNames: ['id'],
        columnNames: ['specification_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'specifications_products',
      new TableForeignKey({
        name: 'FKProductSpecification',
        referencedTableName: 'products',
        referencedColumnNames: ['id'],
        columnNames: ['product_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'specifications_products',
      'FKProductSpecification',
    );

    await queryRunner.dropForeignKey(
      'specifications_products',
      'FKSpecificationProduct',
    );

    await queryRunner.dropTable('specifications_products');
  }
}
