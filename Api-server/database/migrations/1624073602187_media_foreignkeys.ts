import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MediaForeignkeys extends BaseSchema {
  protected tableName = 'medias'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('parent_id').unsigned().references('id').inTable('medias').alter()
    })
  }

  public async down () {
    // this.schema.alterTable(this.tableName, (table) => {
    //   table.dropColumn('parent_id');
    // })
  }
}
