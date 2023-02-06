import express from "express";
import {getUsers, getUsersById, createUsers, updateUsers, deleteUsers, getFeedback, saveFeedback} from "../controller/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);
router.get('/feedbacks', getFeedback);
router.post('/feedbacks', saveFeedback);

export default router;
