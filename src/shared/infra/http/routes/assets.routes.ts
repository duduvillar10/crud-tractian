import { Router } from 'express';
import { CreateAssetController } from '../../../../modules/assets/useCases/createAsset/CreateAssetController';
import { DeleteAssetController } from '../../../../modules/assets/useCases/deleteAsset/DeleteAssetController';
import { ListAssetsController } from '../../../../modules/assets/useCases/listAssets/ListAssetsController';
import { ListAssetsByUnitController } from '../../../../modules/assets/useCases/listAssetsByUnit/ListAssetsByUnitController';
import { UpdateAssetController } from '../../../../modules/assets/useCases/updateAsset/UpdateAssetController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { validateObjectId } from '../middlewares/validateObjectId';

const assetsRoutes = Router();

const createAssetController = new CreateAssetController();
const listAssetsController = new ListAssetsController();
const listAssetsByUnitController = new ListAssetsByUnitController();
const updateAssetController = new UpdateAssetController();
const deleteAssetController = new DeleteAssetController();

assetsRoutes.use(ensureAuthenticated);

assetsRoutes.get('/', listAssetsController.handle);

assetsRoutes.get(
  '/unit/:id',
  validateObjectId,
  listAssetsByUnitController.handle,
);

assetsRoutes.use(ensureAdmin);

assetsRoutes.post('/', createAssetController.handle);

assetsRoutes.put('/:id', validateObjectId, updateAssetController.handle);

assetsRoutes.delete('/:id', validateObjectId, deleteAssetController.handle);

export { assetsRoutes };
