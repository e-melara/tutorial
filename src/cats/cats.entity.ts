import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  @Column()
  breed: String;

  @Column()
  age: number;

  @Column({ default: true })
  isActive: boolean;
}
