import { Router } from 'express';
import { CreateCompanyController } from '../../../../modules/company/useCases/createCompany/CreateCompanyController';
import { DeleteCompanyController } from '../../../../modules/company/useCases/deleteCompany/DeleteCompanyController';
import { ListCompaniesController } from '../../../../modules/company/useCases/listCompanies/ListCompaniesController';
import { UpdateCompanyController } from '../../../../modules/company/useCases/updateCompany/UpdateCompanyController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();
const updateCompanyController = new UpdateCompanyController();
const deleteCompanyController = new DeleteCompanyController();

companiesRoutes.use(ensureAuthenticated);

companiesRoutes.post('/', createCompanyController.handle);

companiesRoutes.get('/', listCompaniesController.handle);

companiesRoutes.put('/:id', updateCompanyController.handle);

companiesRoutes.delete('/:id', deleteCompanyController.handle);

export { companiesRoutes };
