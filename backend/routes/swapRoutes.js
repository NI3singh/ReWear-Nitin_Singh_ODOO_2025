import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { requestSwap, redeemViaPoints } from '../controllers/swapController.js';

const router = express.Router();

router.post('/request', authMiddleware, requestSwap);
router.post('/redeem', authMiddleware, redeemViaPoints);

export default router;
