import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1622312830649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,

            //   generationStrategy: "uuid",
            //   default: "uuid_generate_v4()"
          },

          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },

          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },

          {
            name: 'phone',
            type: 'varchar',
           
          },

          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'avatar',
            type: 'varchar',
            
          },

          {
            name: 'type',
            type: 'varchar',
           
          },

          {
            name: 'isActive',
            type: 'boolean',
            default: true,
          },

          {
            name: 'isAdmin',
            type: 'boolean',
            default: false,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
