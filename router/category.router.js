import express from 'express';

const router=express.Router();
import * as categoryController from '../controller/category.controller.js'; 

router.post("/save",categoryController.save);

router.get("/fetch",categoryController.fetch);

export default router;