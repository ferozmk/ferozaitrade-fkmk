import express from 'express';
const router = express.Router();

router.get('/prices', (req, res) => {
  res.json({
    gold: 215000,
    silver: 2800,
    usd_pkr: 278.5
  });
});

export default router;
