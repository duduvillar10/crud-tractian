import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Company } from '../../../../company/infra/typeorm/entities/Company';

@Entity('users')
class User {
  id: string;

  name: string;

  description: string;

  company: Company;

  created_at: Date;
}

export { User };
