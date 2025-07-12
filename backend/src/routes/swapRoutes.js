import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { requestSwap, redeemViaPoints, getMySwaps } from '../controllers/swapController.js';

const router = express.Router();

router.post('/request', authMiddleware, requestSwap);
router.post('/redeem', authMiddleware, redeemViaPoints);
router.get('/my', authMiddleware, getMySwaps);


export default router;
