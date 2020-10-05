import * as bcrypt from 'bcryptjs';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  username: string;

  @Column({ length: 75 })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hashSync(this.password, 10);
    console.log('-------- Password hash --------');
  }
}
