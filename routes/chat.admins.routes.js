const { addNewChatAdmin, getAllChatAdmins, getChatAdminById, updateChatAdminById, deleteChatAdminById } = require('../controllers/chat.admins.controller');

const router = require('express').Router();

router.post("/", addNewChatAdmin);
router.get("/", getAllChatAdmins);
router.get("/:id", getChatAdminById);
router.put("/:id", updateChatAdminById);
router.delete("/:id", deleteChatAdminById);



module.exports = router;
