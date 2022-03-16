import { Unit } from '../../units/infra/entities/Unit';
import { Status } from '../infra/entities/Asset';

interface IUpdateAssetDTO {
  name?: string;
  description?: string;
  model?: string;
  owner?: string;
  status?: Status;
  health?: number;
  image?: string;
}
export { IUpdateAssetDTO };
