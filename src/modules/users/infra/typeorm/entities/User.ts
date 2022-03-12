import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Company } from '../../../../company/infra/typeorm/entities/Company';

class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company' })
  company: Company;

  @CreateDateColumn()
  created_at: Date;
}

export { User };
