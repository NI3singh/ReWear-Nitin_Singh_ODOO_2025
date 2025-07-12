import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/index.js';
import User from '../models/User.js';

export const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, jwtConfig.secret);
        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({ error: 'Invalid token' });

        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
