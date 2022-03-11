import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectIdColumn,
} from 'typeorm';
import { Unit } from '../../../../units/infra/typeorm/entities/Unit';

@Entity('assets')
class Asset {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  model: string;

  @Column()
  owner: string;

  @Column()
  status: string;

  @Column()
  health: number;

  @Column()
  image: string;

  @ManyToOne(() => Unit)
  @JoinColumn({ name: 'unit' })
  unit: Unit;

  @CreateDateColumn()
  created_at: Date;
}

export { Asset };
