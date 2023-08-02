import express from "express";

import { getMakanan, createMakanan, deleteMakanan, updateMakanan, searchMakanan } from "../controller/makanancontroller.js";
import { getMinuman, createMinuman, deleteMinuman, updateMinuman } from "../controller/minumancontroller.js";
import { getSnack, createSnack, deleteSnack, updateSnack } from "../controller/snackcontroller.js";
import { getAtk, createAtk, deleteAtk, updateAtk } from "../controller/atkcontroller.js";

const router = express.Router();

router.get('/makanan', getMakanan);
router.get('/minuman', getMinuman);
router.get('/snack', getSnack);
router.get('/atk', getAtk);

router.post('/makanan', createMakanan);
router.post('/minuman', createMinuman);
router.post('/snack', createSnack);
router.post('/atk', createAtk);

router.patch('/makanan/:id', updateMakanan);
router.patch('/minuman/:id', updateMinuman);
router.patch('/snack/:id', updateSnack);
router.patch('/atk/:id', updateAtk);

router.delete('/makanan/:id', deleteMakanan);
router.delete('/minuman/:id', deleteMinuman);
router.delete('/snack/:id', deleteSnack);
router.delete('/atk/:id', deleteAtk);

router.delete('/search', searchMakanan);

export default router;
