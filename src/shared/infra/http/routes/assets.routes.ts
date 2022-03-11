import { Router } from 'express'
import { CreateAssetController } from '../../../../modules/assets/infra/useCases/createAsset/CreateAssetController';
import { ListAssetsController } from '../../../../modules/assets/infra/useCases/listAssets/ListAssetsController';

const assetsRoutes = Router();

const createAssetController = new CreateAssetController()
const listAssetsController = new ListAssetsController()

assetsRoutes.post('/', createAssetController.handle)

assetsRoutes.get('/', listAssetsController.handle)

export { assetsRoutes }