import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Asset } from '../../../../assets/infra/typeorm/entities/Asset';

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
  // @ManyToOne(() => Company,)
  // @JoinColumn({name: 'company_id'})
  // Company: Company;

  @CreateDateColumn()
  created_at: Date;
}

export { Unit };
