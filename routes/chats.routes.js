const { addNewChat, getAllChat, getChatById, updateChatById, deleteChatById } = require('../controllers/chats.controller');

const router = require('express').Router();

router.post("/", addNewChat);
router.get("/", getAllChat);
router.get("/:id", getChatById);
router.put("/:id", updateChatById);
router.delete("/:id", deleteChatById);



module.exports = router;
