import express from 'express'
import { User } from '../models/user.js';
import { getAllUser , checkNetworking} from '../controllers/user.js';
const router = express.Router();

router.get('/all', getAllUser)

router.get('/', checkNetworking)

export default router;