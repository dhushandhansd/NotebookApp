import {createNotes, deleteNote, readAllNote, readOneNote, updateNote, deleteAll} from '../controller/controller';

import * as Express from 'express';
import {Router} from 'express';

const router:Router = Express.Router();

router.post('/newNote', createNotes);
router.get('/readNote/:noteBookId', readOneNote);
router.get('/readAllNote', readAllNote);
router.put('/updateNote/:noteBookId', updateNote);
router.delete('/deleteNote/:noteBookId', deleteNote);
router.delete('/deleteAllNotes', deleteAll);

export default router;