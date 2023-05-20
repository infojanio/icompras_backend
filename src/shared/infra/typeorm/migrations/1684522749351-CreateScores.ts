import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateScores1684522749351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'scores',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  isNullable: false,
                },
         
                {
                  name: 'star',
                  type: 'numeric',
                },

                  {
                    name: 'result',
                    type: 'numeric',
                  },
      
                {
                  name: 'comment',
                  type: 'varchar',
                },
      
                {
                    name: 'date_score',
                    type: 'date',
                  },
       
                {
                  name: 'isActive',
                  type: 'boolean',
                  default: true,
                },

                     
          {
            name: 'user_id',
            type: 'uuid',
           
          },

          {
            name: 'product_id',
            type: 'uuid',
            isNullable: false,
          },
            
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],

              foreignKeys: [
                {
                  name: 'FKUserScores',
                  referencedTableName: 'users',
                  referencedColumnNames: ['id'],
                  columnNames: ['user_id'],
                  onDelete: 'SET NULL',
                  onUpdate: 'SET NULL',
                },
      
                    {
                  name: 'FKProductScores',
                  referencedTableName: 'products',
                  referencedColumnNames: ['id'],
                  columnNames: ['product_id'],
                  onDelete: 'SET NULL',
                  onUpdate: 'SET NULL',
                },
              ],

            }),
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('scores');
    }

}
