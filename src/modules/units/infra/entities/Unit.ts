import { Company, ICompany } from '../../../company/infra/entities/Company';
import { Schema, model, ObjectId } from 'mongoose';
import { Asset, IAsset } from '../../../assets/infra/entities/Asset';

interface IUnit {
  name: string;

  description: string;

  assets: IAsset[];

  company: ICompany;
}

const schema = new Schema<IUnit>(
  {
    name: { type: String, required: true },

    description: { type: String, required: true },

    assets: [{ type: Schema.Types.ObjectId, ref: 'Asset' }],

    company: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  },
  { timestamps: true },
);

schema.pre('deleteOne', async function (next) {
  await Company.updateOne(
    { units: { $in: [this._conditions._id] } },
    { $pull: { units: { _id: this._conditions._id } } },
  );

  await Asset.deleteMany({ unit: this._conditions._id });

  next();
});

const Unit = model<IUnit>('Unit', schema);

export { Unit, IUnit };
