import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Mentors extends BaseSchema {
  protected tableName = 'mentors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.text('bio')
      table.string('tagline')
      table.integer('media_id').unsigned().references('id').inTable('medias')
      table.enum('status',[0,1,2,3])
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
