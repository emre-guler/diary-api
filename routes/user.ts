import { Router } from 'express';
import * as checkAuth from '../middleware/check-auth';
const router = Router();

router.get('/', async () => {

});

router.get('/logout', checkAuth.default, async () => {

})

export default router;