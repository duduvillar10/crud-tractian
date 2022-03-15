import { IUnit } from '../../../units/infra/entities/Unit';
import { User } from '../../../users/infra/typeorm/entities/User';
import { Schema, model } from 'mongoose';

interface ICompany {
  name: string;

  description: string;

  units: IUnit[];

  users: User[];
}

const schema = new Schema<ICompany>({
  name: { type: String, required: true },
  description: { type: String },
  units: [{ type: Schema.Types.ObjectId, ref: 'Unit' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Company = model<ICompany>('Company', schema);

export { Company, ICompany };
