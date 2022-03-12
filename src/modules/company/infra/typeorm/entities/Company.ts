import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Unit } from '../../../../units/infra/typeorm/entities/Unit';
import { User } from '../../../../users/infra/typeorm/entities/User';

@Entity('companies')
class Company {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Unit, unit => unit.company)
  unit: Unit[];

  @OneToMany(() => Unit, unit => unit.company)
  user: User[];

  @CreateDateColumn()
  created_at: Date;
}

export { Company };
