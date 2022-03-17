import { Company, ICompany } from '../../../company/infra/entities/Company';
import { Schema, model } from 'mongoose';

interface IUser {
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
    isAdmin: { type: Boolean },
    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  },
  { timestamps: true },
);

schema.pre('deleteOne', async function (next) {
  await Company.updateOne(
    { users: { $in: [this._conditions._id] } },
    { $pull: { users: { _id: this._conditions._id } } },
  );

  next();
});

const User = model<IUser>('User', schema);

export { IUser, User };
