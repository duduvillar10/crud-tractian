import { Unit } from '../../units/infra/typeorm/entities/Unit';

interface IUpdateAssetDTO {
  name?: string;
  description?: string;
  model?: string;
  owner?: string;
  status?: string;
  health?: number;
  unit?: string;
}
export { IUpdateAssetDTO };
