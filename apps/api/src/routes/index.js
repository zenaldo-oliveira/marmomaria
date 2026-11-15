import { Router } from 'express';
import healthCheck from './health-check.js';
import orcamento from './orcamento.js';

const router = Router();

export default () => {
    router.get('/health', healthCheck);
    router.post('/orcamento', orcamento);

    return router;
};

