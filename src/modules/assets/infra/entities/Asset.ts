import { IUnit, Unit } from '../../../units/infra/entities/Unit';
import { Schema, model, ObjectId } from 'mongoose';

export enum Status {
  Running = 'Running',
  Alerting = 'Alerting',
  Stopped = 'Stopped',
}

interface IAsset {
  name: string;

  description: string;

  model: string;

  owner: string;

  status?: Status;

  health?: number;

  image: string;

  unit: IUnit;
}

const schema = new Schema<IAsset>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    model: { type: String, required: true },
    owner: { type: String, required: true },
    status: {
      type: String,
      enum: Status,
      default: Status.Stopped,
    },
    health: {
      type: Number,
      min: 0,
      max: 100,
      default: 100,
    },
    image: { type: String, required: true },
    unit: { type: Schema.Types.ObjectId, ref: 'Unit', required: true },
  },
  { timestamps: true },
);

schema.pre('deleteOne', async function (next) {
  await Unit.updateOne(
    { assets: { $in: [this._conditions._id] } },
    { $pull: { assets: { $in: [this._conditions._id] } } },
  );

  next();
});

schema.pre('save', async function (next) {
  await Unit.updateOne({ _id: this.unit }, { $push: { assets: this._id } });

  next();
});

const Asset = model<IAsset>('Asset', schema);

export { Asset, IAsset };
