import express from 'express';
const router = express.Router();

router.get('/balance', (req, res) => {
  res.json({ balance: 10000, currency: 'PKR' });
});

router.post('/deposit', (req, res) => {
  res.json({ success: true, message: 'Deposit successful' });
});

export default router;
