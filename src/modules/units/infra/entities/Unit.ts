import { ICompany } from '../../../company/infra/entities/Company';
import { Schema, model, ObjectId } from 'mongoose';
import { IAsset } from '../../../assets/infra/entities/Asset';

interface IUnit {
  _id: ObjectId;

  name: string;

  description: string;

  assets: IAsset[];

  company: ICompany;
}

const schema = new Schema<IUnit>(
  {
    name: { type: String, required: true },

    description: String,

    assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],

    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  },
  { timestamps: true },
);

const Unit = model<IUnit>('Unit', schema);

export { Unit, IUnit };
