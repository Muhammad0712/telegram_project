const { addNewChatPost, getAllChatPosts, getChatPostById, updateChatPostById, deleteChatPostById } = require('../controllers/chat.posts.controller');

const router = require('express').Router();

router.post("/", addNewChatPost);
router.get("/", getAllChatPosts);
router.get("/:id", getChatPostById);
router.put("/:id", updateChatPostById);
router.delete("/:id", deleteChatPostById);



module.exports = router;
