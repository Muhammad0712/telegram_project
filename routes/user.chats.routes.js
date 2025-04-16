const { addNewUserChat, getAllUserChats, getUserChatById, updateUserChatById, deleteUserChatById } = require('../controllers/user.chats.controller');

const router = require('express').Router();

router.post("/", addNewUserChat);
router.get("/", getAllUserChats);
router.get("/:id", getUserChatById);
router.put("/:id", updateUserChatById);
router.delete("/:id", deleteUserChatById);



module.exports = router;
