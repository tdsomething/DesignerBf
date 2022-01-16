import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Length, IsEmail } from 'class-validator'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 32 })
  @Length(6, 32)
  @IsEmail()
  email: string

  @Column({ length: 32 })
  @Length(8, 32)
  password: string

  @Column({ length: 8 })
  @Length(0, 8)
  nickName: string
}
