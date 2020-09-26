import { Router } from 'express';

export const router = Router();

router.get('/', (req, res) => res.json({ hello: 'earth' }));

router.post('/error', (req, res) => {
  console.log('Dashboard error received');

  res.json({ received: true })
});