import { Router } from 'express';
import { CreateAssetController } from '../../../../modules/assets/useCases/createAsset/CreateAssetController';
import { DeleteAssetController } from '../../../../modules/assets/useCases/deleteAsset/DeleteAssetController';
import { ListAssetsController } from '../../../../modules/assets/useCases/listAssets/ListAssetsController';
import { UpdateAssetController } from '../../../../modules/assets/useCases/updateAsset/UpdateAssetController';

const assetsRoutes = Router();

const createAssetController = new CreateAssetController();
const listAssetsController = new ListAssetsController();
const updateAssetController = new UpdateAssetController();
const deleteAssetController = new DeleteAssetController();

assetsRoutes.post('/', createAssetController.handle);

assetsRoutes.get('/', listAssetsController.handle);

assetsRoutes.put('/:id', updateAssetController.handle);

assetsRoutes.delete('/:id', deleteAssetController.handle);

export { assetsRoutes };
