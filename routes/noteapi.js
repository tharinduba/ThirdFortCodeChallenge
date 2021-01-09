const express=require('express');
const router=express.Router();
const Note=require('../models/note');

const NoteController = require('../controller/notecontroller')



router.get("/notes",NoteController.notes_get_all)

router.get("/note/:id",NoteController.get_note)

router.get("/archivednotes",NoteController.get_archived_notes)

router.get("/notarchivednotes",NoteController.get_notarchived_notes)

router.post("/note",NoteController.create_note)

router.put("/note/:id",NoteController.update_note)

router.delete("/note/:id",NoteController.delete_note)

module.exports=router;
