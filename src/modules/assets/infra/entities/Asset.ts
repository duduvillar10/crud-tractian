import { IUnit } from '../../../../units/infra/typeorm/entities/Unit';
import { Schema, model } from 'mongoose';
interface IAsset {
  name: string;

  description: string;

  model: string;

  owner: string;

  status: string;

  health: number;

  image: string;

  unit?: IUnit;
}

const schema = new Schema<IAsset>({
  name: { type: String },
  description: { type: String },
  model: { type: String },
  owner: { type: String },
  status: { type: String },
  health: { type: Number },
  image: { type: String },
  unit: { type: Schema.Types.ObjectId, ref: 'Unit' },
});

const Asset = model<IAsset>('Asset', schema);

export { Asset, IAsset };
