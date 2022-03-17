import { IUnit, Unit } from '../../../units/infra/entities/Unit';
import { Schema, model } from 'mongoose';
import { Asset } from '../../../assets/infra/entities/Asset';
import { IUser, User } from '../../../users/infra/entities/User';

interface ICompany {
  name: string;

  description: string;

  units: IUnit[];

  users: IUser[];
}

const schema = new Schema<ICompany>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  units: [{ type: Schema.Types.ObjectId, ref: 'Unit' }],
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

schema.pre('deleteOne', async function (next) {
  await User.deleteMany({ company: this._conditions._id });

  const unit = await Unit.find({ company: this._conditions._id });
  unit.forEach(async unit => await Unit.deleteOne({ _id: unit.id }));
  next();
});

const Company = model<ICompany>('Company', schema);

export { Company, ICompany };
