import express from 'express';
import createConnection from '../typeorm';
import { router } from './routes';

import '../../../shared/container';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

export { app };
