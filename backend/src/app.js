import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import swapRoutes from './routes/swapRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

// Allowed front‑end origins
const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL, // e.g. https://app.myapp.com in production
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    // allow no‑origin (e.g. mobile clients, Postman)
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error(`CORS rejection: origin ${origin}`));
  },
  credentials: true,
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
}));
app.options('*', cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Example: setting auth cookie on login
app.post('/api/auth/login', (req, res) => {
  const token = generateJwtForUser(req.body.user);
  const isProd = process.env.NODE_ENV === 'production';
  res.cookie('token', token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    maxAge: 24*60*60*1000,
  });
  res.json({ success: true });
});

app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/swaps', swapRoutes);
app.use('/api/admin', adminRoutes);

export default app;
