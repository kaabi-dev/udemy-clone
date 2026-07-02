import express from 'express';
import { registerUser } from '../../controllers/auth-controller/index.js';

const router = express.Router();

// Create methods
router.post('/register', registerUser);
router.get('/aa', (req, res) => {
  return res.send(200).json({
    message: 'hello',
  });
});

export default router;
