import { ICompany } from '../../../company/infra/entities/Company';
import { Schema, model } from 'mongoose';
import { IAsset } from '../../../assets/infra/entities/Asset';

interface IUnit {
  name: string;

  description: string;

  assets: IAsset[];

  company: ICompany;
}

const schema = new Schema<IUnit>(
  {
    name: String,

    description: String,

    assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],

    company: { type: Schema.Types.ObjectId, ref: 'Company' },
  },
  { timestamps: true },
);

const Unit = model<IUnit>('Unit', schema);

export { Unit, IUnit };
