const router = require('express').Router();

const usersRouter = require('./users.routes');
const ContactsRouter = require('./contacts.routes');
const chatsRouter = require("./chats.routes");
const userChatsRouter = require("./user.chats.routes");
const chatAdminRouter = require("./chat.admins.routes");
const channelsRouter = require("./channels.routes");
const chatPostsRouter = require("./chat.posts.routes");
const messagesRouter = require("./messages.routes");
const messageEditsRouter = require("./message.edits.routes");

router.use("/users", usersRouter);
router.use("/contacts", ContactsRouter);
router.use("/chats", chatsRouter);
router.use("/user-chats", userChatsRouter);
router.use("/chat-admins", chatAdminRouter);
router.use("/channels", channelsRouter);
router.use("/chat-posts", chatPostsRouter);
router.use("/messages", messagesRouter);
router.use("/message-edits", messageEditsRouter)

module.exports = router;