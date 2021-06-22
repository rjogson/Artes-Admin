import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Medias extends BaseSchema {
  protected tableName = 'medias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('url').nullable()
      table.integer('parent_id',4)
      table.enum('media_type', [1,2,3,4,5])
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
