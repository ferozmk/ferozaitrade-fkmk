import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  // Mock login for now
  res.json({ success: true, token: 'mock-jwt-token', user: { email: 'user@example.com' } });
});

router.post('/register', (req, res) => {
  res.json({ success: true, message: 'User registered' });
});

export default router;
