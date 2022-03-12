import { Company } from '../../../../company/infra/typeorm/entities/Company';
import { Schema, model } from 'mongoose';
import { IAsset } from '../../../../assets/infra/typeorm/entities/Asset';

interface IUnit {
  name: string;

  description: string;

  assets: IAsset[];

  company: Company;
}

const schema = new Schema<IUnit>(
  {
    name: String,

    description: String,

    assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],

    company: String,
  },
  { timestamps: true },
);

const Unit = model<IUnit>('Unit', schema);

export { Unit, IUnit };
