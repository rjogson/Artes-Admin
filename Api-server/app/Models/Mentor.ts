import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Media from './Media'
import User from './User'

export default class Mentor extends BaseModel {

  // columns start

  @column({ isPrimary: true })
  public id: number

  @column()
  public tagline: string

  @column()
  public bio: string

  @column()
  public user_id: number

  @column()
  public media_id: number

  @column()
  public status: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // columns end

  // Relationships start

  @belongsTo(() => Media)
  public coverImage: BelongsTo<typeof Media>


  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  // Relationships end
}
