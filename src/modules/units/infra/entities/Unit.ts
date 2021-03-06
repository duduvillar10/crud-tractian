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
    { $pull: { units: { $in: [this._conditions._id] } } },
  );

  const assets = await Asset.find({ unit: this._conditions._id });
  assets.forEach(async asset => await Asset.deleteOne({ _id: asset.id }));
  next();
});

schema.pre('save', async function (next) {
  await Company.updateOne(
    { _id: this.company },
    { $push: { units: this._id } },
  );

  next();
});

const Unit = model<IUnit>('Unit', schema);

export { Unit, IUnit };
