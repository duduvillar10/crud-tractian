import { IUnit } from '../../../../units/infra/typeorm/entities/Unit';
import { User } from '../../../../users/infra/typeorm/entities/User';

interface Company {
  name: string;

  description: string;

  unit: IUnit[];

  user: User[];
}

export { Company };
