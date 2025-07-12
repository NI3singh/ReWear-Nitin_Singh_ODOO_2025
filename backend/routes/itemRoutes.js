import express from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';
import { addItem, getApprovedItems, getItemById } from '../controllers/itemController.js';

const router = express.Router();

router.post('/', authMiddleware, upload.array('images', 5), addItem);
router.get('/', getApprovedItems);
router.get('/:id', getItemById);

export default router;
