import { User } from '@modules/users/infra/typeorm/entities/User';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';

@Entity('finances')
class Finance {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column()
  description!: string;

  @Column()
  amount!: number;

  @Column()
  type!: string;

  @Column()
  date!: Date;

  @Column()
  frequency!: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user_id: User | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Finance }
