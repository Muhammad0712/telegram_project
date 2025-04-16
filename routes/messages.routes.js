const { addNewMessage, getAllMessages, getMessageById, updateMessageById, deleteMessageById } = require('../controllers/messages.controller');

const router = require('express').Router();

router.post("/", addNewMessage);
router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.put("/:id", updateMessageById);
router.delete("/:id", deleteMessageById);



module.exports = router;
