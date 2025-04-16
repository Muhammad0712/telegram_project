const { addNewMessageEdit, getAllMessageEdits, getMessageEditsById, updateMessageEditById, deleteMessageEditById } = require('../controllers/message.edits.controller');

const router = require('express').Router();

router.post("/", addNewMessageEdit);
router.get("/", getAllMessageEdits);
router.get("/:id", getMessageEditsById);
router.put("/:id", updateMessageEditById);
router.delete("/:id", deleteMessageEditById);



module.exports = router;
