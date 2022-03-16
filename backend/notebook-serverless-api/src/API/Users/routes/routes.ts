import { createUser, readOneUser, getUsers, updateOne, deleteAll, deleteOneUser } from "../controller/controller";

import * as Express from 'express';
import { Router } from "express";


const router:Router = Express.Router();

router.post('/newUser', createUser); //Working
router.get('/getUsers', getUsers); //working
router.get('/getUser/:userName', readOneUser); //Working
router.put('/updateUser/:userName', updateOne); //Working
router.delete('/deleteUser/:userName', deleteOneUser); //Working
router.delete('/deleteAllUsers', deleteAll); //Working

export default router