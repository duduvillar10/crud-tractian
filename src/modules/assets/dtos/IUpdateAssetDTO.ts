import { Unit } from '../../units/infra/entities/Unit';

interface IUpdateAssetDTO {
  name?: string;
  description?: string;
  model?: string;
  owner?: string;
  status?: string;
  health?: number;
}
export { IUpdateAssetDTO };
