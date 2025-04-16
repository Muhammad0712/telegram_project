const router = require('express').Router();

const usersRouter = require('./users.routes');
const ContactsRouter = require('./contacts.routes');
const chatsRouter = require("./chats.routes");
const userChatsRouter = require("./user.chats.routes");
const chatAdminRouter = require("./chat.admins.routes");

router.use("/users", usersRouter);
router.use("/contacts", ContactsRouter);
router.use("/chats", chatsRouter);
router.use("/user-chats", userChatsRouter);
router.use("/chat-admins", chatAdminRouter);

module.exports = router;