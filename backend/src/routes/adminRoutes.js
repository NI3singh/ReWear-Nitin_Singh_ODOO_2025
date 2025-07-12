import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminOnly.js';
import { getPendingItems, approveItem, rejectItem } from '../controllers/adminController.js';

const router = express.Router();

router.use(authMiddleware, adminOnly);
router.get('/items/pending', getPendingItems);
router.post('/items/:id/approve', approveItem);
router.post('/items/:id/reject', rejectItem);

export default router;
