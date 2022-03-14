import { IUnit } from '../../../units/infra/entities/Unit';
import { User } from '../../../users/infra/typeorm/entities/User';
import { Schema, model } from 'mongoose';

interface ICompany {
  name: string;

  description: string;

  unit: IUnit[];

  user: User[];
}

const schema = new Schema<ICompany>({
  name: { type: String, required: true },
  description: { type: String },
  unit: [{ type: Schema.Types.ObjectId, ref: 'Unit' }],
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Company = model<ICompany>('Company', schema);

export { Company, ICompany };
