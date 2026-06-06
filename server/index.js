import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import authRoutes from './routes/auth.js';
import walletRoutes from './routes/wallet.js';
import marketRoutes from './routes/market.js';
import aiRoutes from './routes/ai.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Firebase Setup (Agar service account file hai toh use karein, warna skip)
try {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }
} catch (error) {
  console.log("Firebase init skipped or error:", error.message);
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('Ferozai Trade API is Running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
