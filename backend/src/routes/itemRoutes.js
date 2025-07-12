import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { addItem, getApprovedItems, getItemById, getMyItems } from '../controllers/itemController.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, upload.array('images', 5), addItem);
router.get('/', getApprovedItems);
router.get('/my', authMiddleware, getMyItems);
router.get('/:id', getItemById);

export default router;
