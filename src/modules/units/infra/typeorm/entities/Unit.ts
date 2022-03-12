import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import { Asset } from '../../../../assets/infra/typeorm/entities/Asset';
import { Company } from '../../../../company/infra/typeorm/entities/Company';

@Entity('Unit')
class Unit {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Asset, asset => asset.unit)
  asset: Asset[];

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company' })
  company: Company;

  @CreateDateColumn()
  created_at: Date;
}

export { Unit };
