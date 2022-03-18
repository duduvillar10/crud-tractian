import { Company, ICompany } from '../../../company/infra/entities/Company';
import { Schema, model } from 'mongoose';

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin?: boolean;
  company: ICompany;
}

const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  },
  { timestamps: true },
);

schema.pre('deleteOne', async function (next) {
  await Company.updateOne(
    { users: { $in: [this._conditions._id] } },
    { $pull: { users: { $in: [this._conditions._id] } } },
  );

  next();
});

schema.pre('save', async function (next) {
  await Company.updateOne(
    { _id: this.company },
    { $push: { users: this._id } },
  );

  next();
});

const User = model<IUser>('User', schema);

export { IUser, User };
