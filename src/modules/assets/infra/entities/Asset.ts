import { IUnit, Unit } from '../../../units/infra/entities/Unit';
import { Schema, model, ObjectId } from 'mongoose';
interface IAsset {
  name: string;

  description: string;

  model: string;

  owner: string;

  status: string;

  health: number;

  image: string;

  unit: IUnit;
}

const schema = new Schema<IAsset>(
  {
    name: { type: String, required: true },
    description: { type: String },
    model: { type: String },
    owner: { type: String },
    status: { type: String },
    health: { type: Number },
    image: { type: String },
    unit: { type: Schema.Types.ObjectId, ref: 'Unit', required: true },
  },
  { timestamps: true },
);

schema.pre('deleteOne', async function (next) {
  await Unit.updateOne(
    { assets: { $in: [this._conditions._id] } },
    { $pull: { assets: { _id: this._conditions._id } } },
  );

  next();
});

const Asset = model<IAsset>('Asset', schema);

export { Asset, IAsset };
