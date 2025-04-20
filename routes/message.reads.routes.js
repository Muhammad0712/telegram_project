const { addNewMessageRead, getAllMessageReads, getMessageReadById, updateMessageReadById, deleteMessageReadById } = require('../controllers/message.reads.controller');

const router = require('express').Router();

router.post("/", addNewMessageRead);
router.get("/", getAllMessageReads);
router.get("/:id", getMessageReadById);
router.put("/:id", updateMessageReadById);
router.delete("/:id", deleteMessageReadById);



module.exports = router;
