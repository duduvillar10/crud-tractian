import { Status } from '../infra/entities/Asset';

interface ICreateAssetDTO {
  name: string;
  description: string;
  model: string;
  owner: string;
  unit: string;
}
export { ICreateAssetDTO };
