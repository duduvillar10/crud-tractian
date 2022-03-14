import { IUnit } from '../../../units/infra/entities/Unit';
import { Schema, model, ObjectId } from 'mongoose';
interface IAsset {
  _id: ObjectId;

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

const Asset = model<IAsset>('Asset', schema);

export { Asset, IAsset };
