import { Router } from "express";
import { getCustomer } from '../controllers/customerController.js';

const router = Router();

router.get("/customers", getCustomer);

export default router;