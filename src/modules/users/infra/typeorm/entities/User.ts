import { Company } from '../../../../company/infra/typeorm/entities/Company';

class User {
  id: string;

  name: string;

  description: string;

  company: Company;

  created_at: Date;
}

export { User };
