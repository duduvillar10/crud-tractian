import { Router } from 'express';
import { CreateCompanyController } from '../../../../modules/company/useCases/createCompany/CreateCompanyController';
import { DeleteCompanyController } from '../../../../modules/company/useCases/deleteCompany/DeleteCompanyController';
import { GetCompanyController } from '../../../../modules/company/useCases/getCompany/GetCompanyController';
import { ListCompaniesController } from '../../../../modules/company/useCases/listCompanies/ListCompaniesController';
import { UpdateCompanyController } from '../../../../modules/company/useCases/updateCompany/UpdateCompanyController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { validateObjectId } from '../middlewares/validateObjectId';

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();
const updateCompanyController = new UpdateCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const getCompanyController = new GetCompanyController();

companiesRoutes.use(ensureAuthenticated);

companiesRoutes.get('/', listCompaniesController.handle);

companiesRoutes.get('/:id', validateObjectId, getCompanyController.handle);

companiesRoutes.use(ensureAdmin);

companiesRoutes.post('/', createCompanyController.handle);

companiesRoutes.put('/:id', validateObjectId, updateCompanyController.handle);

companiesRoutes.delete(
  '/:id',
  validateObjectId,
  deleteCompanyController.handle,
);

export { companiesRoutes };
