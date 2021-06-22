import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Media extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public url: string

  @column()
  public parent_id: number

  @column()
  public media_id: number // [1 -> video, 2-> image, 3-> thumbnail, 4-> audio, 5->others]

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
